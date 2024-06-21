
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FourthService } from './fourth.service';  // Replace 'FourthService' with the actual service name
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent{
  addictName:string;

  formData: FormGroup = this.fb.group({
    ಹೆಸರು: [''],
    ನಿವಾಸ: [''],
    name: ['' ,Validators.required],
    age: [''],
    place: [''],
    ಸಾಕ್ಷಿದಾರ1: [''],
    ನಿವಾಸ1: [''],
    ಸಾಕ್ಷಿದಾರ2: [''],
    ನಿವಾಸ2: [''],
    name1: [''],
    age1: [''],
    place1: [''],
    name2: [''],
    age2: [''],
    place2: [''],
  });
retrievedData: any;
  dataFetched: boolean = false;
  constructor(
    private fb: FormBuilder,
    private fourthService: FourthService,  // Replace 'FourthService' with the actual service name
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
      this.fourthService.saveFormData(this.formData.value,this.addictName).subscribe(
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
      this.fourthService.getFormDataByAddictName(this.addictName).subscribe(
        (data) => {
          this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
          // Update form controls with retrieved data
          this.formData.patchValue(this.retrievedData);
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.toastr.error('Error fetching data', 'Error');
        }
      );
    }
  }

  navigateToFifthPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../fifth'], { relativeTo: this.route });
    }
  }
}
