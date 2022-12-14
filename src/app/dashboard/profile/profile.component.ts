import { Component, OnInit,ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/authservice/auth.service';
import { CustomValidators } from '../validations/validators';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  personForm!:FormGroup;
  @ViewChildren('personForm') createPersonForm!:NgForm;

  constructor(private _fb:FormBuilder,private auth:AuthService) { }
 
  

  dataTofill: any = {};
 
  ngOnInit(): void {
    this.personForm= this._fb.group({
      name:['',[Validators.required,Validators.maxLength(6)]],
      mobile:[null,[Validators.min(1),Validators.max(9999999999),Validators.required]],
      college:[''],
      Course:[''],
      EndYr:[''],
      certname:[''],
      certorg:[''],
      certno:[''],
      certurl:[''],
      branch:[''],
      skills:[''],
      batch:[null],
      id:[''],
      email:["",[Validators.required,CustomValidators.emailCheckParam('gmail')]],
     
    });

   
    this.dataTofill =  localStorage.getItem("profile");
    // console.log(JSON.parse(this.dataTofill.email));
    console.log(this.personForm);

    this.dataTofill = JSON.parse(this.dataTofill);

    this.personForm.patchValue({
      email:this.dataTofill.email,
      name:this.dataTofill.name,
      college:this.dataTofill.college,
      mobile:this.dataTofill.mobile,
      branch:this.dataTofill.branch,
      skills:this.dataTofill.skills,
      batch:this.dataTofill.batch,
      id:this.dataTofill.id
    })

  }
  submit(){
    console.log(this.personForm);
    console.log(this.personForm.value);
    console.log(this.personForm.value.category);
    console.log(this.personForm.get('name')!.errors?.['maxlength']);

    this.auth.storeProfiletoDB(this.personForm.value).subscribe((res)=>{
      console.log(res);
      // alert("profile edited successfully")
      window.location.reload()
      
    })
  }

  loaddata(){
   

    //is used to update the form partially 
    this.personForm.patchValue({
      name:'Tom',
      skills:{
        skillName:'Angular'
      }
    })
  }

  
BatchesArr:any[]=[
  {viewValue:-1,Text:"Select Batch"},
  {viewValue:1,Text:"2018"},
  {viewValue:2,Text:"2019"}, 
  {viewValue:2,Text:"2020"}, 
  {viewValue:2,Text:"2021"}, 
  {viewValue:2,Text:"2022"}, 
  {viewValue:2,Text:"2023"}, 
];


genders:any[]=[
  {viewValue:-1,Text:"Select Gender"},
  {viewValue:1,Text:"male"},
  {viewValue:2,Text:"female"} 
];


step = 0;

setStep(index: number) {
  this.step = index;
}

nextStep() {
  this.step++;
}

prevStep() {
  this.step--;
}


 map:any = new Map();




}


// aakash code 

// public signupForm!: FormGroup
// user: any = [];
// URL: any = "http://localhost:3000/UserProfile"
// username: any = ""
// updatedData: any[] = []



// constructor(private formBuilder: FormBuilder, private router: Router, private _data: DataService) { }

// ngOnInit(): void {
//   this.signupForm = this.formBuilder.group({
//     CollegeId: [null, [Validators.minLength(1), Validators.maxLength(7), Validators.required]],
//     FirstName: [null, Validators.required],
//     LastName: [null, Validators.required],

//     Contactnumber: [null, [Validators.minLength(1), Validators.maxLength(10), Validators.required]],
//     EmailId: [null, Validators.required, Validators.email],
//     Course: ['', Validators.required],
//     startingyr: ['', Validators.required],
//     EndYr: ['', Validators.required],
//     Department: ['', Validators.required],
//     Profile: ['Student'],





//   })
// }

// Register(): void {
//   console.log(this.signupForm.value)
//     console.log(this.signupForm.value.Password)
//     console.log(this.signupForm.value.CollegeId)
//     this._data.postDataByApi(this.signupForm.value, this.URL).subscribe((data: any) => {
//     this.user = data
//     console.log(this.user)




//   })

// }

// aakash code 