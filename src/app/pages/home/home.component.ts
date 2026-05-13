import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '../../components/hero/hero.component';
import { MissionVisionComponent } from '../../components/mission-vision/mission-vision.component';
import { ProductsComponent } from '../../components/products/products.component';
import { TeamComponent } from '../../components/team/team.component';
import { FocusAreasComponent } from '../../components/focus-areas';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeroComponent,
    MissionVisionComponent,
    ProductsComponent,
    TeamComponent,
    FocusAreasComponent,
    CtaSectionComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly i18n = inject(TranslationService);

  contactName = '';
  contactEmail = '';
  contactComment = '';
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  submitContact() {
    if (!this.contactName || !this.contactEmail || !this.contactComment) {
      alert(this.i18n.t('comment.fillAll'));
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    // Build a hidden form and submit it directly to FormSubmit.co
    // This handles the email activation flow on first use automatically
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/architectwills@gmail.com';
    form.style.display = 'none';

    const fields: Record<string, string> = {
      name: this.contactName,
      email: this.contactEmail,
      message: this.contactComment,
      _subject: `New message from ${this.contactName} via Kuza Website`,
      _captcha: 'false',
      _next: globalThis.location.href,
      _template: 'table',
    };

    for (const [key, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  }
}
