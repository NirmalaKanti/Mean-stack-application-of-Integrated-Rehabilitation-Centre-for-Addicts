// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-page21',
//   templateUrl: './page21.component.html',
//   styleUrl: './page21.component.css'
// })
// export class Page21Component {

// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-page21',
//   templateUrl: './page21.component.html',
//   styleUrl: './page21.component.css'
// })
// export class Page21Component {

// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-page19',
//   templateUrl: './page19.component.html',
//   styleUrl: './page19.component.css'
// })
// export class Page19Component {

// }

import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page19serviceService } from './page19service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page19',
  templateUrl: './page19.component.html',
  styleUrls: ['./page19.component.css']
})
export class Page19Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    name_19:[''],
    age_19:[0],
    regid_19:[''],
    reddetail_19: this.fb.group({
      date1_19:[''],
      date2_19:[''],
      date3_19:[''],
      date4_19:[''],
      date5_19:[''],
      date6_19:[''],
      date7_19:['']
    }),
    orangedetail_19: this.fb.group({
      date1_19:[''],
      date2_19:[''],
      date3_19:[''],
      date4_19:[''],
      date5_19:[''],
      date6_19:[''],
      date7_19:['']
    }),
    yellowdetail_19: this.fb.group({
      date1_19:[''],
      date2_19:[''],
      date3_19:[''],
      date4_19:[''],
      date5_19:[''],
      date6_19:[''],
      date7_19:['']
    }),
    greendetail_19: this.fb.group({
      date1_19:[''],
      date2_19:[''],
      date3_19:[''],
      date4_19:[''],
      date5_19:[''],
      date6_19:[''],
      date7_19:['']
    }),
    bluedetail_19: this.fb.group({
      date1_19:[''],
      date2_19:[''],
      date3_19:[''],
      date4_19:[''],
      date5_19:[''],
      date6_19:[''],
      date7_19:['']
    }),
    antidiabeticdetail_19: this.fb.group({
      date1_19:[''],
      date2_19:[''],
      date3_19:[''],
      date4_19:[''],
      date5_19:[''],
      date6_19:[''],
      date7_19:['']
    }),
    medidetail_19: this.fb.group({
      date1_19:[''],
      date2_19:[''],
      date3_19:[''],
      date4_19:[''],
      date5_19:[''],
      date6_19:[''],
      date7_19:['']
    }),
    insulindetail_19:this.fb.group({
      date1_19:[''],
      date2_19:[''],
      date3_19:[''],
      date4_19:[''],
      date5_19:[''],
      date6_19:[''],
      date7_19:['']
    }),
    tempdatedetail_19:this.fb.group({
      tdate1_19:[''],
      tdate2_19:[''],
      tdate3_19:[''],
      tdate4_19:['']
    }),
    fdetail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f107detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f106detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f105detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f104detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f103detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f102detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f101detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f100detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f99detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f98detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    f97detail_19:this.fb.group({
      f1_19:[''],
      f2_19:[''],
      f3_19:[''],
      f4_19:['']
    }),
    pulse_19:this.fb.group({
      p1_19:[0],
      p2_19:[0],
      p3_19:[0],
      p4_19:[0]
    }),
    bp_19:this.fb.group({
      bp1_19:[0],
      bp2_19:[0],
      bp3_19:[0],
      bp4_19:[0]
    })
  });  

  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private page19serviceService: Page19serviceService,
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
      // const dataToSend = { ...this.formData.value, component: 'page19' };

      this.page19serviceService.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.page19serviceService.getFormDataByAddictName(this.addictName).subscribe(
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

  navigateToPage21Page() {
    // Only navigate to the page21 page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../page21'], { relativeTo: this.route });
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



