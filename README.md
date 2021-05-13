# 🌈  Change backgroud Image on refresh in Angular
 
Angular sample directive that takes a list of images and display background image. use local storage to keep track the history of previous bg-image.
 
 ✨
 we will learn: 🚲
- How to use directive in angular  ?  🤔
- How to pass parameter to directive ?
 
 

## Code Snippet

 

```sh
import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgChangeImage]',
})
export class BgChangeImageDirective implements OnInit {
  @Input() imagesList = [];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    let imageIndex;
    let currentImage = localStorage.getItem('currentBgImage');

    if (!currentImage) {
      imageIndex = 0;
      localStorage.setItem('currentBgImage', this.imagesList[imageIndex]);
    }

    let currentImagePath;
    currentImagePath = `assets/images/bg/${currentImage}`;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-image',
      `url(${currentImagePath})`
    );

    currentImage =
      this.imagesList[this.imagesList.indexOf(currentImage) + 1] ||
      this.imagesList[0];

    localStorage.setItem('currentBgImage', currentImage);
  }
}

```

For Components part :

> app.component.ts
```sh
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public bgImagesList = ['bg-1.jpg','bg-2.jpg','bg-3.jpg','bg-4.jpg','bg-5.jpg','bg-6.jpg'];
}
```

> app.component.html

```
<div  appBgChangeImage [imagesList]="bgImagesList"></div>
```
   
## License

MIT

