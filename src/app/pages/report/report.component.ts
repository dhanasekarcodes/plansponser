import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  data:any={};
  data1:any={};
  pieData:any={};
  pieData1:any={};

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.data = {
      label:['25-35', '35-45', '45-50', '>50'],
      data:[4, 6, 3, 2],
      color: '#EE6B5E'
    };

    this.data1 = {
      label:['25k-30k', '30k-40k', '40k-50k', '50k-55k'],
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
      ],
      align:"left",
      radius:"80%"
    };

    this.pieData1 = {
      label: ['Aggressive', 'Moderate', 'Conservative'],
      data: [
        { value: 4, name: 'Aggressive' },
        { value: 6, name: 'Moderate' },
        { value: 3, name: 'Conservative' }
      ],
      align:"left",
      radius:"80%"
    };
 
  }

  onSubmit(){
    
    this.router.navigateByUrl('/pages/participant-list');
  }

}
