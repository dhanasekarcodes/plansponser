import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStoreService } from '../../service/session-store.service';

@Component({
  selector: 'land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit {

  constructor(private router: Router, private sessionStoreService: SessionStoreService) { }

  ngOnInit(): void {
    
     
  }

  login(){

    let username = (document.getElementById("username") as HTMLInputElement).value;
    let password = (document.getElementById("password")as HTMLInputElement).value;
    this.sessionStoreService.setProfile(username);
    if(username == "Robert"){
      this.router.navigateByUrl('pages/home');
    }else{
      this.router.navigateByUrl('pages/participant?id=101');
    }
    
  }

}
