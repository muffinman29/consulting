import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  images = [
    { src:  'assets/ComputerBinary.png', alt: 'Computer' },
    { src: 'assets/ConfusedWoman.png', alt: 'Confused Woman' }
  ];
}
