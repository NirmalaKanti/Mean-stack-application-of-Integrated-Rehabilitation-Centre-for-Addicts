import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page20Service } from './page20.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page20',
  templateUrl: './page20.component.html',
  styleUrls: ['./page20.component.css']
})
export class Page20Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    regno_20:[''],
    name_20:[''],
    sex_20:[''],
    age_20:[''],
    dob_20:[''],
    religion_20:[''],
    community_20:[''],
    eduquali_20:[''],
    occupation_20:[''],
    marital_status_20:[''],
    income:[''],
    living_arrange_20:[''],
    familymem_20:[''],
    tele_20:[''],
    year_20:[''],
    place_treat_20:[''],
    day_sobriety_20:[''],
    year1_20:[''],
    place_treat1_20:[''],
    day_sobriety1_20:[''],
    year2_20:[''],
    place_treat2_20:[''],
    day_sobriety2_20:[''],
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private page20Service: Page20Service,
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
      // const dataToSend = { ...this.formData.value, component: 'third' };

      this.page20Service.saveFormData(this.formData.value, this.addictName).subscribe(
        (response) => {
          console.log('Form data saved successfully:', response);
          this.toastr.success('Form data saved successfully', 'Success');
          this.formData.reset();
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
      this.page20Service.getFormDataByAddictName(this.addictName).subscribe(
        (data) => {
          this.retrievedData = data.data;
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
          this.formData.patchValue(this.retrievedData);
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.toastr.error('Error fetching data', 'Error');
        }
      );
    }
  }

  navigateToPage27Page() {
    if (this.dataFetched) {
      this.router.navigate(['../Page27'], { relativeTo: this.route });
    }
  }
  url:any;
  hideChoose=false;
  hideButton=true;
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
  
    const mimeType = event.target.files[0].type;
    if (!mimeType.match(/image\/*/)) {
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (_event) => {
      this.url = reader.result;
      this.hideChoose = true;
      this.hideButton = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
    removeImage(){
      this.url = null;
      this.hideChoose=false;
      this.hideButton=true;   
  }
}