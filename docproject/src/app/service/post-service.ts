import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postType } from '../models/post-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /* getPost(){
    return this.httpClient.get(this.apiURL + "/posts");
  };*/

  getPost(){
    return this.httpClient.get<postType[]>(this.apiURL + "/posts");
  }

  createPost(postype:postType):Observable<postType> {
    return this.httpClient.post<postType>(this.apiURL + "/posts",postype)
  }

  delPost(idPost:String){
    return this.httpClient.delete(this.apiURL + "/posts/" + idPost)
  }

  updtPost(idPost:String,postype:postType):Observable<postType>{
    return this.httpClient.put<postType>(this.apiURL + "/posts", idPost)
  }

}
