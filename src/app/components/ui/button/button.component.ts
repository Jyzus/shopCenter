import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'button-custom',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [MatButtonModule],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() onClick?: () => void;
}
