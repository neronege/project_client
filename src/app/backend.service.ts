import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import category from './models/category';
import { updateCategoryRequest } from './models/updateCategoryRequest';




@Injectable()
export class BackendService {

  baseURL: string = "https://localhost:5001";

  constructor(private HttpClient: HttpClient) {
  }

  getCategory() {
    return this.HttpClient.get(this.baseURL + "/api" + "/Category")
  }
  putCategory(id: number, category: any) {
    return this.HttpClient.put(this.baseURL + "/api" + "/Category/" + id, category);
  }

}


