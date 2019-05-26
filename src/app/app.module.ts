import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from '../app/home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{path:'about',component:AboutComponent}])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
