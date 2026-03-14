import { Component, inject } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly themeService = inject(ThemeService);
  constructor(private route: ActivatedRoute) {}

  // Get the page title from route data
  getPageTitle(): string {
    let child = this.route;
    while (child) {
      if (child.firstChild) {
        child = child.firstChild;
      } else {
        return child.snapshot.data['title'] || '';
      }
    }
    return '';
  }
}
