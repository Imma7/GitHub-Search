import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '4193ec64f95f88022fb3';
  private clientsecret = '5ab8a176a8d93c1c740400f04c70d57bfee1eb82';
  constructor(private http: Http) {

  }

}
