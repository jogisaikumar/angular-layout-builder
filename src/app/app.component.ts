import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasComponent } from "./components/canvas/canvas.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CanvasComponent, SidebarComponent, PropertiesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 layout: any[] = [];
  selectedWidget: any = null;

  onWidgetDropped(widget: any) {
    this.layout.push(widget);
    this.selectedWidget = widget;   // 🔥 Switch to properties
  }

  onWidgetSelected(widget: any) {
    this.selectedWidget = widget;   // click existing widget → open properties
  }

  onSave() {
    this.selectedWidget.saved = true;
    this.selectedWidget = null;     // 🔥 Switch back to sidebar
  }
}
