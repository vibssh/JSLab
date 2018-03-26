/**
 * https://www.youtube.com/watch?v=KhzGSHNhnbI
 * This is like a meeting place for your app 
 * Components go in Declarations
 * Modules go in imports
 * Services go in providers
 * Root App go in Bootstrap
 * REMEMBER ... if you create something bring it into this file
 * 
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes, Router} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';

// Create Routes
const appRoutes: Routes = [
  {path:'', component: UserComponent},
  {path:'about', component: AboutComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
