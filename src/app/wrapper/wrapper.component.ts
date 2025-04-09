import { Component, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var require: any; // Permet d'utiliser require() dans TypeScript

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements AfterViewInit {

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initCarousel();
    }
  }

  private initCarousel() {
    // Charger jQuery et Owl Carousel à la volée
    const $ = require('jquery');
    require('owl.carousel');

    $(this.el.nativeElement).find('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      dots: true,
      autoplay: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }
}
