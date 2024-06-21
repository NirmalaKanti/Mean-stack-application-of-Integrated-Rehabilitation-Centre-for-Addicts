import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page27Service } from './page27.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page27',
  templateUrl: './page27.component.html',
  styleUrls: ['./page27.component.css']
})
export class Page27Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    work_27:[''],
    award_27:[''],
    job_addict_27:[''],
    unemployment_27:[''],
    yes_no_27:[''],
    yes_no1_27:[''],
    yes_no2_27:[''],
    yes_no3_27:[''],
    yes_no4_27:[''],
    yes_no5_27:[''],
    yes_no6_27:[''],
    yes_no7_27:[''],
    money_fam_27:[''],
    loan_bank_27:[''],
    loan_work_27:[''],
    money_lender_27:[''],
    money_article_27:[''],
    out_debt_27:[''],
    none_27:[''],
    time_27:[''],
    time1_27:[''],
    drugs_27:[''],
    drugs1_27:[''],
    time2_27:[''],
    time3_27:[''],
    cwork_27:[''],
    mild_27:[''],
    mild1_27:['']
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private page27Service: Page27Service,
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

      this.page27Service.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.page27Service.getFormDataByAddictName(this.addictName).subscribe(
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

  navigateToPage28Page() {
    if (this.dataFetched) {
      this.router.navigate(['../Page28'], { relativeTo: this.route });
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