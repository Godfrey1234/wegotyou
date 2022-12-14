import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WegotyouService {

  constructor(private http:HttpClient) { }

  baseurl = "http://localhost:3000/"
  

  Register(data: any){
    return this.http.post(this.baseurl+ "register",data);
  }

  login(data: any){
    return this.http.post(this.baseurl+ "login",data);
  }

  query(data: any){
    return this.http.post(this.baseurl+ "query",data);
  }




}
