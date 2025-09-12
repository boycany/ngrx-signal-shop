import { signalStore, withComputed, withState } from '@ngrx/signals';
import { initialShopState } from './shop.state';
import { buildCartVm, buildProductListVm } from './shop-vm.builder';
import { computed } from '@angular/core';

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
);
