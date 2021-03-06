import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username : string;
  constructor(private http : Http) {
    console.log("GithubService is ready");
    this.username = 'pat2013';
  }

  getUser() {
    return this.http.get('http://api.github.com/users/' + this.username).map(res => res.json())
  }

  getRepos() {
    return this.http.get('http://api.github.com/users/' + this.username + '/repos').map(res => res.json())
  }

  updateUser(username:string){
        this.username = username;
    }


}
