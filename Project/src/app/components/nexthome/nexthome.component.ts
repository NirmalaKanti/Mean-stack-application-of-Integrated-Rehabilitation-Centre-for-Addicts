// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-nextnexthome',
//   templateUrl: './nextnexthome.component.html',
//   styleUrl: './nextnexthome.component.css'
// })
// export class NextnexthomeComponent {

// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-nexthome',
//   templateUrl: './nexthome.component.html',
//   styleUrl: './nexthome.component.css'
// })
// export class NexthomeComponent {

// }
import { Component } from '@angular/core';
import { HomService } from './hom.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nexthome',
  templateUrl: './nexthome.component.html',
  styleUrls: ['./nexthome.component.css']
})
export class NexthomeComponent {
  showDetails(sectionId: string): void {
    const sectionDetails = document.getElementById(sectionId);
    if (sectionDetails) {
      sectionDetails.style.display = 'block';
    }
  }

  hideDetails(sectionId: string): void {
    const sectionDetails = document.getElementById(sectionId);
    if (sectionDetails) {
      sectionDetails.style.display = 'none';
    }
  }
  searchedNames: {addictName:string,patientName:string, photo:string}[] = [];

  constructor(private homeser: HomService, private toastr: ToastrService ,private sharedService: SharedService, private router: Router, private fb: FormBuilder){
    this.fetchAddictName();
  }

  searchTerm='';
  
  retrievedData: {addictName:string,patientName:string, photo:string}[] = [];
  dataFetched: boolean = false;

  filterAddictDets() {
    this.toastr.success(this.searchTerm, 'Success');
    
    if (this.searchTerm == '') {
      
      this.searchedNames = [...this.retrievedData];
    } else {
      
      this.searchedNames = this.retrievedData.filter(
        addDets => 
             addDets.addictName.toLowerCase().includes(this.searchTerm.toLowerCase()) || addDets.patientName.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      
    }
  }

  editDetails(addictName: string) {
    this.sharedService.setAddictName(addictName);
    console.log('Edit details for:', addictName);
    this.router.navigate(["../first"]);
    
    
  }

  fetchAddictName() {
    this.toastr.success('Called', 'Success');
    if (true) {
      this.homeser.getFormDataByAddictName().subscribe(
        (data) => {
          this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
          this.searchedNames = [...this.retrievedData];
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }



  inputValue='';
  nameValue='';
  createNgo(){
    if(this.inputValue != ''){
      this.homeser.saveFormData({ addictname: this.inputValue, original_pname: this.nameValue }, this.inputValue).subscribe(
        (response) => {
          console.log('Form data saved successfully:', response);
          this.toastr.success('Form data saved successfully', 'Success');
          this.sharedService.setAddictName(this.inputValue);
          this.router.navigate(["../first"]);
        },
        (error) => {
          console.error('Error saving form data:', error);
          this.toastr.error('Error saving form data', 'Error');
        }
      );
    
  
  
    }
        

  }


  downloadCSV(){
    if (true) {
      this.homeser.downloadCSV().subscribe(
        (data) => {
          this.fetchAddictName();
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
  
}
