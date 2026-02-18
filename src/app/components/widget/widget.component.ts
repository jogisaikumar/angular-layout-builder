import { CdkDragMove, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LayoutItem } from '../../models/layout-item.model';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
  @Input() item!: LayoutItem;

  onDragMove(event: CdkDragMove) {

  const canvas = (event.source.element.nativeElement as HTMLElement)
    .parentElement as HTMLElement;

  const canvasRect = canvas.getBoundingClientRect();

  this.item.x = event.pointerPosition.x - canvasRect.left;
  this.item.y = event.pointerPosition.y - canvasRect.top;
}

startResize(event: MouseEvent) {

  event.stopPropagation(); // prevent drag

  const startX = event.clientX;
  const startY = event.clientY;

  const startWidth = this.item.width;
  const startHeight = this.item.height;

  const mouseMove = (e: MouseEvent) => {
    this.item.width = startWidth + (e.clientX - startX);
    this.item.height = startHeight + (e.clientY - startY);
  };

  

  const mouseUp = () => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', mouseUp);
  };

  window.addEventListener('mousemove', mouseMove);
  window.addEventListener('mouseup', mouseUp);
}


}
