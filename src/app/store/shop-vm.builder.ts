import { CartItemVm } from '../components/cart/view-model/cart-item.vm';
import { ProductItemVm } from '../components/items-list/view-model/product-item.vm';
import { Product } from '../models/product.model';
import { CartVm, ProductListVm } from './shop.vm';

export function buildProductListVm(
  products: Product[],
  searchWord: string,
  quantities: Record<string, number>,
): ProductListVm {
  return {
    productItems: buildProductItems(),
  };

  function buildProductItems(): ProductItemVm[] {
    const word = searchWord.trim().toLowerCase();
    return products
      .filter((p) => p.name.toLowerCase().includes(word))
      .map((p) => ({
        ...p,
        quantity: quantities[p.id] ?? 0,
      }));
  }
}

export function buildCartVm(
  products: Product[],
  quantities: Record<string, number>,
  taxRate: number,
  cartVisible: boolean,
): CartVm {
  const items = buildCartItems();
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const tax = subtotal * taxRate;
  const isActive = items.length > 0;

  return {
    items,
    subtotal,
    tax,
    itemsCount: items.length,
    total: subtotal + tax,
    isActive,
    isVisible: cartVisible,
    canCheckout: isActive,
  };

  function buildCartItems(): CartItemVm[] {
    const items: CartItemVm[] = [];
    for (const p of products) {
      if (quantities[p.id]) {
        const quantity = quantities[p.id];
        items.push({
          id: p.id,
          name: p.name,
          price: p.unitPrice,
          quantity,
          total: p.unitPrice * quantity,
        });
      }
    }
    return items;
  }
}
