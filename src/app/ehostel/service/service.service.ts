import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/Models/product';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  dburl: string = "http://localhost:3000/product"

  s$ = new Subject();
  uniquepro: any
  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.dburl)
  }

  getProductsApibyId(id: string): Observable<any> {
    let subject = new ReplaySubject();
    this._http.get<Product[]>(this.dburl).subscribe((data) => {
      this.uniquepro = data.find(x => x.id == id);
      subject.next(this.uniquepro);
      console.log(this.uniquepro);
      subject.complete();
    })
    return subject;
  }
  getdb() {
    // const url='http://localhost:3000/profile';

    //  this._http.get("http://localhost:3000//comments").subscribe((data:any)=>{
    //   console.log(data);
    //  })

    //  this._http.get(url).subscribe((data:any)=>{
    //   console.log(data);

    //  })
  }

};
