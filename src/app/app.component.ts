import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-vermont';
  public modalReference: BsModalRef;
  public users: Array<string>;
  public userDetails: Array<string>;
  public userId: number;

  constructor(
    private modalService: BsModalService,
    private userData: UsersService
  ) {}

  ngOnInit() {
    this.getDataFromJSONPlaceholderAPI();
  }

  public openUserDetailsModal(userDetailsModal: TemplateRef<any>, user: any) {
    this.userDetails = user;
    this.modalReference = this.modalService.show(userDetailsModal, {
      class: 'modal-lg',
    });
  }

  public getDataFromJSONPlaceholderAPI() {
    this.userData.getUserData().subscribe((data) => {
      this.users = data;
    });
  }
}
