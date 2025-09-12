import { ALL_PRODUCTS } from '../data/all-products';
import { Product } from '../models/product.model';

export interface ShopState {
  readonly products: Product[];
  readonly searchWord: string;
  readonly cartQuantities: Record<string, number>;
  readonly cartVisible: boolean;
  readonly taxRate: number;
}

export const initialShopState: ShopState = {
  products: ALL_PRODUCTS,
  searchWord: '',
  cartQuantities: {
    'signal-booster': 2,
    // 'reactive-refresher': 1,
  },
  cartVisible: true,
  taxRate: 0.08,
};
