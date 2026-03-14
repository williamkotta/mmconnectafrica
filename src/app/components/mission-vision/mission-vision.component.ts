import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TypewriterDirective } from '../../directives/typewriter.directive';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, TypewriterDirective],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.css',
})
export class MissionVisionComponent {
  i18n = inject(TranslationService);
}
