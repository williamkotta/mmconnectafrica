import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface FocusArea {
  id: number;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-focus-areas',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './focus-areas.component.html',
  styleUrl: './focus-areas.component.css',
})
export class FocusAreasComponent {
  readonly i18n = inject(TranslationService);

  readonly focusAreas: FocusArea[] = [
    { id: 1, titleKey: 'focus.youth', descKey: 'focus.youthDesc' },
    { id: 2, titleKey: 'focus.business', descKey: 'focus.businessDesc' },
    { id: 3, titleKey: 'focus.pyramid', descKey: 'focus.pyramidDesc' },
  ];
}
