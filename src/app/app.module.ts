import { HttpService } from './http.service';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgentComponent } from './agent/agent.component';
import { OrganismeComponent } from './organisme/organisme.component';
import {RouterModule } from '@angular/router';
import {lesroutes} from './app.router';
import {DropBoxEvenementDirective} from './directives/drop-box-evenement.directive';
import { SousOrganismeComponent } from './sousOrganisme/sous-organisme/sous-organisme.component';
import { MonpipePipe } from './monpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgentComponent,
    OrganismeComponent,
    DropBoxEvenementDirective,
    SousOrganismeComponent,
    MonpipePipe,


   
    
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(lesroutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
