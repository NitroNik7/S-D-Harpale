import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-carousel',
  templateUrl: './slider-carousel.component.html',
  styleUrls: ['./slider-carousel.component.css']
})
export class SliderCarouselComponent {

  @Input() show: boolean = false;

  cards = [
    { img: "/assets/Images/Towerline1.jpg", title: "Transmission Line", text: "of 123 Ckt. Kms across Maharashtra" },
    { img: "/assets/Images/Towerline1.jpg", title: "Employee Count", text: "With more than 100+ employees..." },
    { img: "/assets/Images/Towerline1.jpg", title: "Hello World", text: "Welcome" },
    { img: "/assets/Images/Towerline1.jpg", title: "Hello World", text: "Welcome" },
    { img: "/assets/Images/Towerline1.jpg", title: "Hello World", text: "Welcome" },
    { img: "/assets/Images/Towerline1.jpg", title: "Hello World", text: "Welcome" }
  ];

  latest_key_projects = [
    { img: "/assets/Images/Towerline1.jpg", title: "Nashik", text: "Lorem ipsum dolor sit amet." },
    { img: "/assets/Images/Towerline1.jpg", title: "Kolhapur", text: "Lorem ipsum dolor sit amet." },
    { img: "/assets/Images/Towerline1.jpg", title: "Pune", text: "Lorem ipsum dolor sit amet." },
    { img: "/assets/Images/Towerline1.jpg", title: "Hello World", text: "Lorem ipsum dolor sit amet." },
    { img: "/assets/Images/Towerline1.jpg", title: "Hello World", text: "Lorem ipsum dolor sit amet." },
    { img: "/assets/Images/Towerline1.jpg", title: "Hello World", text: "Lorem ipsum dolor sit amet." }
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 2,
    "autoplay": 3000,
    "responsive": [
      {
        'breakpoint': 767,
        settings: {
          'slidesToShow': 1,
          'slidesToScroll': 1
        }
      }
    ]
  };

  // addSlide() {
  //   this.cards.push({img: "/assets/Images/Towerline1.jpg", title: "Hello World", text:"lorem"})
  // }

  // removeSlide() {
  //   this.cards.length = this.cards.length - 1;
  // }

  slickInit(e: any) {
    // console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}

