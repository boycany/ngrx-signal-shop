import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './components/toolbar/toolbar';
import { ItemsList } from './components/items-list/items-list';
import { Cart } from './components/cart/cart';
import { ShopStore } from './store/shop.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, ItemsList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly store = inject(ShopStore);
  // readonly isCartShowing = computed(() => this.store.cartVm().isVisible);
  cartVmEff = effect(() =>
    console.log('Cart View Model :>> ', this.store.cartVm()),
  );
  productListVmEff = effect(() =>
    console.log('Product List View Model :>> ', this.store.productListVm()),
  );
}
