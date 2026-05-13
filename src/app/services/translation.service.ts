import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS } from '../data/translations';

export type Language = 'en' | 'sw';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  nativeName: string;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  readonly languages: LanguageOption[] = [
    { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
    { code: 'sw', label: 'Swahili', flag: '🇹🇿', nativeName: 'Kiswahili' },
  ];

  currentLanguage = signal<Language>('sw');

  currentLanguageOption = computed(() =>
    this.languages.find((l) => l.code === this.currentLanguage())!
  );

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  t(key: string): string {
    const lang = this.currentLanguage();
    return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS['en']?.[key] ?? key;
  }
}
