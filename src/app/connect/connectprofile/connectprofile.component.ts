import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-connectprofile',
  templateUrl: './connectprofile.component.html',
  styleUrls: ['./connectprofile.component.css']
})
export class ConnectprofileComponent implements OnInit {
  profileURL = 'http://localhost:3000/UserProfile'
  image: string = '';
  userList: any[] = []
  clgID: any
  user: any[] = []
  name: string = '';
  contactnumber: any;
  gmail: any;
  certificate: any;
  skill: any[] = []
  Hobbies: any;
  Gender: any;
  dob: any;
  course: any
  books: boolean = false

  constructor(private _user: ConnectService, private _router: ActivatedRoute) { }

  ngOnInit(): void {

    this.clgID = this._router.snapshot.paramMap.get('ClgID')
    console.log(this.clgID);


    this._user.getDataByApi(this.profileURL).subscribe((data: any) => {
      this.userList = data
      this.user = this.userList.filter(e => e.ClgID == this.clgID)


    })
  }
}
