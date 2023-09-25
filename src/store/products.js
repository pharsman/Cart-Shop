import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const cartProducts = ref([]);
  const setProduct = (val) => {
    cartProducts.value.push(val);
  };
  const removeProduct = (id) => {
    cartProducts.value = cartProducts.value.filter((el) => el.id !== id);
  };
  const replaceProduct = (val) => {
    cartProducts.value = val;
  };
  return { cartProducts, setProduct, removeProduct, replaceProduct };
});
