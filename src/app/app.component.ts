import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public bgImagesList = [
    'bg-1.jpg',
    'bg-2.jpg',
    'bg-3.jpg',
    'bg-4.jpg',
    'bg-5.jpg',
    'bg-6.jpg',
  ];
  title = 'angular-bg-change-on-refresh';
}
