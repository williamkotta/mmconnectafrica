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
    subtitle: 'Kuendelea Kuwawezesha Watu Katika Afrika Mashariki',
    description:
      'Kuza imejikita katika kujenga mifano jumuishi ya biashara inayowawezesha jamii ambazo hazijapata fursa. Dhamira yetu ni kuangaza kiini cha ujumuishaji na uwezo ili kuhakikisha hakuna hamu itakayobaki bila msaada.',
    highlights: [
      'Iliundwa kwa maono ya ukuaji jumuishi na ustawi wa pamoja',
      'Inafanya kazi katika maeneo mbalimbali ya Afrika Mashariki',
      'Kushirikiana na mashirika ya kimataifa ya maendeleo',
      'Kuwawezesha vijana, biashara zinazoibuka, na jamii zisizopata huduma kwa wingi',
    ],
  },
  'Our Products': {
    image: 'assets/13.png',
    subtitle: 'Suluhisho za Kidijitali Kwa Kila Hitaji',
    description:
      'Kuanzia Kuza Sokoni hadi Kuza Pay, bidhaa zetu zimeundwa kuwawezesha wachuuzi wa masoko wa Tanzania kwa huduma za kifedha na zisizo za kifedha kupitia zana za kidijitali na suluhisho maalum.',
    highlights: [
      'Kuza Sokoni — Soko la kidijitali kwa wachuuzi wa masoko',
      'Kuza Academy — Jukwaa la ustawi wa maisha na kifedha',
      'Kuza Pay — Suluhisho la malipo ya kidijitali lililo rahisi',
      'Kuza Biashara — Zana za kukuza na kusimamia biashara',
    ],
  },
  'Our Team': {
    image: 'assets/6.png',
    subtitle: 'Kukutana na Akili Zinazoipa Dira Yetu Nguvu',
    description:
      'Timu yetu inaleta pamoja wataalamu wa biashara za kijamii, maendeleo ya miji, teknolojia, na mkakati wa biashara ili kuendesha ukuaji jumuishi kote Afrika Mashariki.',
    highlights: [
      'Uongozi wenye uzoefu katika biashara za kijamii na maendeleo ya jamii',
      'Wataalamu wa teknolojia wanaoendesha mabadiliko ya kidijitali',
      'Akili za kimkakati za biashara zinazopanua athari zetu',
      'Kuunganishwa na dhamira ya pamoja ya ukuaji jumuishi',
    ],
  },
  'Contact Us': {
    image: 'assets/6.png',
    subtitle: 'Tunapenda Kusikia Kutoka Kwako',
    description:
      'Iwe unatafuta kushirikiana nasi, kujiunga na programu zetu, au kujifunza zaidi kuhusu bidhaa zetu, timu yetu iko hapa kukusaidia hatua inayofuata.',
    highlights: [
      'Wasiliana nasi kwa fursa za ushirikiano na ubia',
      'Uliza kuhusu bidhaa na huduma zetu',
      'Jiunge na programu zetu za kuwawezesha jamii',
      'Pata msaada wa huduma zilizopo',
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
  title = 'Kuja Hivi Karibuni';
  showPreview = signal(false);
  preview: PagePreview | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const routeTitle = data['title'] as string | undefined;
      this.title = routeTitle || 'Kuja Hivi Karibuni';
      this.preview = PAGE_PREVIEWS[this.title] || null;
    });
  }

  togglePreview() {
    this.showPreview.set(!this.showPreview());
  }
}
