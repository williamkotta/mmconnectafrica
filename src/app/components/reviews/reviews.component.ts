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
      role: 'Muuzaji wa Soko Kisutu',
      text: 'Nimefurahishwa sana na Kuza kwa jinsi walivyoipa biashara yangu nguvu. Mizigo na bidhaa zangu zimepangwa na kuongezeka kwa kasi, na ndani ya wiki chache niliweza kuona mabadiliko kwenye mauzo. Pia niliweza kupata mafunzo na ushauri wa kuwasaidia wateja wangu, hivyo biashara ikasimama vizuri zaidi.',
      image: 'assets/experts/mwamvita.png',
    },
    {
      id: 2,
      name: 'Juma Kisauke',
      role: 'Muuzaji wa Soko Kisutu',
      text: 'Huduma ya Kuza Capital Finance imekuwa bora sana kwangu. Timu yao ni rafiki na inaelewa mahitaji ya wafanyabiashara. Walisaidia kupanga jinsi ya kupata fedha na kuzirudisha kwa urahisi, na hii imenisaidia kuendeleza shughuli zangu za Kisutu kwa ufanisi.',
      image: 'assets/experts/ThuweinMakamba.png',
    },
    {
      id: 3,
      name: 'Hilda Mwani',
      role: 'Muuzaji wa Soko Kisutu',
      text: 'Ninashukuru Kuza Capital Finance kwa huduma—ni ya kuaminika na inasaidia sana. Wamenipa mwongozo mzuri na ufahamu wa jinsi ya kutumia fedha kwa malengo ya biashara. Nimeona tija na mabadiliko chanya kwenye maisha yangu na biashara kwa ujumla.',
      image: 'assets/experts/sameera.png',
    },
  ];

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
