import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import * as $ from "jquery";
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-update-home',
  templateUrl: './update-home.component.html',
  styleUrls: ['./update-home.component.css']
})

export class UpdateHomeComponent implements OnInit {
  
  public newCat :any 
 
  
  constructor(public app : AppComponent) { }

  ngOnInit(): void {
  }
 updateClick(){
  this.newCat = this.app.cat; 
  $(".new").hide();
  $(".landing_page").show();
   console.log('adadasdad');
   this.app.putClick();
 }

}
