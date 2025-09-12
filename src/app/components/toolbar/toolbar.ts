import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ShopStore } from '../../store/shop.store';

@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule, MatButtonModule, FormsModule, MatBadgeModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  // host: {
  //   '(keydown.enter)': 'onEnter()'
  // }
})
export class Toolbar {
  readonly store = inject(ShopStore);
  // readonly searchValue = this.store.searchWord;
  // readonly cartCount = computed(() => this.store.cartVm().items.length);
  // readonly cartActive = computed(() => this.store.cartVm().isActive);
}
