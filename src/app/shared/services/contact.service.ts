/**
 * Created by jlhuerta on 9/7/16.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  private _url: string;

  constructor(private _http: Http) {

  }

  sendContactForm(contactForm, url) {
    this._url = url;

    var body = 'email='+contactForm.email+
                '&message='+contactForm.name+'\n'+contactForm.phone+'\n'+contactForm.message;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this._url, body, { headers: headers })
      .map(res => res.json());
  }
}
