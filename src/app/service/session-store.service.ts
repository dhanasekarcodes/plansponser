import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStoreService {

  name:string = "Robert";
  role: string;

  constructor() { }

  setProfile(name:string){
    this.name = name;
  }

  getRole(){
    if(this.name == "Robert"){
      this.role = "SPONSER";
      return this.role;
    }else{
      this.role = "PARTICIPANT";
      return this.role;
    }
  }
}
