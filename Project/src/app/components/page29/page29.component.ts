import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page29Service } from './page29.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page29',
  templateUrl: './page29.component.html',
  styleUrls: ['./page29.component.css']
})
export class Page29Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    visit_29:[''],
    referral_29:[''],
    action_29:[''],
    name_org_29:[''],
    Abstaining_29:[''],
    Abstaining1_29:[''],
    rout_life_29:[''],
    rout_life1_29:[''],
    improve_29:[''],
    improve1_29:[''],
    finances_29:[''],
    finances1_29:[''],
    defect_29:[''],
    defect1_29:[''],
    recreation_29:[''],
    recreation1_29:[''],
    measures_29:[''],
    measures1_29:[''],
    relapse_29:[''],
    relapse1_29:[''],
    date_drop_29:[''],
    lackofmotivation_29:[''],
    familysupport_29:[''],
    poverty_29:[''],
    legalproblem_29:[''],
    unabletocope_29:[''],
    inadequatefacilities_29:[''],
    anyother_29:[''],
    extn_29:[''],
    reason_29:['']
  });
  retrievedData: any;
  dataFetched: boolean = false;
  ischecked:boolean=false;
  constructor(
    private fb: FormBuilder,
    private page29Service: Page29Service,
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

      this.page29Service.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.page29Service.getFormDataByAddictName(this.addictName).subscribe(
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
  navigateToPage29Page() {
    if (this.dataFetched) {
      this.router.navigate(['../Page30'], { relativeTo: this.route });
    }
  }
  url:any;
  hideChoose=false;
  hideButton=true;

  totalsubmit(){
    this.ischecked=true;
    alert("Form Submitted Successfully");
    this.router.navigate(["../nexthome"]);
  }

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