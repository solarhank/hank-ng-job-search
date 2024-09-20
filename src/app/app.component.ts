import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './component/tabs/tabs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
}
