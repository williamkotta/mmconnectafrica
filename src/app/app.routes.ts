import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent, data: { title: 'Product Detail' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'products', component: ProductsPageComponent, data: { title: 'Our Products' } },
  { path: 'contact', component: ContactPageComponent, data: { title: 'Contact Us' } },
  { path: '**', redirectTo: '' },
];
