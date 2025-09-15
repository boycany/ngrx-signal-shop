import { ALL_PRODUCTS } from '../data/all-products';
import { Product } from '../models/product.model';

export interface ShopState {
  readonly products: Product[];
  readonly searchWord: string;
  readonly cartQuantities: Record<string, number>;
  readonly cartVisible: boolean;
  readonly taxRate: number;
}

export type PersistedShopState = Pick<ShopState, 'cartQuantities'>;

export const initialShopState: ShopState = {
  products: ALL_PRODUCTS,
  searchWord: '',
  cartQuantities: {},
  cartVisible: false,
  taxRate: 0.08,
};
