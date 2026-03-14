import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  i18n = inject(TranslationService);

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Robert Williams',
      role: 'CEO, Tech Ventures',
      comment: 'KUZA transformed our business operations completely. Their solutions are innovative and their support is exceptional.',
      rating: 5,
      initials: 'RW',
    },
    {
      id: 2,
      name: 'Patricia Martinez',
      role: 'Director, Global Solutions',
      comment: 'Working with KUZA has been a game-changer for our company. Highly recommended for any organization serious about growth.',
      rating: 5,
      initials: 'PM',
    },
    {
      id: 3,
      name: 'James Anderson',
      role: 'Founder, Innovation Labs',
      comment: 'The team at KUZA demonstrates unparalleled expertise and dedication. Outstanding results every single time.',
      rating: 5,
      initials: 'JA',
    },
  ];
}
