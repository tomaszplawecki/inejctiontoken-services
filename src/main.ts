import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { appRoutes } from './routes';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a routerLink="/one">Component One</a>
    <a routerLink="/two">Component Two</a>
    <div class="content">
      <router-outlet/>
    </div>
  `,
  imports: [RouterOutlet, RouterLink],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes)],
});
