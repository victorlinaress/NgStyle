import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
fontSize: number = 15;
textColor: 'white' | 'orange' = 'white'

increaseFontSize() {
  this.fontSize +=5
}
}
