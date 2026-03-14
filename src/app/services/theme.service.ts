import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly theme = signal<Theme>(this.getInitialTheme());

  readonly isDark = () => this.theme() === 'dark';

  constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const current = this.theme();
        const html = document.documentElement;

        if (current === 'dark') {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }

        localStorage.setItem('theme', current);
      }
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private getInitialTheme(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
      // Respect system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  }
}
