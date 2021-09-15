import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { phData } from '../../models/plan-sponser-data';


@Component({
  selector: 'participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {

  public displayedColumns = ['name', 'age', 'goals', 'view'];
  phData_ = phData;
  
        
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
        title: 'Name',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'string',
      },
      income: {
        title: 'Income',
        type: 'string',
      },
      goals: {
        title: 'Short term goals',
        type: 'string',
      },
      longgoals: {
        title: 'Long term goals',
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

    let phDataKey: Array<string> = Object.keys(this.phData_); 
    this.data = [];
    phDataKey.forEach(item => {
      let obj = {
        id: 1,
        firstName: '',
        lastName: '',
        age: '',
        income:'',
        goals: '',
        longgoals: '',
        view: '>>>'
      };
      obj.id = Number.parseInt(item);
      obj.firstName = this.phData_[item].name;
      obj.age = this.phData_[item].age;
      obj.income = this.phData_[item].income;
      obj.goals = this.phData_[item].shortterm.join(" | ");
      //obj.goals = obj.goals.replace(","," | ");
      obj.longgoals = this.phData_[item].longterm.join(" | ");
      obj.view = ">>>"
      this.data.push(obj);
    });
       
    
    this.source = this.data;
   
  }

  onUserRowSelect(event): void {
    console.log("!!!!!",event);
    this.router.navigateByUrl('/pages/participant?id='+event.data.id);
  }

  

}
