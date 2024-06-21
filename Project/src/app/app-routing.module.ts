// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { SecondComponent } from './components/second/second.component';
import { HomeComponent } from './components/home/home.component';
import { NexthomeComponent } from './components/nexthome/nexthome.component';
import { LoginComponent } from './components/login/login.component';
import { FirstComponent } from './components/first/first.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
import { Page21Component } from './components/page21/page21.component';
import { PrintComponent } from './components/print/print.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { Page14Component } from './components/page14/page14.component';
import { Page15Component } from './components/page15/page15.component';
import { Page19Component } from './components/page19/page19.component';
import { Page20Component } from './components/page20/page20.component';
import { Page27Component } from './components/page27/page27.component';
import { Page28Component } from './components/page28/page28.component';
import { Page29Component } from './components/page29/page29.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nexthome',component:NexthomeComponent},
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  { path: 'fifth', component: FifthComponent },
  { path: 'sixth', component: SixthComponent },
  { path: 'seventh', component: SeventhComponent },
  { path: 'page21', component:Page21Component},
  { path: 'page22', component:Page22Component},
  { path: 'page23', component:Page23Component},
  { path: 'page24', component:Page24Component},
  {path: 'page25', component:Page25Component},
  {path: 'page26', component:Page26Component},
  {path: 'page8', component:Page8Component},
  {path: 'page9', component:Page9Component},
  {path: 'page10', component:Page10Component},
  {path: 'page11', component:Page11Component},
  {path: 'page12', component:Page12Component},
  {path: 'page13', component:Page13Component},
  { path: 'print', component: PrintComponent },
  {path:'page20',component:Page20Component},
  {path:'page27',component:Page27Component},
  {path:'page28',component:Page28Component},
  {path:'page29',component:Page29Component},
  {path:'page14',component:Page14Component},
  {path:'page15',component:Page15Component},
  {path:'page19',component:Page19Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}