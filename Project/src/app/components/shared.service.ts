import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

 private addictName: string = ''; 
 private toggle: Boolean = false;
 private pageNumber =1;

 setPageNo(value = 1){
  this.pageNumber = value;

 }
 getPageNo(){
  return this.pageNumber;
 }

  setToggle(){
     this.toggle = true;
  }

  getToggle(){
     return this.toggle;
  }

  setAddictName(name: string): void {
    this.addictName = name;
  }

  getAddictName(): string {
    return this.addictName;
  }
}
