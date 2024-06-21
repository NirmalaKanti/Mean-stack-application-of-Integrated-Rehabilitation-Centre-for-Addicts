import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page28Service } from './page28.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page28',
  templateUrl: './page28.component.html',
  styleUrls: ['./page28.component.css']
})
export class Page28Component {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    law_28:[''],
    law1_28:[''],
    other_28:[''],
    game_28:[''],
    game1_28:[''],
    exercise_28:[''],
    exercise1_28:[''],
    movie_28:[''],
    movie1_28:[''],
    tv_28:[''],
    tv1_28:[''],
    reading_28:[''],
    reading1_28:[''],
    frds_28:[''],
    frds1_28:[''],
    hobby_28:[''],
    hobby1_28:[''],
    belief_28:[''],
    temple1_28:[''],
    pilgrimage1_28:[''],
    festival1_28:['']
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private page28Service: Page28Service,
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

      this.page28Service.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.page28Service.getFormDataByAddictName(this.addictName).subscribe(
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
      this.router.navigate(['../Page29'], { relativeTo: this.route });
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