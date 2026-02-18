import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, DragDropModule, WidgetComponent],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {
  @Input() layout: any[] = [];
  @Output() widgetDropped = new EventEmitter<any>();
@Output() widgetSelected = new EventEmitter<any>();
  drop(event: CdkDragDrop<any[]>) {

  if (event.previousContainer !== event.container) {

    const widgetType = event.item.data;

    const canvasElement = event.container.element.nativeElement;
    const canvasRect = canvasElement.getBoundingClientRect();

    const dropX = event.dropPoint.x - canvasRect.left;
    const dropY = event.dropPoint.y - canvasRect.top;

    const newItem = {
      id: Date.now().toString(),
      type: widgetType,
      x: dropX,
      y: dropY,
      width: 150,
      height: 50,
      properties: {},
      saved: false,
      children: widgetType === 'container' ? [] : null
    };
    this.widgetDropped.emit(newItem);

  } else {
    moveItemInArray(this.layout, event.previousIndex, event.currentIndex);
  }
}
}
