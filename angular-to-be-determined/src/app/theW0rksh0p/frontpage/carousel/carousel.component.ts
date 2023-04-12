import { Component, Input, OnInit } from '@angular/core';


interface carouselImage {
  imageSrc: string;
  imageAlt: string;
  imageText: string;
}
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() images: carouselImage[] = []
  @Input() indicators = true;

  selectedIndex = 0;

  ngOnInit(): void {
  }

  //sets index of image on dot/indicotr click
  selectImage(index: number) {
    this.selectedIndex = index;
  }
}
