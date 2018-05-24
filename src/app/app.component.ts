import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:any;
  title = 'app works!';
  constructor(private httpservice :HttpService){}

  ngOnInit(){
    this.httpservice.getData().
    subscribe( (data :any)=> {
    
  console.log(data);
    this.data=data;
    
    
  },
  error=>console.log(error)
  );
  }
}
