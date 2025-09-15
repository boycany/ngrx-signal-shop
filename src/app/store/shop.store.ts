import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialShopState, PersistedShopState } from './shop.state';
import { buildCartVm, buildProductListVm } from './shop-vm.builder';
import { computed, effect, Signal } from '@angular/core';
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
    addToCart: (productId: string) =>
      patchState(store, updaters.addToCart(productId)),
    viewCart: () => patchState(store, updaters.viewCart()),
    hideCart: () => patchState(store, updaters.hideCart()),
    incrementQuantity: (productId: string) =>
      patchState(store, updaters.incrementQuantity(productId)),
    decrementQuantity: (productId: string) =>
      patchState(store, updaters.decrementQuantity(productId)),
    checkoutCart: () => patchState(store, updaters.checkoutCart()),
  })),
  withHooks((store) => ({
    onInit: () => {
      const persisted: Signal<PersistedShopState> = computed(() => ({
        cartQuantities: store.cartQuantities(),
      }));

      const persistedText = localStorage.getItem('shopState');
      if (persistedText) {
        const persistedState = JSON.parse(persistedText) as PersistedShopState;
        patchState(store, persistedState);
      }

      effect(() => {
        const persistedValue = persisted();
        localStorage.setItem('shopState', JSON.stringify(persistedValue));
      });
    },
  })),
);
