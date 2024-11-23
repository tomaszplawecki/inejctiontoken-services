import { InjectionToken } from '@angular/core';
import { TitleInterface } from './title.interface';

export const TITLE_INTERFACE_TOKEN = new InjectionToken<TitleInterface>(
  'TitleInterface'
);
