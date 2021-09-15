import { Component, OnInit } from '@angular/core';
import { SessionStoreService } from '../../service/session-store.service';

@Component({
  selector: 'success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  role:string;

  constructor(private sessionStoreService: SessionStoreService) { }

  ngOnInit(): void {

    this.role = this.sessionStoreService.getRole();
  }

}
