import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = `${environment.apiURL}`;
  constructor(private http: HttpClient) {

   }

  getData(){
    return axios.get(`${this.apiURL}`, {responseType: 'text'}).then(response =>{
      console.log(response)
    })
    
  }
}
