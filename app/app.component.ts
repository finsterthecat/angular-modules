import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <app-title [subtitle]="subtitle"></app-title>
    <app-contact></app-contact>
  `
  })
export class AppComponent {
  title = "Angular Modules"
  subtitle = "(v2)"
}
