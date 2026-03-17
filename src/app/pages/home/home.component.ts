import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { MissionVisionComponent } from '../../components/mission-vision/mission-vision.component';
import { ProductsComponent } from '../../components/products/products.component';
import { FocusAreasComponent } from '../../components/focus-areas';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    MissionVisionComponent,
    ProductsComponent,
    FocusAreasComponent,
    CtaSectionComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly i18n = inject(TranslationService);
}
