import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArregloHacksComponent } from './arreglo-hacks/arreglo-hacks.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ArregloHacksComponent,
    AppRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
