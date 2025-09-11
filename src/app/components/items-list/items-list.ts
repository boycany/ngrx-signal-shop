import { Component, signal } from '@angular/core';
import { sampleProductItems } from './view-model/product-item.vm';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  imports: [ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.scss',
})
export class ItemsList {
  readonly products = signal(sampleProductItems);
}
