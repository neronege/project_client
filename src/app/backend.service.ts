import { Injectable } from '@angular/core';
 
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { category } from './models/category';

 

 
@Injectable()
export class BackendService {
 
  baseURL: string = "https://localhost:44377";
 
  constructor(private HttpClient: HttpClient) {
  }
 
  getRepos(): Observable<category> {
    return this.HttpClient.get<category>(this.baseURL+"/api"+"/Values")
  }
 
}