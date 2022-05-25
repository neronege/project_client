import { Component, OnInit } from '@angular/core';
 
import { BackendService } from './backend.service';
import  category from './models/category';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  category : category = {
    entities: [
      {
        id: 1,
        title: "",
        description: "",
        password: "",
        repassword: ""
      },
      {
        id: 2,
        title: "",
        description: "",
        password: "",
        repassword: ""
      },
      {
        id: 5,
        title: "",
        description: "",
        password: "",
        repassword: ""
      },
      {
        id: 6,
        title: "",
        description: "",
        password: "",
        repassword: ""
      },
      {
        id: 7,
        title: "",
        description: "",
        password: "",
        repassword: ""
      },
      {
        id: 8,
        title: "",
        description: "",
        password: "",
        repassword: ""
      },
    ]
    
  };
    
  constructor(private BackendService:BackendService){

  }
  
  ngOnInit(): void {
   
   this.BackendService.getRepos().subscribe(
     (response)=> {
      
        this.category = response;
        console.log(this.category.entities[1])
         
      },
     (err)=> {

     }
   )
  }

 
  
  
  
   getClick(){
   
    console.log(this.category.entities[4])
    
     }
     putClick(){
      debugger;
      var note = this.category
    }
    postClick(){
     
    }
    deleteClick(){
     
    }
  
}
  
 

