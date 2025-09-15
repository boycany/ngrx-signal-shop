import { PartialStateUpdater } from '@ngrx/signals';
import { ShopState } from './shop.state';

export function setSearchWord(
  searchWord: string,
): PartialStateUpdater<ShopState> {
  return (_) => ({ searchWord });
}

export function addToCart(productId: number): PartialStateUpdater<ShopState> {
  return (state) => {
    const cartQuantities = { ...state.cartQuantities };
    cartQuantities[productId] = (cartQuantities[productId] ?? 0) + 1;
    return { cartQuantities };
  };
}

export function viewCart(): PartialStateUpdater<ShopState> {
  return (_) => ({ cartVisible: true });
}

export function hideCart(): PartialStateUpdater<ShopState> {
  return (_) => ({ cartVisible: false });
}

export function incrementQuantity(
  productId: number,
): PartialStateUpdater<ShopState> {
  return addToCart(productId);
}

export function decrementQuantity(
  productId: number,
): PartialStateUpdater<ShopState> {
  return (state) => {
    const cartQuantities = { ...state.cartQuantities };
    const updatedQuantity = cartQuantities[productId] - 1;
    if (updatedQuantity > 0) {
      cartQuantities[productId] = updatedQuantity;
    } else {
      delete cartQuantities[productId];
    }
    return { cartQuantities };
  };
}

export function checkoutCart(): PartialStateUpdater<ShopState> {
  return (_) => ({
    cartQuantities: {},
    cartVisible: false,
  });
}

// export function removeFromCart(productId: number) {}
