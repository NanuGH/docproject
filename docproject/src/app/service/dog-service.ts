import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { dogType } from '../models/dog-type';
import { Observable } from 'rxjs';
import { post } from '../models/post';

@Injectable({ providedIn: 'root' })

export class DogService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 /* getPost(){
    return this.httpClient.get(this.apiURL + "/posts");
  };*/

  getPost(){
    return this.httpClient.get<post[]>(this.apiURL + "/posts");
  };

  /*createDog(dogType:dogType):Observable<Response<Object>> {
    return this.httpClient.post<Response<Object
  }*/


}