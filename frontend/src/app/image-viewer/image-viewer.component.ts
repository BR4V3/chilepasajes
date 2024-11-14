import { Component, Input } from '@angular/core';
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
  @Input() images: string[] = [];

  getImageName(imageUrl: string): string {
    return imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
  }
}
