import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

 

  
  data:any={};
  data1:any={};
  pieData:any={};
  pieData1:any={};

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.data = {
      label:['age 25-35', 'age 35-45', 'age 45-50', 'age >50'],
      data:[4, 6, 3, 2],
      color: '#EE6B5E'
    };

    this.data1 = {
      label:['Salary 30k-40k', 'Salary 30k-40k', 'Salary 30k-40k', 'Salary 30k-40k'],
      data:[6, 3, 2, 2],
      color: '#30F9EF'
    };

    this.pieData = {
      label: ['Retirement', 'Education savings', 'Health Savings', 'Buy a home', 'Loan payment','Buy a car'],
      data: [
        { value: 4, name: 'Retirement' },
        { value: 6, name: 'Education savings' },
        { value: 3, name: 'Health Savings' },
        { value: 4, name: 'Buy a home' },
        { value: 6, name: 'Loan payment' },
        { value: 6, name: 'Buy a car' },
      ]
    };

    this.pieData1 = {
      label: ['Aggressive', 'Moderate', 'Conservative'],
      data: [
        { value: 4, name: 'Aggressive' },
        { value: 6, name: 'Moderate' },
        { value: 3, name: 'Conservative' }
      ]
    };
 
  }

  onSubmit(){
    
    this.router.navigateByUrl('/pages/participant-list');
  }

}
