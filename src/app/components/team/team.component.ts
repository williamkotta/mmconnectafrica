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
    {
      id: 2,
      name: 'Thuweini Makamba',
      role: 'City Founder',
      initials: 'TM',
      color: 'primary',
    },
    {
      id: 3,
      name: 'Elvis Mushi',
      role: 'Chief Technology Officer',
      initials: 'EM',
      color: 'primary',
    },
    {
      id: 4,
      name: 'Sameera Hussein',
      role: 'Business Manager',
      initials: 'SH',
      color: 'primary',
    },
    {
      id: 5,
      name: 'George Magara',
      role: 'Operations Lead',
      initials: 'GM',
      color: 'primary',
    },
    {
      id: 6,
      name: 'Elhaina Singo',
      role: 'Head of Finance',
      initials: 'ES',
      color: 'primary',
    },
  ];
}
