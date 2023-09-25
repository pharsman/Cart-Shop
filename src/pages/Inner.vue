<template>
  <div class="container">
    <div class="inner-cont">
      <div class="img"><img :src="currentData.img" /></div>
      <div class="prod-info">
        <h2 class="title">{{ currentData.title }}</h2>
        <div class="not-title">
          <p class="desc">{{ currentData.desc }}</p>
          <p class="price">
            <strong>
              {{ balance === 0 ? route.query.price : price }} USD
            </strong>
          </p>
          <div class="inc-dec">
            <button @click="minus" :disabled="disableBut">-</button>
            <span>{{ route.query.count ? route.query.count : counter }}</span>
            <button @click="plus" :disabled="disableBut">+</button>
          </div>
          <button class="add" :disabled="disableBut" @click="add">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";

const route = useRoute();
const store = useStore();

const currentData = ref([]);
const counter = ref(1);
const balance = ref(0);

const plus = () => {
  counter.value++;
  balance.value += parseFloat(currentData.value.price);
};

const minus = () => {
  if (counter.value > 1) {
    counter.value--;
    balance.value -= parseFloat(currentData.value.price);
  }
};

const addItem = ref(null);

const add = () => {
  addItem.value = {
    id: currentData.value.id,
    title: currentData.value.title,
    desc: currentData.value.desc,
    img: currentData.value.img,
    price: price,
    amount: counter.value,
  };
  store.dispatch("setProduct", addItem.value);
  localStorage.setItem("cartItem", JSON.stringify(store.state.cartProducts));
  disableButton();
};

const disableBut = ref(false);

const disableButton = () => {
  store.getters.getProducts.forEach((el) => {
    if (el.id === currentData.value.id) {
      disableBut.value = true;
    }
  });
};

const price = computed(() => {
  if (balance.value === 0) return "0";
  return balance.value.toFixed(3).slice(0, -1).replace(/0$/, "");
});

onMounted(() => {
  currentData.value = route.query;
  balance.value = parseFloat(route.query.price);
  currentData.value.price = +currentData.value.price;
  disableButton();
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  .inner-cont {
    padding: 24px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 400px;
    gap: 80px;
    .img {
      min-width: 640px;
      height: 400px;
      width: 700px;
      padding: 20px 0;
      border: 2px solid black;
      /* overflow: hidden; */
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .prod-info {
      height: 100%;
      display: flex;
      flex-direction: column;
      height: 400px;
      justify-content: space-evenly; /* Vertically space the child elements */
      gap: 50px;
      .title {
        font-size: 40px;
      }
      .not-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        .inc-dec {
          display: flex;
          align-items: center;
          gap: 10px;

          button {
            border: none;
            width: 30px;
            height: 30px;
            cursor: pointer;
            border-radius: 4px;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            &:active {
              background-color: #e7e7e7;
            }
          }
        }
      }

      .add {
        background-color: #fbeee0;
        border: 2px solid #422800;
        border-radius: 30px;
        box-shadow: #422800 4px 4px 0 0;
        color: #422800;
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
        font-size: 18px;
        padding: 0 18px;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        &:hover {
          background-color: #fff;
        }
        &:active {
          box-shadow: #422800 2px 2px 0 0;
        }
        &:disabled {
          background-color: #fbeee00c;
          border: 2px solid #422800;
          border-radius: 30px;
          box-shadow: #422800 4px 4px 0 0;
          color: #42280046;
          cursor: pointer;
          display: inline-block;
          font-weight: 600;
          font-size: 18px;
          padding: 0 18px;
          line-height: 50px;
          text-align: center;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          transform: translate(0px, 0px);
        }
      }
    }
  }
}
</style>
