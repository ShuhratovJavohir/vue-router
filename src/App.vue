<template>
  <div class="wrapper">
    <Header :pages="pages"/>
    <RouterView/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components:{
    Header,
  },
  data(){
    return{
      pages: [
      {path: '/', name: 'Home'},
      {path: '/cars', name: 'Cars'}, 
    ]
    }
  },
};
</script>
