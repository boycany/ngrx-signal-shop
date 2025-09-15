import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialShopState } from './shop.state';
import { buildCartVm, buildProductListVm } from './shop-vm.builder';
import { computed } from '@angular/core';
import * as updaters from './shop.updaters';

export const ShopStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialShopState),
  withComputed((store) => {
    const { products, searchWord, cartQuantities, taxRate, cartVisible } =
      store;
    return {
      productListVm: computed(() =>
        buildProductListVm(products(), searchWord(), cartQuantities()),
      ),
      cartVm: computed(() =>
        buildCartVm(products(), cartQuantities(), taxRate(), cartVisible()),
      ),
    };
  }),
  withMethods((store) => ({
    setSearchWord: (searchWord: string) =>
      patchState(store, updaters.setSearchWord(searchWord)),
    addToCart: (productId: number) =>
      patchState(store, updaters.addToCart(productId)),
    viewCart: () => patchState(store, updaters.viewCart()),
    hideCart: () => patchState(store, updaters.hideCart()),
    incrementQuantity: (productId: number) =>
      patchState(store, updaters.incrementQuantity(productId)),
    decrementQuantity: (productId: number) =>
      patchState(store, updaters.decrementQuantity(productId)),
    checkoutCart: () => patchState(store, updaters.checkoutCart()),
  })),
);
