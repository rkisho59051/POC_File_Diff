import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-data',
  templateUrl: './sample-data.component.html',
  styleUrls: ['./sample-data.component.scss']
})
export class SampleDataComponent implements OnInit {
  person1:any={
    "Firstname":"John",
    "Lastname":"McMohan",
    "EmpCode":"A001",
    "City":"London",
    "Salary":"10000"
  }
  person2:any={
    "Firstname":"Albert",
    "Lastname":"McMohan",
    "EmpCode":"A002",
    "City":"Amsterdam",
    "Salary":"20000"
  }

  constructor() { }

  ngOnInit(): void {
  }


}
