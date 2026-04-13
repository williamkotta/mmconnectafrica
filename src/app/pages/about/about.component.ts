import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionVisionComponent } from '../../components/mission-vision/mission-vision.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MissionVisionComponent],
  template: `
    <div class="about-page-wrapper">
      <app-mission-vision></app-mission-vision>
    </div>
  `,
  styles: [`
    .about-page-wrapper {
      width: 100%;
    }
  `]
})
export class AboutComponent {}
