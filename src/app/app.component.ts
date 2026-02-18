import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasComponent } from "./components/canvas/canvas.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { CommonModule } from '@angular/common';
import { SuccessBannerComponent } from './components/success-banner/success-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CanvasComponent, SidebarComponent, PropertiesComponent, CommonModule, SuccessBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 layout: any[] = [];
  selectedWidget: any = null;
    showSuccess = false;

  onWidgetDropped(widget: any) {
    this.layout.push(widget);
    this.selectedWidget = widget; 
  }

  onWidgetSelected(widget: any) {
    this.selectedWidget = widget; 
  }

  onSave() {
    this.selectedWidget.saved = true;
    this.selectedWidget = null;   
    this.showSuccess = true;

  setTimeout(() => {
    this.showSuccess = false;
  }, 2000);
  }


}
