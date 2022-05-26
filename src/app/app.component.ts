import { Component, OnInit } from '@angular/core';

import { BackendService } from './backend.service';
import category from './models/category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public categories: Array<any> = [];
  public category: any = null;

  constructor(private service: BackendService) {

  }

  ngOnInit(): void {
 
  }
  readCategories() {
    this.service.getCategory().subscribe((data: any) => {
      this.categories = data;
      this.category = this.categories[2];
      console.log(this.categories);
    })
  }





  getClick() {

    this.readCategories();

  }

  putClick() {
    console.log("put-category", this.category);
    this.service.putCategory(this.category.id, this.category).subscribe(() => {
      this.readCategories();
    });
  }
  postClick() {

  }
  deleteClick() {

  }

}



