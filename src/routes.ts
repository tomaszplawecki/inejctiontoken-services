import { Route } from '@angular/router';
import { ComponentOneComponent } from './component-one.component';
import { ComponentTwoComponent } from './component-two.component';

export const appRoutes: Route[] = [
  {
    path: 'one',
    component: ComponentOneComponent,
  },
  {
    path: 'two',
    component: ComponentTwoComponent,
  },
]