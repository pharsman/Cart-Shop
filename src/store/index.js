import { createStore } from "vuex";

const store = createStore({
  state: {
    cartProducts: [],
  },
  mutations: {
    setProduct(state, val) {
      state.cartProducts.push(val);
    },
    removeProduct(state, id) {
      state.cartProducts = state.cartProducts.filter((el) => el.id !== id);
    },
    replaceProduct(state, val) {
      state.cartProducts = val;
    },
  },
  actions: {
    setProduct(context, val) {
      context.commit("setProduct", val);
    },
    removeProduct(context, id) {
      context.commit("removeProduct", id);
    },
    replaceProduct(context, val) {
      context.commit("replaceProduct", val);
    },
  },
  getters: {
    getProducts(state) {
      return state.cartProducts;
    },
  },
});

export default store;
