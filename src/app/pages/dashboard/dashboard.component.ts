import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  loading = false;

  constructor(private router: Router) {}

  public ngOnInit(): void {}


  onSubmit(){
    this.loading = true;
    setTimeout(() => {
      
      this.router.navigateByUrl('/pages/reports');

    }, 3000);
    
    
  }
  
}
