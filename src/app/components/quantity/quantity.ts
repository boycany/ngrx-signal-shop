import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quantity',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './quantity.html',
  styleUrl: './quantity.scss',
})
export class Quantity {
  readonly amount = input.required();
  readonly increment = output();
  readonly decrement = output();
}
