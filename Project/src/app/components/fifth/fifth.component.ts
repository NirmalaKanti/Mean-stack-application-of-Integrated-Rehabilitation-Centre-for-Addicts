
import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FifthService } from './fifth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css'
})
export class FifthComponent{
  addictName:string;
  formData: FormGroup=this.fb.group({
    'SpecialNoteವಿಶೇಷಸೂಚನೆ': [''],
    'name': ['',Validators.required],
    'MobileNo': [''],
    'ದಿನ': [''],
    'ತಿಂಗಳು': [''],
    'ವರ್ಷ': [' '],
    'Date': [' '],
    'Month': [' '],
    'Year': [' '],
    'attenderName1': [''],
    'attenderName2': [''],
    'date': [''],
    'MonthYear': [''],
    'sig1':[''],
    'sig2':[''],
    'sig3':[''],
    'sig4':[''],
    'sig5':[''],
  });

  retrievedData: any;
  dataFetched: boolean = false;
  constructor(
    private fb: FormBuilder,
    private fifthService: FifthService,  // Replace 'FourthService' with the actual service name
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

  url1: any;
  hideChoose1=false;
  hideButton1=true;
  url2: any;
  hideChoose2=false;
  hideButton2=true;
  url3: any;
  hideChoose3=false;
  hideButton3=true;
  url4: any;
  hideChoose4=false;
  hideButton4=true;
  url5: any;
  hideChoose5=false;
  hideButton5=true;




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
      formControls['sig1'].setValue(reader.result)
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
      formControls['sig2'].setValue(reader.result)
      this.url2 = reader.result;
      this.hideChoose2 = true;
      this.hideButton2= false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  removeImage2(){
    this.url2 = null;
    this.hideChoose2=false;
    this.hideButton2=true;

  }

  selectFile3(event: any) {
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
      formControls['sig3'].setValue(reader.result)
      this.url3 = reader.result;
      this.hideChoose3 = true;
      this.hideButton3 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  removeImage3(){
    this.url3 = null;
    this.hideChoose3=false;
    this.hideButton3=true;

  }


  selectFile4(event: any) {
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
      formControls['sig4'].setValue(reader.result)
      this.url4 = reader.result;
      this.hideChoose4 = true;
      this.hideButton4 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  removeImage4(){
    this.url4= null;
    this.hideChoose4=false;
    this.hideButton4=true;

  }

  selectFile5(event: any) {
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
      formControls['sig5'].setValue(reader.result)
      this.url5 = reader.result;
      this.hideChoose5 = true;
      this.hideButton5 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  removeImage5(){
    this.url5 = null;
    this.hideChoose5=false;
    this.hideButton5=true;

  }

  onSubmit(): void {
    if (this.formData.valid) {
      this.addictName = this.sharedService.getAddictName();
      this.fifthService.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.fifthService.getFormDataByAddictName(this.addictName).subscribe(
        (data) => {
          this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
          // Update form controls with retrieved data

        
            this.formData.patchValue(this.retrievedData);
            this.url5 = this.formData.get('sig5')?.value;
            this.hideChoose5 = true;
            this.hideButton5 = false;

          if( this.formData.get('sig4')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url4 = this.formData.get('sig4')?.value;
          this.hideChoose4 = true;
          this.hideButton4 = false;

          }

          if( this.formData.get('sig3')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url3 = this.formData.get('sig3')?.value;
          this.hideChoose3 = true;
          this.hideButton3 = false;

          }

          if( this.formData.get('sig2')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url2 = this.formData.get('sig2')?.value;
            this.hideChoose2 = true;
            this.hideButton2 = false;
          }
          
          if( this.formData.get('sig1')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url1 = this.formData.get('sig1')?.value;
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

  navigateToSixthPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../sixth'], { relativeTo: this.route });
    }
  }

 
  
}
