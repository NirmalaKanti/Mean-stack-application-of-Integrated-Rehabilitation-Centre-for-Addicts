import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page10serviceService } from './page10service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.component.html',
  styleUrls: ['./page10.component.css']
})
export class Page10Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
  // addictname:[''],
  pulse_10:[''],
  bloodp_10:[''],
  temp_10:[''],
  weight_10:[''],
  anemia_10:[''],
  jaundice_10:[''],
  malnu_10:[''],
  lymph_10:[''],
  lobh_10:[''],
  con_10:[''],
  glossi_10:[''],
  wom_10:[''],
  naevi_10:[''],
  flushedface_10:[''],
  abscess_10:[''],
  gynae_10:[''],
  palery_10:[''],
  hallu_10:[''],
  injection_10:[''],
  pedal_10:[''],
  tremors_10:[''],
  Respiratory1_10:[''],
  Respiratory2_10:[''],
  cardio1_10:[''],
  cardio2_10:[''],
  gastro1_10:[''],
  gastro2_10:[''],
  nervous1_10:[''],
  nervous2_10:[''],
  incidento_10:[''],
  dincident_10:[''],
  action_10:[''],
  ioc_10:[''],
  Investigation_10:[''],
  Certificate_10:[''],
   denial_type_10:['']
 });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private page10serviceService: Page10serviceService,
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
      // const dataToSend = { ...this.formData.value, component: 'page10' };

      this.page10serviceService.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.page10serviceService.getFormDataByAddictName(this.addictName).subscribe(
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

  navigateToPage11Page() {
    // Only navigate to the page11 page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../page11'], { relativeTo: this.route });
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



