<template>
  <div class="container">
    <div class="main__products">
      <div class="main__products-item" v-for="product in getProducts">
        <h1>item</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProducts(){
      return this.$store.state.products
    }
  },
}
</script>