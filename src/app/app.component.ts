import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { MissionListComponent } from './components/missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101381972-lab-test-2-comp3133';
}