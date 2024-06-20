import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { OverlayDirective } from '../overlay.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, OverlayDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() set length(val: number) {
    this.items = Array.from(Array(val).keys());
  }
  @Input() folder = '';

  items = Array.from(Array(0).keys());

  showOverlay = false;

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.code === 'Escape' && this.showOverlay) {
      event.preventDefault();
      this.showOverlay = false;
    }
  }
}
