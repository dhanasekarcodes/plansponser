import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';


@Component({
  selector: 'participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {

  public displayedColumns = ['name', 'age', 'goals', 'view'];
  
        
  settings = {
    hideSubHeader: true,
    actions:{
      add:false,
      edit:false,
      delete:false,
    },
    
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      age: {
        title: 'age',
        type: 'string',
      },
      goals: {
        title: 'Short term Goals',
        type: 'string',
      },
      longgoals: {
        title: 'Long term Goals',
        type: 'string',
      },
      view: {
        title: 'View',
        type:"string"
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  data:any = [{
    id: 1,
    firstName: 'Dhanasekar',
    lastName: 'B',
    age: '30',
    goals: 'Travel | Celebration | Vacation',
    longgoals: 'Buy Home | Health Savings',
    view: '>>>'
  },
  {
    id: 2,
    firstName: 'Sobha',
    lastName: 'K',
    age: '30',
    goals: 'Car | Travel',
    longgoals: 'Retirement | Home',
    view: '>>>'
  },
  {
    id: 3,
    firstName: 'Navaneeth',
    lastName: 'K',
    age: '30',
    goals: 'Vacation',
    longgoals: 'Retirement | Health Savings',
    view: '>>>'
  }];
 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.source = this.data;
   
  }

  onUserRowSelect(event): void {
    console.log("!!!!!",event);
    this.router.navigateByUrl('/pages/participant?id='+event.data.id);
  }

  

}
