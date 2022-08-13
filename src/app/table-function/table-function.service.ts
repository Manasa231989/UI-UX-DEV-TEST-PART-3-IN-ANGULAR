import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableFunctionService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json');
  }
}
