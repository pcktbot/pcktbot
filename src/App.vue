<script setup lang="ts">
import HeaderControls from './components/HeaderControls.vue';
import ComponentWrapper from './components/ComponentWrapper.vue';

</script>

<template>
  <header class="header flex justify-between items-center p-4 bg-red-700 text-white">
    <h1 class="ibm-plex-mono-semibold">pcktbot</h1>
    <HeaderControls />
  </header>

  <main>
    <div class="component-container">
      <ComponentWrapper id="wrapper-1" />
      <ComponentWrapper id="wrapper-2" />
      <ComponentWrapper id="wrapper-3" />
      <ComponentWrapper id="wrapper-4" />
    </div>
  </main>
</template>

<style>
.component-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 72px); /* Adjust based on your header height */
  overflow: hidden;
}
</style>
