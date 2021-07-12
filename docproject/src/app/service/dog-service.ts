import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { dogType } from '../models/dog-type';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class DogService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 
  


}