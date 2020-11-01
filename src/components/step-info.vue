<template>
  <div class="flex flex-col justify-around items-end text-gray-800">
    <div class="flex justify-around items-end w-full">
      <div class="flex flex-col relative items-center">
        <div class="flex flex-col justify-center items-center">
          <img class="w-6" src="@/assets/icons/product.svg" alt="">
          <p class="text-xs font-semibold">Product Details</p>
        </div>
        <div v-if="currentStep > 0" class="progress-line-after mt-2 w-5 h-5 flex items-center justify-center rounded-full bg-green-600">
          <img class="w-4" src="@/assets/icons/check.svg" alt="">
        </div>
        <div v-else class="progress-line-after mt-2 w-5 h-5 flex items-center justify-center rounded-full bg-blue-600">
          <p class="text-white text-xs font-semibold">1</p>
        </div>
      </div>
      <div class="flex flex-col relative items-center">
        <div class="flex flex-col justify-center items-center">
          <img class="w-6" src="@/assets/icons/contact-information.svg" alt="">
          <p class="text-xs font-semibold">Customer Details</p>
        </div>
        <div v-if="currentStep > 1" class="progress-line-before progress-line-after mt-2 w-5 h-5 flex items-center justify-center rounded-full bg-green-600">
          <img class="w-4" src="@/assets/icons/check.svg" alt="">
        </div>
        <div v-else class="progress-line-before progress-line-after mt-2 w-5 h-5 flex items-center justify-center rounded-full bg-blue-600">
          <p class="text-white text-xs font-semibold">2</p>
        </div>
      </div>
      <div class="flex flex-col relative items-center">
        <div class="flex flex-col justify-center items-center">
          <img class="w-6" src="@/assets/icons/credit-card.svg" alt="">
          <p class="text-xs font-semibold">Payment Info</p>
        </div>
        <div v-if="currentStep > 2" class="progress-line-before mt-2 w-5 h-5 flex items-center justify-center rounded-full bg-green-600">
          <img class="w-4" src="@/assets/icons/check.svg" alt="">
        </div>
        <div v-else class="progress-line-before mt-2 w-5 h-5 flex items-center justify-center rounded-full bg-blue-600">
          <p class="text-white text-xs font-semibold">3</p>
        </div>
      </div>
    </div>
    <div class="w-full px-4">
      
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentStep']
}
</script>

<style>
/* .progress-line-before:before {
  content: '';
  position: absolute;
  width: 50%;
  background: grey;
  display: block;
  height: 0.1em;
  left: 0;
  z-index: 1;
}
.progress-line-after:after {
  content: '';
  position: absolute;
  width: 50%;
  background: grey;
  display: block;
  height: 0.1em;
  right: 0;
  z-index: 1;
} */
</style>