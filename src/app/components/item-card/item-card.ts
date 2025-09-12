import { Component, computed, input } from '@angular/core';
import { ProductItemVm } from '../items-list/view-model/product-item.vm';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Ranking } from '../ranking/ranking';

@Component({
  selector: 'app-item-card',
  imports: [CurrencyPipe, MatButtonModule, Ranking],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss',
})
export class ItemCard {
  readonly product = input.required<ProductItemVm>();
  readonly image = computed(() => `images/${this.product().id}-min.png`);
  readonly isInCart = computed(() => this.product().quantity > 0);
}
