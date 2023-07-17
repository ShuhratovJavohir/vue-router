<template>
  <div class="container">
    <p class="crumbs">Cars</p>
    <div class="cars">
      <div class="cars__item" v-for="car in cars" :key="car.id">
        <img class="cars__item-img" :src="car.img" :alt="car.name">
        <RouterLink :to="/cars/ + car.id" class="cars__item-title">{{ car.title }}</RouterLink>
        <p class="cars__item-text">{{ car.text }}</p>
      </div>
    </div>
  </div>  
</template>

<script>
import { items } from '@/items'
export default {
  data(){
    return{
      cars: items
    }
  }
}
</script>