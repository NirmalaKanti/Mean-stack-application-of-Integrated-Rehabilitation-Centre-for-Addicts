// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FirstComponent } from './component/first/first.component';
// import { SecondComponent } from './component/second/second.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FirstComponent,
//     SecondComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     NgbModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
// import { ToastrModule } from 'ngx-toastr';
import { SecondComponent } from './components/second/second.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintComponent } from './components/print/print.component';
import { Page21Component } from './components/page21/page21.component';
import { Page22Component } from './components/page22/page22.component';
import { Page23Component } from './components/page23/page23.component';
import { Page24Component } from './components/page24/page24.component';
import { Page25Component } from './components/page25/page25.component';
import { Page26Component } from './components/page26/page26.component';
import { Page8Component } from './components/page8/page8.component';
import { Page9Component } from './components/page9/page9.component';
import { Page10Component } from './components/page10/page10.component';
import { Page11Component } from './components/page11/page11.component';
import { Page12Component } from './components/page12/page12.component';
import { Page13Component } from './components/page13/page13.component';
import { Page20Component } from './components/page20/page20.component';
import { Page27Component } from './components/page27/page27.component';
import { Page28Component } from './components/page28/page28.component';
import { Page29Component } from './components/page29/page29.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NexthomeComponent } from './components/nexthome/nexthome.component';
import { Page14Component } from './components/page14/page14.component';
import { Page15Component } from './components/page15/page15.component';
import { Page19Component } from './components/page19/page19.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    PrintComponent,
    Page21Component,
    Page22Component,
    Page23Component,
    Page24Component,
    Page25Component,
    Page26Component,
    Page8Component,
    Page9Component,
    Page10Component,
    Page11Component,
    Page12Component,
    Page13Component,
    Page20Component,
    Page27Component,
    Page28Component,
    Page29Component,
    HomeComponent,
    LoginComponent,
    NexthomeComponent,
    Page19Component,
    Page14Component,
    Page15Component,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
      FormsModule,
      ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



