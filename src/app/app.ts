import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './components/toolbar/toolbar';
import { ItemsList } from './components/items-list/items-list';
import { Cart } from './components/cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, ItemsList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ngrx-signals-shop');
  readonly isCartShowing = signal(false);
}
