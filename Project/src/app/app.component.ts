
import { Component, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { generatePDF } from './pdf-helper';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
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
import { PrintComponent } from './components/print/print.component';
import { SharedService } from './components/shared.service';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NexthomeComponent } from './components/nexthome/nexthome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';
  isButtonHidden = false;
  componentTypes = [LoginComponent,HomeComponent,NexthomeComponent,FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent, SixthComponent, SeventhComponent, Page21Component, Page22Component, Page23Component,Page24Component,Page25Component, Page26Component, Page8Component, Page9Component, Page10Component, Page11Component, Page12Component, Page13Component];

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private sharedService: SharedService, private router: Router) {

  }

  createPDF() {

    this.router.navigate(['/print']);
    this.isButtonHidden = true;
    const componentRefs: ComponentRef<any>[] = this.componentTypes.map(
      (componentType) => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType as any);
        return this.viewContainerRef.createComponent(componentFactory);
      }
    );

    generatePDF(componentRefs, this.viewContainerRef);

    
  }
}


