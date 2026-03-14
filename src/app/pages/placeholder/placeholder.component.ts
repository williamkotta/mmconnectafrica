import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

interface PagePreview {
  image: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

const PAGE_PREVIEWS: Record<string, PagePreview> = {
  'About Us': {
    image: 'assets/6.png',
    subtitle: 'Empowering Communities Across East Africa',
    description: 'Kuza is dedicated to building inclusive business models that empower underserved communities. Our mission is to illuminate the essence of inclusivity and potentiality to ensure no ambition remains unsupported.',
    highlights: [
      'Founded with a vision for inclusive growth and shared prosperity',
      'Operating across multiple regions in East Africa',
      'Partnered with international development organizations',
      'Empowering youth, emerging businesses, and underserved communities',
    ],
  },
  'Our Products': {
    image: 'assets/13.png',
    subtitle: 'Digital Solutions for Every Need',
    description: 'From Kuza Sokoni to Kuza Pay, our product range is designed to empower Tanzanian market vendors with financial and non-financial services through digital tools and tailored solutions.',
    highlights: [
      'Kuza Sokoni — Digital marketplace for market vendors',
      'Kuza Maisha — Lifestyle and financial wellness platform',
      'Kuza Pay — Seamless digital payment solutions',
      'Kuza Biashara — Business growth and management tools',
    ],
  },
  'Our Team': {
    image: 'assets/6.png',
    subtitle: 'Meet the Minds Powering Our Vision',
    description: 'Our team brings together experts in social enterprise, urban development, technology, and business strategy to drive inclusive growth across East Africa.',
    highlights: [
      'Experienced leadership in social enterprise and community development',
      'Technology experts driving digital transformation',
      'Strategic business minds expanding our impact',
      'United by a shared commitment to inclusive growth',
    ],
  },
  'Contact Us': {
    image: 'assets/6.png',
    subtitle: 'We\'d Love to Hear From You',
    description: 'Whether you\'re looking to partner with us, join our programs, or learn more about our products, our team is here to help you take the next step.',
    highlights: [
      'Reach out for partnership and collaboration opportunities',
      'Inquire about our products and services',
      'Join our community empowerment programs',
      'Get support for existing services',
    ],
  },
};

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css',
})
export class PlaceholderComponent implements OnInit {
  readonly i18n = inject(TranslationService);
  title = 'Coming Soon';
  showPreview = signal(false);
  preview: PagePreview | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.title = data['title'] || 'Coming Soon';
      this.preview = PAGE_PREVIEWS[this.title] || null;
    });
  }

  togglePreview() {
    this.showPreview.set(!this.showPreview());
  }
}
