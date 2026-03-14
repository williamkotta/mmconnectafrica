import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
  expert: Expert | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.expert = EXPERTS.find((e) => e.id === id);
  }
}
