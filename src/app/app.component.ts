import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PanelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'div';
        
  header = 'what type of retail spaces are avialable in malls?'
}


