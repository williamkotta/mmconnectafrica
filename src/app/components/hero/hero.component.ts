import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TypewriterDirective } from '../../directives/typewriter.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective, TypewriterDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly i18n = inject(TranslationService);

  private readonly newsKeys = ['hero.news1', 'hero.news2', 'hero.news3', 'hero.news4'];
  currentNewsIndex = signal(0);
  newsVisible = signal(true);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  get currentNewsText(): string {
    return this.i18n.t(this.newsKeys[this.currentNewsIndex()]);
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      // Fade out
      this.newsVisible.set(false);
      // After fade-out, switch text and fade in
      setTimeout(() => {
        this.currentNewsIndex.set((this.currentNewsIndex() + 1) % this.newsKeys.length);
        this.newsVisible.set(true);
      }, 400);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth',
      });
    }
  }
}
