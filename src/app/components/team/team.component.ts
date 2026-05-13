import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { EXPERTS, Expert } from '../../data/experts.data';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent implements OnInit {
  i18n = inject(TranslationService);
  private http = inject(HttpClient);

  teamMembers: Expert[] = [];

  ngOnInit() {
    this.loadTeamMembers();
  }

  private async loadTeamMembers() {
    try {
      const response = await this.http.get<any[]>('https://test.kuzasokoni.co.tz/api/team').toPromise();

      if (response && response.length > 0) {
        this.teamMembers = response.map(member => this.mapToExpert(member));
      } else {
        this.teamMembers = EXPERTS;
      }
    } catch (error) {
      console.warn('Failed to fetch team data from external API, using local data:', error);
      this.teamMembers = EXPERTS;
    }
  }

  private mapToExpert(apiMember: any): Expert {
    return {
      id: apiMember.id || apiMember.name?.toLowerCase().replace(/\s+/g, '-') || 'team-member',
      name: apiMember.name || 'Team Member',
      title: apiMember.title || apiMember.position || 'Team Member',
      specialty: apiMember.specialty || 'Team',
      bio: apiMember.bio || apiMember.description || '',
      fullBio: apiMember.fullBio || apiMember.bio || apiMember.description || '',
      education: apiMember.education || '',
      experience: apiMember.experience || '',
      achievements: apiMember.achievements || [],
      image: apiMember.image || apiMember.photo || 'assets/experts/default.jpg',
      linkedin: apiMember.linkedin || undefined,
      email: apiMember.email || undefined
    };
  }

}

