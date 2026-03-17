import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent, data: { title: 'Product Detail' } },
  { path: 'about', component: PlaceholderComponent, data: { title: 'About Us' } },
  { path: 'products', component: PlaceholderComponent, data: { title: 'Our Products' } },
  { path: 'contact', component: PlaceholderComponent, data: { title: 'Contact Us' } },
  { path: '**', redirectTo: '' },
];
