import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserDetail } from '../model/user-detail';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl :string = 'https://demo-api.vercel.app/'

  constructor(private httpClient: HttpClient) { }

  public postSignUpDetails(userDetails : UserDetail){
    return this.httpClient.post(this.apiUrl+'users',userDetails);
  }
}
