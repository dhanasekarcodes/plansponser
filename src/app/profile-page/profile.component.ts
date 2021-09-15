import { Component } from '@angular/core';

//import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['profile.component.scss'],
  template: `
  
  
      <router-outlet></router-outlet>
    
  
  `,
})
export class ProfileComponent {


  
  ngOnInit(): void {
    setTimeout(() => {

      document.getElementById("nb-global-spinner").classList.remove("spinner");
      
    }, 10000);
  }


  //menu = MENU_ITEMS;
}
