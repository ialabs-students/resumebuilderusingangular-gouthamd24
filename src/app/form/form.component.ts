import { Component, OnInit, Input } from '@angular/core';
import { ResumeFormData } from 'model/ResumeForData';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  // @Input()
  // formData!: ResumeFormData;
  // editInfoEvent: any;


  showResume:boolean=false;
  formData: ResumeFormData;

  constructor() {
    this.formData ={
    firstName:"",
    lastName:"",
    address:"",
    email:"",
    mobile:"",
    objective:"",
    course:"",
    discipline:"",
    univ:"",
    year:"",
    grade:"",
    course2:"",
    discipline2:"",
    univ2:"",
    year2:"",
    grade2:"",
    designation:"",
    experience:"",
    projects1:"",
    Skill1:"",
    Skill2:"",
    Skill3:"",
    pq1:"",
    pq2:"",
    pq3:"",
    lan1:"",
    lan2:"",
    lan3:""
    }
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // binding data between html and ts component
  onSubmitForm() {


    // console.log(this.formData);
//localStorage.setItem("formData",JSON.stringify(this.formData));
this.showResume=true;

  }

   }

  
