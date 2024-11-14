import { Component, HostListener } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ImageFilterComponent } from './image-filter/image-filter.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    ImageFilterComponent,
    ImageViewerComponent
  ],
})
export class AppComponent {

  //Esto me arrojaba un error asi que utilice la ayuda de VS para que lo arregle pero en verdad no se que hace.
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  images: string[] = [];
  gridCols = 2;
  rowHeight = '1:1';


  //Utilizamos el constructor para poder hacer uso de la API.
  constructor(private apiService: ApiService) {}


  //Una vez es "Avisado" en el image-filter este le solicita la imagen a la api y la espera.
  onGetRandomImage() {
    this.apiService.getRandomImage().subscribe(
      (data) => {
        this.images = [data.imageUrl];
      },
      (error) => {
        console.error('Error al obtener imagen aleatoria', error);
      }
    );
  }

  //Una vez es "Avisado" en el image-filter este le solicita la imagen a la api dandole como como filtro el numero capturado del input.
  onGetImagesByNumber(number: number) {
    this.apiService.getImagesByNumber(number).subscribe(
      (data) => {
        this.images = data.imageUrls;
      },
      (error) => {
        console.error('Error al obtener imágenes por número', error);
      }
    );
  }

  //Utilizamos estos listener para poder trabajar mejor las dimensiones mas pequeñas del sitio.
   // Este se activa una vez el sitio modifica su tamaño.
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.gridCols = window.innerWidth <= 768 ? 1 : 2;
      this.rowHeight = window.innerWidth <= 768 ? '2:1' : '1:1';
    }
    // Este se activa una vez el sitio se este iniciando.
    ngOnInit() {
      this.gridCols = window.innerWidth <= 768 ? 1 : 2;
      this.rowHeight = window.innerWidth <= 768 ? '2:1' : '1:1';
    }
}
