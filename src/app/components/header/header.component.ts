import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  langDropdownOpen = signal(false);
  mobileMenuOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  getActiveLink(): string {
    const url = this.router.url;
    if (url === '/' || url === '') {
      return 'home';
    }
    return url.substring(1); // Remove leading slash
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
