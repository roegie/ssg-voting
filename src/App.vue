<template>
  <div>
    <Header />
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>