import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Product {
  id: number;
  slug: string;
  nameKey: string;
  descKey: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  i18n = inject(TranslationService);

  products: Product[] = [
    { id: 1, slug: 'kuza-sokoni', nameKey: 'products.kuzaSokoni', descKey: 'products.kuzaSokoniDesc' },
    { id: 2, slug: 'kuza-maisha', nameKey: 'products.kuzaMaisha', descKey: 'products.kuzaMaishaDesc' },
    { id: 3, slug: 'kuza-pay', nameKey: 'products.kuzaPay', descKey: 'products.kuzaPayDesc' },
    { id: 4, slug: 'kuza-biashara', nameKey: 'products.kuzaBiashara', descKey: 'products.kuzaBiasharaDesc' },
    { id: 5, slug: 'kuza-kilimo', nameKey: 'products.kuzaKilimo', descKey: 'products.kuzaKilimoDesc' },
    { id: 6, slug: 'kuza-special-group', nameKey: 'products.kuzaSpecialGroup', descKey: 'products.kuzaSpecialGroupDesc' },
    { id: 7, slug: 'kuza-boda', nameKey: 'products.kuzaBoda', descKey: 'products.kuzaBodaDesc' },
  ];
}
