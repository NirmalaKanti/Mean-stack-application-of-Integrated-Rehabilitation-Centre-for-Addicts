// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Page19serviceService {

//   constructor() { }
// }
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Page19serviceService {

//   constructor() { }
// }
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Page19serviceService {

//   constructor() { }
// }
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Page19serviceService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Page19serviceService {
  private apiUrl = 'http://localhost:3000/api/saveFormData';

  constructor(private http: HttpClient) { }

  saveFormData(formData: any, addictName: String): Observable<any> {

    return this.http.post( `${this.apiUrl}/${addictName}`, { ...formData, component: 'page19' });
  }

  private fetchApiUrl = 'http://localhost:3000/api/getFormData';
  getFormDataByAddictName(addictName: string): Observable<any> {
    const url = `${this.fetchApiUrl}/${addictName}`;
    return this.http.get(url);
  }
}
