import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nestedList'
})
export class NestedListPipe implements PipeTransform {

  transform(items: Item[], maxDepth:number): any[] {
    const home = items.find((item)=>item.title="Home");
    const el:Item = home?home:items[0]
    const absoluteZerothElement = items.indexOf(el)
    const nodes = []
    let depth = 0
    let sameDepth = true 
    const construct =  ()=>{
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        const el1 = items[i]
        const el2  = items[i+1]
        sameDepth =  el1.order!=0 && el2.order!=0
      
          
      }
    }
  
return []
}
}
