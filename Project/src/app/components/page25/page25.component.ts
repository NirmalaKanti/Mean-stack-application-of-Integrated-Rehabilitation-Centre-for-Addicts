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
import { Page25serviceService } from './page25service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page25',
  templateUrl: './page25.component.html',
  styleUrls: ['./page25.component.css']
})
export class Page25Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
// ------------------------------------------
relation1_25: this.fb.group({
  parent_25:[''],
  sibling_25:[''],
  spouse_25:[''],
  child_25:['']
}),
relation2_25: this.fb.group({
  parent_25:[''],
  sibling_25:[''],
  spouse_25:[''],
  child_25:['']
}),
relation3_25: this.fb.group({
  parent_25:[''],
  sibling_25:[''],
  spouse_25:[''],
  child_25:['']
}),
relation4_25: this.fb.group({
  parent_25:[''],
  sibling_25:[''],
  spouse_25:[''],
  child_25:['']
}),
relation5_25: this.fb.group({
  parent_25:[''],
  sibling_25:[''],
  spouse_25:[''],
  child_25:['']
}),
relation6_25: this.fb.group({
  parent_25:[''],
  sibling_25:[''],
  spouse_25:[''],
  child_25:['']
}),
damagetype_25:[''],
extramarital_25:[''],
age_25:[0],
sustrel_25:[''],
years_25:[0]

// --------------------------------------------
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private page25serviceService: Page25serviceService,
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
      // const dataToSend = { ...this.formData.value, component: 'page25' };

      this.page25serviceService.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.page25serviceService.getFormDataByAddictName(this.addictName).subscribe(
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

  navigateToPage26Page() {
    // Only navigate to the page26 page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../page26'], { relativeTo: this.route });
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

