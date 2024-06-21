// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-page8',
//   templateUrl: './page8.component.html',
//   styleUrl: './page8.component.css'
// })
// export class Page8Component {

// }


import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page8serviceService } from './page8service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.css']
})
export class Page8Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    name_8: [''],
    age_8: [''],
    dor_8: [''],
    age1_8:[''],
    you1_8:[''],
    yoeu1_8:[''],
    stod1_8:[''],
    roas1_8:[''],
    foui1_8:[''],
    qui1_8:[''],
    puai1_8:[''],
    age2_8:[''],
    you2_8:[''],
    yoeu2_8:[''],
    stod2_8:[''],
    roas2_8:[''],
    foui2_8:[''],
    qui2_8:[''],
    puai2_8:[''],
    age3_8:[''],
    you3_8:[''],
    yoeu3_8:[''],
    stod3_8:[''],
    roas3_8:[''],
    foui3_8:[''],
    qui3_8:[''],
    puai3_8:[''],
    age4_8:[''],
    you4_8:[''],
    yoeu4_8:[''],
    stod4_8:[''],
    roas4_8:[''],
    foui4_8:[''],
    qui4_8:[''],
    puai4_8:[''],
    age5_8:[''],
    you5_8:[''],
    yoeu5_8:[''],
    stod5_8:[''],
    roas5_8:[''],
    foui5_8:[''],
    qui5_8:[''],
    puai5_8:[''],
    age6_8:[''],
    you6_8:[''],
    yoeu6_8:[''],
    stod6_8:[''],
    roas6_8:[''],
    foui6_8:[''],
    qui6_8:[''],
    puai6_8:[''],
    age7_8:[''],
    you7_8:[''],
    yoeu7_8:[''],
    stod7_8:[''],
    roas7_8:[''],
    foui7_8:[''],
    qui7_8:[''],
    puai7_8:['']
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private page8serviceService: Page8serviceService,
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
      // const dataToSend = { ...this.formData.value, component: 'page8' };

      this.page8serviceService.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.page8serviceService.getFormDataByAddictName(this.addictName).subscribe(
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

  navigateToPage9Page() {
    // Only navigate to the page9 page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../page9'], { relativeTo: this.route });
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



