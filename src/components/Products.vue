<template>
    <div class="product">
        <div class="img">
            <img :src="data.url">
        </div>
        <p class="title">{{  data.title  }}</p>
        <p class="description"> {{  data.desc  }}</p>
        <p class="price">{{  data.price  }} GEL</p>
        <button class="view" @click="openInner">View</button>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
function openInner() {
    router.push({ path: 'inner', query: { plan: props.data.id } })
}

</script>

<style scoped lang="scss">
.product {
    width: 400px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 15px;
    margin-top: 10px;

    .img {
        margin-left: 46px;
        width: 300px;
        padding: 2px;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    .title {
        font-size: 30px;
        font-weight: bolder;
        text-align: center;
    }

    button {
        margin-left: 30%;
        background-color: aqua;
        padding: 10px 45px;
        border-radius: 60px;
        font-weight: bold;
        cursor: pointer;
    }
}
</style>