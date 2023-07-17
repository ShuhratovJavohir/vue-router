<template>
  <div class="container">
    <p class="crumbs">Cars/{{ getCar.title }}</p>
    <div class="car">
      <div class="car__left">
        <h2 class="car__left-title">{{ getCar.title }}</h2>
        <p class="car__left-text">{{ getCar.fullInfo }}</p>
      </div>
      <img :src="getCar.img" :alt="getCar.title" class="car-img">
    </div>
  </div>
</template>

<script>
import { items } from "@/items";
export default {
  data() {
    return {
      cars: items,
      currentId: null,
    };
  },
  created() {
    this.currentId = this.$route.params.id;
  },
  computed: {
    getCar() {
      return this.cars.find((car) => car.id == this.currentId);
    },
  },
};
</script>
