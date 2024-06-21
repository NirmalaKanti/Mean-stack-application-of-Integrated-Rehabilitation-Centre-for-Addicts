// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login:{username:string,password:string}[]=[
  {username:'admin', password:'admin@123'},
  {username:'ananya',password:'ananya@123'}
];

constructor(private router:Router){}
username:string='';
password:string='';
isvalidate:boolean=false;
ischecked:boolean=false;
check(){
  const isvalidate = this.login.some(login => login.username === this.username && login.password === this.password);
if(isvalidate){
  this.isvalidate=true;
  alert("You are Successfully Logged In!!");
  this.router.navigate(["../nexthome"]);
}else {
  this.isvalidate=false;
  this.username = '';
  this.password = '';
  alert("Invalid login details");
}

}        

}