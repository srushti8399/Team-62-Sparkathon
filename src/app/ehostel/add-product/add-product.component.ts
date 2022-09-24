import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _fb:FormBuilder,private _http:HttpClient) { }
  
  add_product!:FormGroup;
  ngOnInit(): void {

        
    this.add_product=this._fb.group({
      fullname:[''],
      pname:[''],
      year:[''],
      hostel:[''],
      cnumber:[''],
      price:['',Validators.min(0)],
      description:[''],
      image:[''],
      type:['']
  })

  }
  submit(){
    console.log(this.add_product.value);
    this.dbsave(this.add_product.value).subscribe({
      next:(res)=>{
      
      }
    })
   
  } 

  dbsave(data:any){
    console.log('runsave')
      return this._http.post<any>("http://localhost:3000/product",data)

  }
}


 





    


