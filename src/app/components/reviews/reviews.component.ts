import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  readonly i18n = inject(TranslationService);
  readonly currentSlide = signal(0);

  reviews: Review[] = [
    {
      id: 1,
      name: 'Mwamvua Khamis',
      role: 'Market Vendor at Kisutu',
      text: 'Huzusha sana lukuza biashara yangu. Mizigo wao umetokoeza kiasi miopo wao wiki moja, na hapa hapa ni waliweza kucheza wazazi, na kuweza kumwuliza mirubu ya mwenyembea kwa wakati sami aka saka juu za biashara nzuri',
      image: 'assets/experts/mwamvita.png',
    },
    {
      id: 2,
      name: 'Juma Kisauke',
      role: 'Market Vendor at Kisutu',
      text: 'Huduma ya Kuza Capital Finance ni bora sana! Timu yao ni rafiki na matuelewa wafanyabiashara yangu na bora ni milao som biashara yangu ili kuimba ni kusamehe wako Kisutu.',
      image: 'assets/experts/ThuweinMakamba.png',
    },
    {
      id: 3,
      name: 'Hilda Mwani',
      role: 'Market Vendor at Kisutu',
      text: 'Asante Kuza Capital Finance kwa huduma ni ya umari kabisa. Tumaini na umuri yenyu ya kupiga kelele kwa sheria ni umizi kabisa. Hilo linakamatia saba vipengele vya umri wa jamii',
      image: 'assets/experts/sameera.png',
    },
  ];

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
