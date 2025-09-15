import { CartItemVm } from '../components/cart/view-model/cart-item.vm';
import { ProductItemVm } from '../components/items-list/view-model/product-item.vm';

export interface ProductListVm {
  readonly productItems: ProductItemVm[];
}

export interface CartVm {
  readonly items: CartItemVm[];
  readonly subtotal: number;
  readonly tax: number;
  readonly total: number;
  readonly itemsCount: number; //total quantity of all items in the cart
  readonly isActive: boolean; //also means items.length > 0, but we choose to keep it in the state for view model
  readonly isVisible: boolean;
  readonly canCheckout: boolean;
}
