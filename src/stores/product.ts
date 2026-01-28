import type { Product } from '@/types/Products'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

type ProductCartTypes = Product & { amount: number }

export const useProductStore = defineStore('product', () => {
  const productCart = ref<ProductCartTypes[]>([])
  const itemAmount = ref(0)
  const totalPrice = ref(0)

  watch(
    [productCart, itemAmount],
    () => {
      const amount = productCart.value.reduce(
        (accumulator, currentItem) => accumulator + currentItem.amount,
        0,
      )
      itemAmount.value = amount

      const productTotalPrice = productCart.value.reduce(
        (accumulator, currentItem) => accumulator + currentItem.price * currentItem.amount,
        0,
      )
      totalPrice.value = productTotalPrice
    },
    { deep: true },
  )

  function addProduct(product: Product, id: number, amount: number = 1) {
    const newProduct = { ...product, amount: amount }
    const cartItem = productCart.value.find((item) => item.id === id)
    if (cartItem) {
      const newCartItem = [...productCart.value].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + amount }
        }
        return item
      })
      return (productCart.value = newCartItem)
    }
    return (productCart.value = [...productCart.value, newProduct])
  }

  function clearCart() {
    productCart.value = []
    itemAmount.value = 0
    totalPrice.value = 0
  }

  function removeProduct(id: number) {
    const newCart = productCart.value.filter((item) => item.id !== id)
    return (productCart.value = newCart)
  }

  function incrementProducAmount(id: number) {
    const cartItem = productCart.value.find((item) => item.id === id)
    if (!cartItem) return
    addProduct(cartItem, id, 1)
  }

  function decrementProductAmount(id: number) {
    const cartItem = productCart.value.find((item) => item.id === id)
    if (cartItem) {
      if (cartItem.amount === 1) return removeProduct(id)
      const newProductAmount = productCart.value.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      return (productCart.value = newProductAmount)
    }
  }

  return {
    productCart,
    itemAmount,
    totalPrice,
    addProduct,
    clearCart,
    removeProduct,
    incrementProducAmount,
    decrementProductAmount,
  }
})
