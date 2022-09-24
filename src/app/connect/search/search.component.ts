import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ProfileURL: any = "http://localhost:3000/UserProfile"
  userList: any[] = []
  user: any[] = []
  image: string = "";
  searchList: any
  keyword: any = ""
  searchStatus = false

  category: any

  constructor(public _dataservice: ConnectService, private _router_para: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    this.keyword = this._router_para.snapshot.paramMap.get('keyword')
    this.category = this._router_para.snapshot.paramMap.get('category')
    this._dataservice.searchDataByApi(this.keyword, this.category, this.ProfileURL).subscribe((data) => {
      this.searchList = data
      console.log(data);
    })
  }
  profile(ClgID: any) {
    this._router.navigate(['/profile', ClgID])
  }

  searchStudent() {
    this.searchStatus = !this.searchStatus
    this._router.navigate(['/searchResults', this.keyword, this.category])
  }

  reset() {
    location.replace("/search")
  }

}
