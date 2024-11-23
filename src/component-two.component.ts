import { Component, inject, signal } from '@angular/core';
import { TITLE_INTERFACE_TOKEN } from './title.token';
import { SecondTitleService } from './second-title.service';

@Component({
  selector: 'app-component-two',
  template: '<p>Component Two Title: {{ title() }}</p>',
  providers: [{ provide: TITLE_INTERFACE_TOKEN, useClass: SecondTitleService }],
  standalone: true,
})
export class ComponentTwoComponent {
  private readonly titleService = inject(TITLE_INTERFACE_TOKEN);
  title = signal(this.titleService.getTitle());
}
