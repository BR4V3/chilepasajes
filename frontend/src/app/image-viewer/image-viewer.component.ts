import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';



@Component({
  standalone: true,
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css'],
  imports: [CommonModule, MatGridListModule, MatCardModule]
})

export class ImageViewerComponent {

  //Esta variable la dejamos en input para que pueda ser cargada desde el app.component.
  @Input() images: string[] = [];

  //Aqui obtenemos el nombre de la imagen desde la URL.
  getImageName(imageUrl: string): string {
    return imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
  }


  //Declaramos estas variables para poder trabajar de mejor los diseños mas pequeños(responsivos)
  gridCols = 3;
  rowHeight = '1:1';

  //Aqui escuchamos si el sitio cambia su forma para estar atentos y dejar la dimension de columnas como las necesitemos.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.gridCols = window.innerWidth <= 768 ? 1 : 3;
    this.rowHeight = window.innerWidth <= 768 ? '2:1' : '1:1';

  }
   //Aqui una vez es cargado el archivo se ejecuta asi dejamos la dimension de columnas como las necesitemos.
  ngOnInit() {
    this.gridCols = window.innerWidth <= 768 ? 1 : 3;
    this.rowHeight = window.innerWidth <= 768 ? '2:1' : '1:1';


  }


}
