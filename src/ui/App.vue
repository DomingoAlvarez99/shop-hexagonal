<template>
  <div class="app">
    <TopBar/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopBar from './components/layout/TopBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    TopBar
  }
})
</script>
