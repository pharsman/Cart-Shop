<template>
  <div class="products">
    <div class="img">
      <img :src="data.image" alt="product img" />
    </div>
    <p class="title">{{ data.title }}</p>
    <p class="desc">{{ shortenedDesc }}</p>
    <p class="price">{{ data.price }} USD</p>
    <button class="view" @click="openInner">View</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const shortenedDesc = ref(
  props.data.description.slice(0, 100) +
    (props.data.description.length > 100 ? "..." : "")
);

function openInner() {
  router.push({
    path: "inner",
    query: {
      id: props.data.id,
      price: props.data.price,
      title: props.data.title,
      desc: props.data.description,
      img: props.data.image,
    },
  });
}
</script>

<style scoped lang="scss">
.products {
  width: 25rem;
  border: 0.125rem solid black;
  border-radius: 0.625rem;
  height: 25rem;
  padding: 0.9375rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  .title {
    font-weight: bold;
    color: #000000;
    text-align: center;
  }
  .desc {
    font-size: 0.875rem;
  }
  .price {
    font-weight: bold;
  }
  .img {
    width: 18.75rem;
    height: 12.5rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .viewButton {
    background-color: aqua;
    padding: 0.625rem 2.8125rem;
    border-radius: 3.75rem;
    font-weight: bold;
    cursor: pointer;
    width: 6.25rem;
  }

  .view {
    background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
    border-radius: 0.5rem;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 1rem;
    justify-content: center;
    padding: 0.625rem 1.375rem;
    text-decoration: none;
    width: 6.25rem;
    border: 0;
    margin: auto;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
      background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
    }
  }
}
</style>
