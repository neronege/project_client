import { Component, OnInit } from '@angular/core';
 
import { BackendService } from './backend.service';
import { category } from './models/category';

 
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
    
    entities:[{
        id:null,
        title: '',
        description: '',
        password: '',
        repassword: ''}]
   
  };


  
  
    
  constructor(private BackendService:BackendService){

  }
  

  ngOnInit(): void {
   
   this.BackendService.getRepos().subscribe(
     (response)=> {
      
        this.category = response;
        console.log(this.category.entities[0])
         
      },
     (err)=> {

     }
   )
  }
 
  
  
  
   getClick(){
     
    return this.category.entities[0].title
    
     }
     putClick(){
   
    }
    postClick(){
     
    }
    deleteClick(){
     
    }
  
}
  
 

