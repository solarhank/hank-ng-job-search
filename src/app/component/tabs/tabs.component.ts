import { Component } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  tabs: Array<Route> = [
    { title: 'JOBS', path: 'board' },
    { title: 'FAVORITES', path: 'favorites' },
  ]
}
