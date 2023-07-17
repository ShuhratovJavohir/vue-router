<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <a href="/" class="header__nav-logo"> Vue-router </a>
        <ul class="header__nav-list">
          <li v-for="(page, index) in pages" :key="index">
            <RouterLink :to="page.path" class="header__nav-link">{{ page.name }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    pages: {typeof: Array,},
  },
};
</script>
