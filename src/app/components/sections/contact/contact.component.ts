import { Component, OnInit } from '@angular/core';
import { GmapsComponent } from '../../gmaps/gmaps.component';
import { TranslateService } from '../../../pipes/angular2-translator/TranslateService';
import { TranslatePipe } from '../../../pipes/angular2-translator/TranslatePipe';
import { TranslateComponent } from "../../../pipes/angular2-translator/TranslateComponent";
import { ResourceService } from "../../../shared/services/resource.service";
import { ContactService } from "../../../shared/services/contact.service";
import { ContactForm } from '../../../shared/domains/ContactForm';
import { FormBuilder, ControlGroup } from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  pipes: [TranslatePipe],
  directives: [GmapsComponent, TranslateComponent],
  providers: [ResourceService, ContactService]
})
export class ContactComponent implements OnInit {

  form: ControlGroup;
  private messageSent = false;
  private messageSentFail = false;
  private response: any;
  private contactConfig;
  private contactForm = new ContactForm();

  private nameErrMsg = false;
  private emailErrMsg = false;
  private phoneErrMsg = false;
  private messageErrMsg = false;

  private preloader = false;

  constructor(private _fb: FormBuilder, private translate: TranslateService, private _resourceService: ResourceService, private _contactService: ContactService) {
    this.createForm();
  }

  createForm(){
    this.form = this._fb.group({
      name: [''],
      email: [''],
      phone: [''],
      message: [''],
      emailReceiver: ['']
    });
    this.contactForm = new ContactForm();
  }

  ngOnInit() {
    this._resourceService.getElements("app/shared/resources/contact-config.json")
      .subscribe(
        contactConfig =>	this.contactConfig = contactConfig,
        null,
        () => { }
      );
  }

  sendContactForm(){
    this.preloader = true;
    this.messageSent = false;
    this.messageSentFail = false;

    if(this.validForm(this.contactForm)){
      this._contactService.sendContactForm(this.contactForm, this.contactConfig.urlServerContact).subscribe(
        response => this.response = response,
        response => {
          if (response.status == 0) {
            this.messageSent = true;
          } else {
            this.messageSentFail = true;
          }
          this.createForm();
          this.preloader = false;
        });
    } else {
      this.preloader = false;
    }
  }

  validForm(form){
    let isValid = true;

    let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regExNumber = /^[0-9]+$/;

    this.nameErrMsg = false;
    this.emailErrMsg = false;
    this.phoneErrMsg = false;
    this.messageErrMsg = false;

    if(form.name == null || form.name === ''){
      isValid = false;
      this.nameErrMsg = true;
    }
    if(form.email == null || form.email === '' || !regExEmail.test(form.email) ){
      isValid = false;
      this.emailErrMsg = true;
    }
    if(form.phone == null || form.phone === '' || !regExNumber.test(form.phone) ) {
      isValid = false;
      this.phoneErrMsg = true;
    }
    if(form.message == null || form.message === ''){
      isValid = false;
      this.messageErrMsg = true;
    }

    return isValid;
  }
}
