import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecondserService } from './secondser.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
 addictName: string;
 displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    
    issue1: [''],
    issue2: [''],
    issue3: [''],
    issue4: [''],
    impression: [''],
    actionTaken: [''],
    address: [''],
    mobNo1: this.fb.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      relation: [''],
    }),
    mobNo2: this.fb.group({
      number: [''],
      name: [''],
      relation: [''],
    }),
    mobNo3: this.fb.group({
      number: [''],
      name: [''],
      relation: [''],
    }),
    landlineNo1: this.fb.group({
      number: [''],
      name: [''],
      relation: [''],
    }),
    remarks: [''],
    signature21:['']
    
  });
  retrievedData: any;
  dataFetched: boolean = false; 
 
  constructor(private fb: FormBuilder, private secondserService: SecondserService, private toastr: ToastrService, private route: ActivatedRoute,private router: Router
    ,private sharedService: SharedService,private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef) 
  {

    
    this.addictName = this.sharedService.getAddictName();

console.log("second service",this.addictName);
    // Fetch data when the component is initialized
    this.fetchDataByAddictName();
  }
    
  

  onSubmit() {
    if (this.formData.valid) {
      this.addictName = this.sharedService.getAddictName();
      // If the form is valid, save the data
      console.log("second service",this.addictName);

    

      this.secondserService.saveFormData(this.formData.value, this.addictName).subscribe(
        (response) => {
          console.log('Form data saved successfully:', response);
          // Optionally, you can handle success here
          this.toastr.success('Form data saved successfully', 'Success');
          //this.formData.reset();
        },
        (error) => {
          console.error('Error saving form data:', error);
          // Optionally, you can handle errors here
          this.toastr.error('Error saving form data', 'Error');
        }
      );
    } else {
      // Form is not valid, handle accordingly
      console.log('Form is not valid');
    }
  }



  fetchDataByAddictName() {
    if (this.addictName) {
     
      this.secondserService.getFormDataByAddictName(this.addictName).subscribe(
        (data) => {
          this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
          // Update form controls with retrieved data
          this.formData.patchValue(this.retrievedData);
          if(this.formData.get('signature21')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url1 = this.formData.get('signature21')?.value;
            this.hideChoose1 = true;
            this.hideButton1 = false;

          }
          
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.toastr.error('Error fetching data', 'Error');
        }
      );
    }
  }

  navigateToThirdPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../third'], { relativeTo: this.route });
    }
  }

  url1: any;
  hideChoose1=false;
  hideButton1=true;
  



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
      formControls['signature21'].setValue(reader.result)
      this.url1 = reader.result;
      this.hideChoose1 = true;
      this.hideButton1 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

    removeImage1(){
      this.url1 = null;
      this.hideChoose1=false;
      this.hideButton1=true;

    }
    
}