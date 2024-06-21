// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-page25',
//   templateUrl: './page25.component.html',
//   styleUrl: './page25.component.css'
// })
// export class Page25Component {

// }



import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page24serviceService } from './page24service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page24',
  templateUrl: './page24.component.html',
  styleUrls: ['./page24.component.css']
})
export class Page24Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
// ------------------------------------------
acceptedByFamily_24:[''],
previousMarriages_24:[''],
separatedDueToAddiction_24:[''],
suspiciousOfWife_24:[''],
familyViolence_24:[''],
verbalabuse_24:[''],
neighbourviolence_24:[''],
articlebreak_24:[''],
maleChildrenCount:[0],
femaleChildrenCount:[0],

health1_24: this.fb.group({
  pschoice_24:[''],
  psrelation_24:[''],
  wcchoice_24:[''],
  wcrelation_24:['']
}),
health2_24: this.fb.group({
  pschoice_24:[''],
  psrelation_24:[''],
  wcchoice_24:[''],
  wcrelation_24:['']
}),
health3_24: this.fb.group({
  pschoice_24:[''],
  psrelation_24:[''],
  wcchoice_24:[''],
  wcrelation_24:['']
}),
health4_24: this.fb.group({
  pschoice_24:[''],
  psrelation_24:[''],
  wcchoice_24:[''],
  wcrelation_24:['']
}),
health5_24: this.fb.group({
  pschoice_24:[''],
  psrelation_24:[''],
  wcchoice_24:[''],
  wcrelation_24:['']
}),
health6_24: this.fb.group({
  pschoice_24:[''],
  psrelation_24:[''],
  wcchoice_24:[''],
  wcrelation_24:['']
})

// --------------------------------------------
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private page24serviceService: Page24serviceService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    
    this.addictName = this.sharedService.getAddictName();

    // Fetch data when the component is initialized
    this.fetchDataByAddictName();

  }

  onSubmit() {
    if (this.formData.valid) {

      this.addictName = this.sharedService.getAddictName();
      // const dataToSend = { ...this.formData.value, component: 'page24' };

      this.page24serviceService.saveFormData(this.formData.value, this.addictName).subscribe(
        (response) => {
          console.log('Form data saved successfully:', response);
          this.toastr.success('Form data saved successfully', 'Success');
          //this.formData.reset();
        },
        (error) => {
          console.error('Error saving form data:', error);
          this.toastr.error('Error saving form data', 'Error');
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  fetchDataByAddictName() {
    if (this.addictName) {
      this.page24serviceService.getFormDataByAddictName(this.addictName).subscribe(
        (data) => {
          this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
          // Update form controls with retrieved data
          this.formData.patchValue(this.retrievedData);
          if(this.formData.get('signature31')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url1 = this.formData.get('signature31')?.value;
            this.hideChoose1 = true;
            this.hideButton1 = false;

          }
          if(this.formData.get('signature32')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url2 = this.formData.get('signature32')?.value;
            this.hideChoose2 = true;
            this.hideButton2 = false;

          }
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.toastr.error('Error fetching data', 'Error');
        }
      );
    }
  }

  navigateToPage25Page() {
    // Only navigate to the page25 page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../page25'], { relativeTo: this.route });
    }
  }

  url1: any;
  hideChoose1=false;
  hideButton1=true;
  url2: any;
  hideChoose2=false;
  hideButton2=true;



  selectFile1(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
  
    const mimeType = event.target.files[0].type;
    if (!mimeType.match(/image\/*/)) {
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (_event) => {
      const formControls = this.formData.controls;
      formControls['signature31'].setValue(reader.result)
      this.url1 = reader.result;
      this.hideChoose1 = true;
      this.hideButton1 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  selectFile2(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
  
    const mimeType = event.target.files[0].type;
    if (!mimeType.match(/image\/*/)) {
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (_event) => {
      const formControls = this.formData.controls;
      formControls['signature32'].setValue(reader.result)
      this.url2 = reader.result;
      this.hideChoose2 = true;
      this.hideButton2 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

    removeImage1(){
      this.url1 = null;
      this.hideChoose1=false;
      this.hideButton1=true;

    }
    removeImage2(){
      this.url2 = null;
      this.hideChoose2=false;
      this.hideButton2=true;

    }

    
  
}



