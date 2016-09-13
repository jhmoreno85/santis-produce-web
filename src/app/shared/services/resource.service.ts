/**
 * Created by jlhuerta on 9/5/16.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceService {
  private _url: string;

  constructor(private _http: Http) {
  }

  getElements(res) {
    this._url = res;
    return this._http.get(this._url)
      .map(res => res.json());
  }
}
