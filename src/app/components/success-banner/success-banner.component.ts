import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-banner',
  standalone: true,
  imports: [],
  templateUrl: './success-banner.component.html',
  styleUrl: './success-banner.component.css'
})
export class SuccessBannerComponent {
  @Input() message:string = 'Saved Successfully!';
}
