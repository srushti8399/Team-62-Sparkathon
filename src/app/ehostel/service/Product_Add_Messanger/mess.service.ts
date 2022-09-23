import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/Models/product';

@Injectable({
  providedIn: 'root'
})
export class MessService {
subject$=new Subject<any>()
public cartitems:any=[]
public wishitems:any=[]
public cartTotal=0;
counter=0
logsub$=new Subject()
loginsuc:string='false'
  constructor() { }

emptycart(){
  this.cartitems.splice(0,this.cartitems.length);
}
  sendMsg(product:Product){
   
    let productExists = false;
    for(let e in this.cartitems){
          if(this.cartitems[e].id===product.id)
          {
            this.cartitems[e].qty++;
            productExists=true
            break;
          }
        }
        if(!productExists)
        {
          this.cartitems.push({
            id:product.id,
            name:product.name,
             qty:1,
             price:product.price,
             image:product.image,
             description:product.des
             
          })
        }  
        this.getTotal();

    }

    getTotal():number{
      let gtotal=0;
      this.cartitems.forEach((item:Product) =>{
      gtotal+=((item.qty) *item.price)
      
    });
    return gtotal;
    }

    getMsg():Observable<any>{
    
      return this.subject$
  
   }

   serach(data:any){
    this.subject$.next(data);

   }
 
  gettotalitems():number
{
  let final:number=0
  
  this.cartitems.forEach((e:any)=>{
    if(e.qty>= 1)
{
  
  this.counter=e.qty

}
else{
  this.cartitems.forEach((data:any)=>{
    if(data.qty=0)
    this.counter++
  })
 }
 final=final+this.counter
  })
  
  return final ;
}
  }