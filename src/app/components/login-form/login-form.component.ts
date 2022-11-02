import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import axios from 'axios';
interface FormValue {
  emailid: string;
  passwd: string;
}

@Component({
  selector: 'app-login-form',
  styleUrls: [ './login-form.component.css' ],
  templateUrl: './login-form.component.html',
})
@Injectable()
export class LoginFormComponent {
  public readonly model: FormValue = {
    emailid: '',
    passwd: '',
  };
  readonly ROOT_URL = 'http://localhost:3001/'



  onSubmit() {
      axios.get(this.ROOT_URL).then((res)=>{
        console.log(res)
      })
      var log = {
        "em": this.model.emailid,
        "pass": this.model.passwd
      }
      axios.post(this.ROOT_URL+'login', log).then((res)=>{
        console.log(res)
      })

    }
}

