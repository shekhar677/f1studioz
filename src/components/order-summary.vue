<template>
  <div>
    <div v-if="more" class="bg-white rounded-md shadow p-3 text-gray-800">
     <div class="flex justify-between">
       <p class="text-base uppercase font-semibold">Order Summary</p>
       <button @click="more = !more"><img src="@/assets/icons/expand_more.svg" alt=""></button>
      </div>
      <hr class="my-3 border border-gray-400 bg-gray-400">
      <div>
        <div class="flex items-center justify-between my-4">
          <p class="text-xs text-gray-600 font-semibold">Discount</p>
          <p class="text-xs text-gray-600 font-semibold">6993.0</p>
        </div>
        <div class="flex items-center justify-between my-4">
          <p class="text-xs text-gray-600 font-semibold">Discount</p>
          <p class="text-xs text-gray-600 font-semibold">6993.0</p>
        </div>
        <div class="flex items-center justify-between my-4">
          <p class="text-xs text-gray-600 font-semibold">Discount</p>
          <p class="text-xs text-gray-600 font-semibold">6993.0</p>
        </div>
      </div>
      <hr class="my-3 border border-gray-400 bg-gray-400">
      <div class="flex items-center justify-between">
        <p class="text-base capitalize font-semibold">Grand Total</p>
        <p class="text-base capitalize font-semibold">₹19,326.0</p>
      </div>
    </div>
    <div v-if="!more" class="bg-gray-400 p-3 mt-1 py-4 text-gray-800 box-adjust flex items-center justify-between">
      <div class="flex items-center justify-between w-full">
        <p class="text-base capitalize font-semibold">Grand Total</p>
        <p class="text-base capitalize font-semibold">₹19,326.0</p>
      </div>
      <button class="ml-4" @click="more = !more"><img src="@/assets/icons/expand_less.svg" alt=""></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentStep'],
  data() {
    return {
      more: true,
    }
  },
  watch: {
    currentStep: function(val) {
      if (val == 1) {
        this.more = false;
      } else {
        this.more = true;
      }
    }
  }
}
</script>

<style>

</style>