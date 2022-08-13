import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { CareersComponent } from '../careers/careers.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public modalService: NgbModal) { }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
    }
    popenModal() {
      //ModalComponent is component name where modal is declare
      const modalRef = this.modalService.open(PrivacyComponent);
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }
    copenModal() {
      //ModalComponent is component name where modal is declare
      const modalRef = this.modalService.open(CareersComponent);
      modalRef.result.then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }



  ngOnInit(): void { }

}
