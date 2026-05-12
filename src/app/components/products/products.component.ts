import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PRODUCTS } from '../../data/products.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  i18n = inject(TranslationService);

  // Card content is driven by shared product data (4 ecosystem overview cards)
  products = PRODUCTS;
}
