import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MessService } from '../service/Product_Add_Messanger/mess.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(public activeRoute:ActivatedRoute, public service:ServiceService, private _msgser:MessService,private  _snackBar:MatSnackBar,private _router:Router) { }

  product:any = {}
  ngOnInit(): void {
    // console.log(this.activeRoute.snapshot.paramMap.get('id'))
    this.service.getProductsApibyId(this.activeRoute.snapshot.paramMap.get('id')!).subscribe((data)=>{
      if(data){
        // console.log(data)
        this.product = data
        // console.log(this.product)
      }
    })
 
  }
  padded:string|null=''

public lstadd:any=[]

  delete(id:any)
  {
    this.service.deleteProducts(id).subscribe({
      next:(res)=>{
        window.location.reload()
        
      }
    })
    this._router.navigate(['/display'])
  }


  handleaddtocart(){
  //   if(localStorage.getItem('logoutvalue')==='true')
  //   {
  //     localStorage.clear()
  //    }
  //   this.padded=localStorage.getItem('logvalue')
  //   console.log(this.padded)
  //   if(this.padded==='true')
  //   {
  //     this._msgser.sendMsg(this.product)
  //   this.lstadd=this.product
  //   let Ref=  this._snackBar.open("Item Added", 'Undo',{
  //     duration:2000
  //   });
  //   Ref.onAction().subscribe(()=>{
  //     console.log(this._msgser.cartitems)
  //     this._msgser.cartitems.forEach((element:any) => {
  //       if(element.id==this.lstadd.id )
  //       {
  //         if(element.qty>1)
  //         {
  //           element.qty--
  //         }
  //         else{
  //           this._msgser.cartitems.splice(this._msgser.cartitems.indexOf(element),1)
  //         }
  //       }
  //     })})
  //   }
  //   else 
  //   {
  // alert("first log in")
  //   }
    
    }


}
