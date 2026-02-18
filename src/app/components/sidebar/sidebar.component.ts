import { Component, Input } from '@angular/core';
import { WidgetType } from '../../models/layout-item.model';
import { CommonModule } from '@angular/common';
import {  DragDropModule} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ CommonModule, DragDropModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() mode : 'palette' | 'properties' = 'palette';

  widgets: WidgetType[] = [
    'input',
    'button',
    'dropdown',
    'radio',
    'container'
  ];

  
}
