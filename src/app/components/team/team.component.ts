import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  i18n = inject(TranslationService);

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Mwamvita Makamba',
      role: 'Founder',
      initials: 'MM',
      color: 'primary',
    },
  ];
}
