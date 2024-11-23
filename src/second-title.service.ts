// second-title.service.ts
import { Injectable } from '@angular/core';
import { TitleInterface } from './title.interface';

@Injectable({
  providedIn: 'root',
})
export class SecondTitleService implements TitleInterface {
  getTitle(): string {
    return 'Title from SecondTitleService';
  }
}
