import { Component } from '@angular/core';
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

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  images: string[] = [];

  constructor(private apiService: ApiService) {}

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
}
