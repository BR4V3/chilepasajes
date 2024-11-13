import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css'],
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule]
})
export class ImageFilterComponent {
  filterNumber: number = 0;

  @Output() randomImageEvent = new EventEmitter<void>();
  @Output() imagesByNumberEvent = new EventEmitter<number>();

  getRandomImage() {
    this.randomImageEvent.emit();
  }

  getImagesByNumber() {
    this.imagesByNumberEvent.emit(this.filterNumber);
  }
}
