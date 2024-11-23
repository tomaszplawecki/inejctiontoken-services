import { Component, inject, signal } from '@angular/core';
import { TITLE_INTERFACE_TOKEN } from './title.token';
import { FirstTitleService } from './first-title.service';

@Component({
  selector: 'app-component-one',
  template: '<p>Component One Title: {{ title() }}</p>',
  providers: [{ provide: TITLE_INTERFACE_TOKEN, useClass: FirstTitleService }],
  standalone: true,
})
export class ComponentOneComponent {
  private readonly titleService = inject(TITLE_INTERFACE_TOKEN);
  title = signal(this.titleService.getTitle());
}
