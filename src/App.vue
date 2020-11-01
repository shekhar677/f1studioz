<template>
  <div class="height-ctrl w-full">
    <router-view/>
  </div>
</template>

<style>
.height-ctrl {
  height: 100vh;
  min-height: -webkit-fill-available;
}
</style>
