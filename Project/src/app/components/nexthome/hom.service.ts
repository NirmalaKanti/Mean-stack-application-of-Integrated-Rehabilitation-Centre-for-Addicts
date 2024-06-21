import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  private apiUrl = 'http://localhost:3000/api/saveFormData';
  //private fetchApiUrl = 'http://localhost:3000/api/getFormData'; // Uncommented for fetching data


  saveFormData(formData: any, addictName: String): Observable<any> {

    return this.http.post( `${this.apiUrl}/${addictName}`, { ...formData, component: 'first' });
  }

  private fetchApiUrl = 'http://localhost:3000/api/getAllAddictDetails';
  getFormDataByAddictName(): Observable<any> {
    this.toastr.success('service', 'Success');
    
    return this.http.get(this.fetchApiUrl);
  }

  private csvUrl = 'http://localhost:3000/api/downloadCsv';
  downloadCSV(): Observable<any> {
    this.toastr.success('service', 'Success');
    this.toastr.success('service', 'Success');
    this.toastr.success('service', 'Success');
    this.toastr.success('service', 'Success');
    this.toastr.success('service', 'Success');
    return this.http.get(this.csvUrl);
  }
}
