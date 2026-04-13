import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  i18n = inject(TranslationService);

  contactName = '';
  contactEmail = '';
  contactComment = '';
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  submitContact() {
    if (!this.contactName || !this.contactEmail || !this.contactComment) {
      this.submitStatus = 'error';
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.submitStatus = 'success';
      this.contactName = '';
      this.contactEmail = '';
      this.contactComment = '';
      this.isSubmitting = false;

      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 3000);
    }, 1000);
  }
}
