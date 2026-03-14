import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  i18n = inject(TranslationService);
  themeService = inject(ThemeService);
  private readonly router = inject(Router);
  private readonly scroller = inject(ViewportScroller);

  langDropdownOpen = signal(false);
  mobileMenuOpen = signal(false);
  scrolled = signal(false);
  activeSection = signal('home');

  private readonly sectionIds = ['home', 'about', 'features', 'products', 'team', 'joinus', 'contact'];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  scrollToSection(sectionId: string) {
    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        setTimeout(() => this.smoothScrollTo(sectionId), 100);
      });
    } else {
      this.smoothScrollTo(sectionId);
    }
  }

  private smoothScrollTo(sectionId: string) {
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

  private updateActiveSection() {
    const headerOffset = 120;
    let current = 'home';

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          current = id;
        }
      }
    }

    this.activeSection.set(current);
  }

  toggleLanguageDropdown(event: Event) {
    event.stopPropagation();
    this.langDropdownOpen.update((v) => !v);
  }

  selectLanguage(lang: 'en' | 'sw') {
    this.i18n.setLanguage(lang);
    this.langDropdownOpen.set(false);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.langDropdownOpen.set(false);
  }
}
