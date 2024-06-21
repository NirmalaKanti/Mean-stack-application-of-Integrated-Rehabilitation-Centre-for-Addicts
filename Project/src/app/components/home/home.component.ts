// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
}
