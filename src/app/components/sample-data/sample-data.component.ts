import { Component, OnInit } from '@angular/core';
import { DiffContent, DiffResults } from 'ngx-text-diff/lib/ngx-text-diff.model';

@Component({
  selector: 'app-sample-data',
  templateUrl: './sample-data.component.html',
  styleUrls: ['./sample-data.component.scss']
})
export class SampleDataComponent implements OnInit {
 show = false;
  previous:any={
    "Firstname":"John",
    "Lastname":"McMohan",
    "EmpCode":"A001",
    "City":"London",
    "Salary":"10000",
    "Car":"Ferrari",
    "Bike":"HondaCBR750",
    "Contact":"9999988888",
    "School":"KV",
    "Friend":"Jenny",
    "OldBuddy":"Mark"
  }
  next:any={
    "Firstname":"Albert",
    "Lastname":"McMohan",
    "EmpCode":"A002",
    "City":"Amsterdam",
    "Salary":"20000",
    "Car":"HondaCity",
    "Bike":"BMWX600",
    "Contact":"9999988888",
    "School":"KV2",
    "Friend":"Jenny",
    "OldBuddy":"Mark2"
  }

  constructor() { }

  ngOnInit(): void {
  }
  diffCheck(){
    if(this.show == true){
      this.show = false;
    } else if(this.show == false) { this.show = true;}
    
  }
  onCompareResults(diffResults: DiffResults) {
    console.log('diffResults', diffResults);
    
  }




}
