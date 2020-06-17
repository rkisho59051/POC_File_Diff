import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SampleDataComponent } from './components/sample-data/sample-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

  title = 'poc-fileDiff';
  constructor(public dialog:MatDialog){ }

  displayValues(){
    console.log('Button clicked');
    this.dialog.open(SampleDataComponent);
  }
  
}
