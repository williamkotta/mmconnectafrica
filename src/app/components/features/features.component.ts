import { Component, inject, signal, ElementRef, ViewChildren, QueryList, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Feature {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent implements AfterViewInit {
  i18n = inject(TranslationService);
  platformId = inject(PLATFORM_ID);

  @ViewChildren('counterEl') counterElements!: QueryList<ElementRef>;

  stats = [
    { value: '100+', target: 100, labelKey: 'features.clients' },
    { value: '500+', target: 500, labelKey: 'features.projects' },
    { value: '15+', target: 15, labelKey: 'features.experience' },
  ];

  features: Feature[] = [
    { id: 1, titleKey: 'features.strategicPlanning', descriptionKey: 'features.strategicPlanningDesc', icon: 'chart' },
    { id: 2, titleKey: 'features.digitalTransformation', descriptionKey: 'features.digitalTransformationDesc', icon: 'digital' },
    { id: 3, titleKey: 'features.marketAnalysis', descriptionKey: 'features.marketAnalysisDesc', icon: 'analysis' },
    { id: 4, titleKey: 'features.implementationSupport', descriptionKey: 'features.implementationSupportDesc', icon: 'support' },
    { id: 5, titleKey: 'features.trainingDev', descriptionKey: 'features.trainingDevDesc', icon: 'training' },
    { id: 6, titleKey: 'features.monitoring', descriptionKey: 'features.monitoringDesc', icon: 'monitoring' },
  ];

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.counterElements.forEach((elRef, idx) => {
      const el = elRef.nativeElement as HTMLElement;
      const stat = this.stats[idx];

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter(el, stat.target);
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(el);
    });
  }

  private animateCounter(el: HTMLElement, target: number) {
    const duration = 1500;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + '+';

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
