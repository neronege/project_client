import { Component, OnInit } from '@angular/core';

import { BackendService } from './backend.service';



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
  public newCategory :any = {
    title: "",
    description: "",
    password: "",
    rePassword: ""
  };
  public deleteCategory : any = null;
  constructor(private service: BackendService) {

  }

  ngOnInit(): void {
 
  }
  readCategories() {
    this.service.getCategory().subscribe((data: any) => {
      this.categories = data;
     
      this.category = this.categories[2];
      this.deleteCategory = this.categories[5]
      console.log(this.newCategory);
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
  
    this.service.postCategory(this.newCategory).subscribe((data:any) => {
    this.newCategory =data;
    this.newCategory.id= data.id;
    this.newCategory.title = data.title;
    this.newCategory.description = data.description;
    this.newCategory.password = data.password;
    this.newCategory.rePassword = data.rePassword;
     }); 
     this.readCategories();
  }
  deleteClick() {
    console.log()
    this.service.deleteCategory(this.deleteCategory.id).subscribe(() =>{
      this.readCategories();

    });
  }

}



