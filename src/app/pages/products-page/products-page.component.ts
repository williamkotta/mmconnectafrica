import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  template: `
    <div class="products-page-wrapper">
      <app-products></app-products>
    </div>
  `,
  styles: [`
    .products-page-wrapper {
      width: 100%;
    }
  `]
})
export class ProductsPageComponent {}
