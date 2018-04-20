import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navber></app-navber>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
