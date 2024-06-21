// pdf-helper.ts
import { ComponentRef, ViewContainerRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

export function generatePDF(components: ComponentRef<any>[], viewContainerRef: ViewContainerRef) {
  const doc = new jsPDF();

  components.forEach((component, index) => {
    const componentRef = component.location.nativeElement;

    html2canvas(componentRef, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = canvas.width / 2; // Adjust for scale

      doc.addImage(imgData, 'PNG', 10, 10 + (index * 250), imgWidth, imgWidth / canvas.width * canvas.height);

      if (index === components.length - 1) {
        doc.save('my-document.pdf');
        // Optionally, you can clear the components from the viewContainerRef if needed
        viewContainerRef.clear();
      }
    });
  });
}
