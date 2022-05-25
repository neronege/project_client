import { Injectable } from '@angular/core';
 
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import category from './models/category';
import {updateCategoryRequest} from './models/updateCategoryRequest';

 

 
@Injectable()
export class BackendService {
 
  baseURL: string = "https://localhost:44377";
 
  constructor(private HttpClient: HttpClient) {
  }
 
  getRepos(): Observable<category> {
    return this.HttpClient.get<category>(this.baseURL+"/api"+"/Values")
  }
  // putRepos(id : number, categoryRequest:category): Observable<category> {
  //   const updateCategoryRequest : updateCategoryRequest = {
  //     id : categoryRequest.id,
  //     title: categoryRequest.title,
  //     description: categoryRequest.description,
  //     password : categoryRequest.password,
  //     repassword : categoryRequest.repassword
  //     }
  //   }
  //   return this.HttpClient.put<category>(this.baseURL+"/api"+"/Values"+{id},updateCategoryRequest)
  }


