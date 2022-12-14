import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { AddErrorDialogComponent } from '../dialog/add-error.dialogue';

import { EditSuccessDialogComponent } from '../dialog/edit-success.dialogue';
import { InterviewExperienceDBService } from '../intexp.db.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _dialog:MatDialog,private _fb:FormBuilder,private _route:ActivatedRoute,private _db:InterviewExperienceDBService
    ,private _router:Router) { }

  interviewExperienceForm!:FormGroup
  postId:string|null = ''
  postList:any = []
  description:string=''

  mydate = new Date()
  ngOnInit(): void {

    this.interviewExperienceForm = this._fb.group({
      authorName:['',Validators.required],
      company:['',Validators.required],
      title:['',Validators.required],
      description:['',Validators.required],
      date:[this.mydate]
    })

    this.postId = this._route.snapshot.paramMap.get('id')
    this._db.getPostByID(this.postId).subscribe((item)=>{
      this.postList = item
      this.description = this.postList.description
    })
  }

  BackToList(){
    this._router.navigate(['/experiencelist'])
  }

  editorChange(event:EditorChangeContent|EditorChangeSelection)
  {
    //console.log("editor got changed ", event)
    // console.log(event['editor']['root']['innerHTML'])
    
  }

  submit(){

    if(this.interviewExperienceForm.value.authorName!='' &&
    this.interviewExperienceForm.value.title!='' &&
    this.interviewExperienceForm.value.company!='' &&
    this.interviewExperienceForm.value.description!=''){

      this._db.editInterviewExperience(this.interviewExperienceForm.value,this.postId).subscribe({
        next:(res)=>{

            this._dialog.open(EditSuccessDialogComponent)
          
        }
      })
    }
    else{
      this._dialog.open(AddErrorDialogComponent) 
    }

    
  }
}
