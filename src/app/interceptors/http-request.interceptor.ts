import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { HttpCacheService } from 'src/app/services/http-cache.service';
import { Observable } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

/**
 * Intercept all http requests
 * @class {HttpRequestInterceptor}
 */
@Injectable()
export class HttpRequestInterceptor implements HttpRequestInterceptor {
  constructor(
    private _loading: LoadingService,
    private _cache: HttpCacheService
  ) {}

  /**
   * When an http request starts, set loading to true. When the request is finished, set loading to false.
   * If an error is thrown be sure loading is set to false.
   * @param {HttpRequest} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (
    //   request.url == '/api/bestellungen' ||
    //   request.url == '/api/menus?populate=*'
    // ) {
    //   return next.handle(request);
    // } else if (request.url == '/api/nachrichten') {
    //   return next.handle(request);
    // } else if (request.url == '/api/menus?populate=*')
    //   return next.handle(request);

    // else {
    this._loading.setLoading(true, request.url);
    let cachedResponse: any;
    if (request.method === 'GET') {
      cachedResponse = this._cache.get(request);
      if (cachedResponse) {
        console.log(
          `Response from cache for ${request.urlWithParams}`,
          cachedResponse
        );
      }
    } else if (
      request.method === 'POST' ||
      request.method === 'PUT' ||
      request.method === 'PATCH' ||
      request.method === 'DELETE'
    ) {
      const removedFromCache = this._cache.delete(request);
      if (removedFromCache) {
        console.log(`Cleared ${request.urlWithParams} from the cache`);
      }
    }
    return next.handle(request).pipe(
      tap<HttpEvent<any>>((httpEvent: HttpEvent<any>) => {
        if (httpEvent instanceof HttpResponse) {
          this._cache.put(request, httpEvent);
        }
        return cachedResponse ? cachedResponse : httpEvent;
      }),
      catchError((err: HttpErrorResponse) => {
        throw err;
      }),
      finalize(() => {
        this._loading.setLoading(false, request.url);
      })
    );
  }
}
