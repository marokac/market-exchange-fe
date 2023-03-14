import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() images: string[] = [];

  slideIndex: number = 0;


  constructor() { }

  ngOnInit(): void {}

  plusSlides(n: number) {
    this.slideIndex += n;
    if(this.slideIndex >= this.images.length){
      this.slideIndex = this.images.length - 1;
    }
    if(this.slideIndex < 0){
      this.slideIndex = 0;
    }
  }

  onImageClick(n: number){
    this.slideIndex = n;
  }
}
