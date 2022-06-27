import { Component, Input, OnInit } from '@angular/core';
import { ResumeFormData } from 'model/ResumeForData';

@Component({
  selector: 'app-display-resume',
  templateUrl: './display-resume.component.html',
  styleUrls: ['./display-resume.component.css']
})
export class DisplayResumeComponent implements OnInit {


  
  ​
  @Input()
  formData:ResumeFormData;
  

  constructor() { }

  ngOnInit(): void {
  }

}
