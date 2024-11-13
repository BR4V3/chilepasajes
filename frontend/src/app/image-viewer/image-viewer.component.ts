import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css'],
  imports: [CommonModule]
})
export class ImageViewerComponent {
  @Input() images: string[] = [];

  getImageName(imageUrl: string): string {
    return imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
  }
}
