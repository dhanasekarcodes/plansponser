import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  

  constructor(private router: Router) {}

  public ngOnInit(): void {}


  onSubmit(){
    
    this.router.navigateByUrl('/pages/reports');
  }
  
}
