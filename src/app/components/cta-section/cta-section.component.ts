import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Expert, EXPERTS } from '../../data/experts.data';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ScrollRevealDirective],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.css',
})
export class CtaSectionComponent {
  i18n = inject(TranslationService);
  email = signal('');

  experts: Expert[] = EXPERTS;

  handleSignup() {
    const emailValue = this.email();
    if (emailValue && emailValue.includes('@')) {
      alert(`Welcome! Check ${emailValue} for more updates.`);
      this.email.set('');
    } else {
      alert('Please enter a valid email address');
    }
  }
}
