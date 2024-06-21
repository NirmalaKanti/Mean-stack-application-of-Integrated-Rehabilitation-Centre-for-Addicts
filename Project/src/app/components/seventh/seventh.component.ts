
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SeventhService } from './seventh.service';  // Replace 'FourthService' with the actual service name
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-fourth',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent{

  addictName:string;
  formData: FormGroup= this.fb.group({
    PhysicalComplications:[''],
    signature71:[''],
    signature72:['']
  });

  url71: any;
  hideChoose71=false;
  hideButton71=true;
  url72: any;
  hideChoose72=false;
  hideButton72=true;


  selectFile71(event: any) {
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
      formControls['signature71'].setValue(reader.result)
      this.url71 = reader.result;
      this.hideChoose71 = true;
      this.hideButton71 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  selectFile72(event: any) {
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
      formControls['signature72'].setValue(reader.result)
      this.url72 = reader.result;
      this.hideChoose72 = true;
      this.hideButton72 = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

    removeImage71(){
      this.url71 = null;
      this.hideChoose71=false;
      this.hideButton71=true;

    }
    removeImage72(){
      this.url72 = null;
      this.hideChoose72=false;
      this.hideButton72=true;

    }

  retrievedData: any;
  dataFetched: boolean = false;
  constructor(
    private fb: FormBuilder,
    private seventhService: SeventhService,  // Replace 'FourthService' with the actual service name
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.addictName = this.sharedService.getAddictName();

    // Fetch data when the component is initialized
    this.fetchDataByAddictName();
   
  }
  

  

  onSubmit(): void {
    if (this.formData.valid) {
      this.addictName = this.sharedService.getAddictName();
      this.seventhService.saveFormData(this.formData.value,this.addictName).subscribe(
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
      this.seventhService.getFormDataByAddictName(this.addictName).subscribe(
        (data) => {
          this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
          // Update form controls with retrieved data
          this.formData.patchValue(this.retrievedData);
          if(this.formData.get('signature71')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url71 = this.formData.get('signature71')?.value;
            this.hideChoose71 = true;
            this.hideButton71 = false;

          }
          if(this.formData.get('signature72')?.value != "")
          {
            this.formData.patchValue(this.retrievedData);
            this.url72 = this.formData.get('signature72')?.value;
            this.hideChoose72 = true;
            this.hideButton72 = false;

          }
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.toastr.error('Error fetching data', 'Error');
        }
      );
    }
  }

  navigateToSeventhPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../sixth'], { relativeTo: this.route });
    }
  }
}
