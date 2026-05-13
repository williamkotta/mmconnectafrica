import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Expert, EXPERTS } from '../../data/experts.data';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-expert-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './expert-detail.component.html',
  styleUrl: './expert-detail.component.css',
})
export class ExpertDetailComponent implements OnInit {
  i18n = inject(TranslationService);
  private http = inject(HttpClient);
  expert: Expert | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadExpertDetails(id);
    }
  }

  private async loadExpertDetails(id: string) {
    try {
      const response = await this.http.get<any[]>('https://test.kuzasokoni.co.tz/api/team').toPromise();
      if (response && response.length > 0) {
        const apiMember = response.find(member => 
          member.id === id || 
          member.name?.toLowerCase().replace(/\s+/g, '-') === id ||
          member.name?.toLowerCase() === id.replace(/-/g, ' ')
        );
        if (apiMember) {
          this.expert = this.mapToExpert(apiMember);
          return;
        }
      }
    } catch (error) {
      console.warn('Failed to fetch expert data from API, falling back to local data:', error);
    }
    
    // Fallback to local data
    this.expert = EXPERTS.find((e) => e.id === id);
  }

  private mapToExpert(apiMember: any): Expert {
    return {
      id: apiMember.id || apiMember.name?.toLowerCase().replace(/\s+/g, '-') || 'unknown',
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
