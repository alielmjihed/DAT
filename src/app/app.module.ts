import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {RouterModule } from '@angular/router';
import {DropBoxEvenementDirective} from './directives/drop-box-evenement.directive';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
    DropBoxEvenementDirective,
  
    LogoComponent,


   
    
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    //RouterModule.forRoot(lesroutes)
  ],
  //providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
