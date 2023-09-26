<template>
  <section>
    <div class="list">
      <div @click="openInner" class="img" style="cursor: pointer">
        <img :src="data.img" />
      </div>
      <div class="info">
        <h3 class="title">{{ data.title }}</h3>
        <p class="desc">{{ data.desc }}</p>
        <p class="count">{{ data.amount }} X</p>
        <p class="price">
          <strong>{{ data.price }} </strong> USD
        </p>
        <button class="delete-button" @click="deleteItem">Delete</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["deleteItem"]);

const deleteItem = () => {
  emit("deleteItem", props.data.id);
};

const router = useRouter();

const openInner = () => {
  router.push({
    path: "inner",
    query: {
      id: props.data.id,
      price: props.data.price,
      title: props.data.title,
      desc: props.data.desc,
      img: props.data.img,
      count: props.data.amount,
    },
  });
};
</script>

<style scoped lang="scss">
section {
  margin: 3rem;

  .list {
    border: 2px solid black;
    border-radius: 10px;
    width: 500px;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    .img {
      width: calc(40% - 10px);
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    .info {
      width: calc(60% - 10px);
    }
    /* .count {
      color: green;
    }

    h3,
    p {
      margin-left: 50%;
    }

    .img {
      width: 200px;
      height: 100%;
      margin-top: -100px;
      margin-left: 10px;

      img {
        width: 100%;
        cursor: pointer;
        object-fit: contain;
      }
    } */

    .delete-button {
      background-color: red;
      color: white;
      padding: 5px 15px;
      border-radius: 2px;
      margin-left: 50%;
      margin-bottom: 10px;
      cursor: pointer;
      transition: 0.6s;

      &:hover {
        transform: scale(1.12);
      }
    }
  }
}
</style>
