import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTypewriter]',
  standalone: true,
})
export class TypewriterDirective implements OnInit, OnChanges, OnDestroy {
  /** The full text to type out. If empty, uses the element's initial textContent. */
  @Input('appTypewriter') text = '';
  /** Delay in ms before typing starts */
  @Input() typeDelay = 0;
  /** Speed in ms per character */
  @Input() typeSpeed = 45;
  /** Whether to show a blinking cursor */
  @Input() typeCursor = true;
  /** Whether to loop (erase then retype) */
  @Input() typeLoop = false;
  /** Pause at end before erasing (if looping) */
  @Input() typePause = 2000;
  /** Start only when element is in view */
  @Input() typeOnScroll = true;

  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;
  private readonly timeouts: ReturnType<typeof setTimeout>[] = [];
  private readonly animFrames: number[] = [];
  private started = false;
  private initialized = false;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;

    // Capture original text
    if (!this.text) {
      this.text = element.textContent?.trim() || '';
    }
    element.textContent = '';
    element.style.visibility = 'visible';

    // Add cursor class
    if (this.typeCursor) {
      element.classList.add('typewriter-cursor');
    }

    this.initialized = true;

    if (this.typeOnScroll) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.started) {
              this.started = true;
              this.scheduleStart();
              this.observer?.unobserve(element);
            }
          });
        },
        { threshold: 0.2 }
      );
      this.observer.observe(element);
    } else {
      this.scheduleStart();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.initialized) return;
    if (changes['text'] && !changes['text'].firstChange) {
      const newText = changes['text'].currentValue;
      if (newText && newText !== this.text) {
        this.text = newText;
      }
      // Clear any running animations and retype with new text
      this.clearTimers();
      const element = this.el.nativeElement as HTMLElement;
      element.textContent = '';
      if (this.typeCursor) {
        element.classList.add('typewriter-cursor');
      }
      this.typeOut();
    }
  }

  private scheduleStart() {
    const t = setTimeout(() => this.typeOut(), this.typeDelay);
    this.timeouts.push(t);
  }

  private typeOut() {
    const element = this.el.nativeElement as HTMLElement;
    const chars = this.text.split('');
    let i = 0;

    const type = () => {
      if (i < chars.length) {
        element.textContent = this.text.substring(0, i + 1);
        i++;
        const t = setTimeout(type, this.typeSpeed);
        this.timeouts.push(t);
      } else if (this.typeLoop) {
        const t = setTimeout(() => this.eraseText(), this.typePause);
        this.timeouts.push(t);
      } else if (this.typeCursor) {
        // Remove cursor after typing completes (with delay)
        const t = setTimeout(() => {
          element.classList.remove('typewriter-cursor');
        }, 1500);
        this.timeouts.push(t);
      }
    };

    type();
  }

  private eraseText() {
    const element = this.el.nativeElement as HTMLElement;
    let current = this.text.length;

    const erase = () => {
      if (current > 0) {
        current--;
        element.textContent = this.text.substring(0, current);
        const t = setTimeout(erase, 25);
        this.timeouts.push(t);
      } else {
        const t = setTimeout(() => this.typeOut(), 500);
        this.timeouts.push(t);
      }
    };

    erase();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.clearTimers();
  }

  private clearTimers() {
    this.timeouts.forEach((t) => clearTimeout(t));
    this.timeouts.length = 0;
    this.animFrames.forEach((f) => cancelAnimationFrame(f));
    this.animFrames.length = 0;
  }
}
