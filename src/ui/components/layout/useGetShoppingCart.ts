import { ShoppingCart } from '@/domain/shopping-cart/shopping-cart'
import { ref, Ref } from 'vue'
import { getShoppingCart } from '@/container'

export function useGetShoppingCart() {
  const shoppingCart: Ref<ShoppingCart> = ref({} as any)
  
  shoppingCart.value = getShoppingCart.execute()

  return {
    shoppingCart
  }
}