<template>
  <Header />
  <RouterView />
</template>

<script setup>
import Header from './components/Header.vue';
import { onMounted } from 'vue';
import {useStore} from 'vuex';

const store = useStore()

onMounted(() => {
  if (localStorage.getItem('cartItem')) {
    store.dispatch('replaceProduct', JSON.parse(localStorage.getItem('cartItem')))
  }
})

</script>



