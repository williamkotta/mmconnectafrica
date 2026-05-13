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
      role: 'Mkurugenzi Mtendaji (CEO), Tech Ventures',
      comment: 'Kuza imebadilisha kabisa jinsi tulivyokuwa tunaisimamia biashara yetu. Suluhisho zao ni za ubunifu na msaada wao ni wa kipekee.',
      rating: 5,
      initials: 'RW',
    },
    {
      id: 2,
      name: 'Patricia Martinez',
      role: 'Mkurugenzi, Global Solutions',
      comment: 'Kushirikiana na Kuza kumekuwa mabadiliko makubwa kwa kampuni yetu. Ninapendekeza sana kwa taasisi yoyote inayotafuta ukuaji kwa bidii.',
      rating: 5,
      initials: 'PM',
    },
    {
      id: 3,
      name: 'James Anderson',
      role: 'Mwanzilishi, Innovation Labs',
      comment: 'Timu ya Kuza inaonyesha utaalamu na kujitolea kwa kiwango cha juu. Matokeo huwa mazuri muda wote.',
      rating: 5,
      initials: 'JA',
    },
  ];
}
