import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  tabs: Array<Route> = [
    { title: 'Jobs', path: '' },
    { title: 'Favorites', path: 'favorites' },
  ]
}
