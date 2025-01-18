import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss'], // Corrigido 'styleUrl' para 'styleUrls'
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white';
  buttonText: 'Branco' | 'Laranja' = 'Laranja';

  stylesString: string = 'font-size: 15px; color: white;'; // Adicionado ponto e vírgula ao final
  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
  };

  increaseFontSize() {
    this.fontSize += 5;
    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;
  }

  toggleFontColor() {
    if (this.textColor === 'white') {
      this.textColor = 'orange';
      this.buttonText = 'Branco';
    } else {
      this.textColor = 'white';
      this.buttonText = 'Laranja';
    }
    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;
  }
}
