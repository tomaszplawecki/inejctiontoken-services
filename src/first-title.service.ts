// first-title.service.ts
import { Injectable } from '@angular/core';
import { TitleInterface } from './title.interface';

@Injectable({
  providedIn: 'root',
})
export class FirstTitleService implements TitleInterface {
  getTitle(): string {
    return 'Title from FirstTitleService';
  }
}
