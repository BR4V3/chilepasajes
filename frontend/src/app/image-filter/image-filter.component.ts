import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ]
})

export class ImageFilterComponent {

  filterNumber: number = 0;
  //Ocupamos esto como Flag para poder conectarlos con el app.component
  @Output() randomImageEvent = new EventEmitter<void>();
  @Output() imagesByNumberEvent = new EventEmitter<number>();

  //Emitimos "ruido" para que el app component se de cuenta que se gatillo la funcion.
  getRandomImage() {
    this.randomImageEvent.emit();
  }
  //Emitimos "ruido" para que el app component se de cuenta que se gatillo la funcion.
  getImagesByNumber() {
    this.imagesByNumberEvent.emit(this.filterNumber);
  }
}
