import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';
import { ExpertDetailComponent } from './pages/expert-detail/expert-detail.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expert/:id', component: ExpertDetailComponent, data: { title: 'Expert Profile' } },
  { path: 'product/:id', component: ProductDetailComponent, data: { title: 'Product Detail' } },
  { path: 'about', component: PlaceholderComponent, data: { title: 'About Us' } },
  { path: 'products', component: PlaceholderComponent, data: { title: 'Our Products' } },
  { path: 'team', component: PlaceholderComponent, data: { title: 'Our Team' } },
  { path: 'contact', component: PlaceholderComponent, data: { title: 'Contact Us' } },
  { path: '**', redirectTo: '' },
];
