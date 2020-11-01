<template>
  <div class="flex h-full relative select-none">
    <div class="relative border w-full static-bg flex flex-col justify-between px-2 md:px-10">
      <div class="py-4 mt-3 flex-col md:flex-row flex justify-between text-white">
        <div class="text-xl md:text-2xl">Call with John (Platinum Ring)</div>
        <div class="flex items-center self-end">
          <div class="flex items-center mr-4">
            <button @click="moreInfo = !moreInfo" class="bg-gray-900 py-6 px-1">
              <img class="" v-if="moreInfo" src="@/assets/icons/keyboard_arrow_right.svg" alt="">
              <img class="" v-else src="@/assets/icons/keyboard_arrow_left.svg" alt="">
            </button>
            <div v-if="moreInfo" class="flex items-center overflow-hidden">
              <div v-if="camera" class="h-16 w-24 relative">
                <img class="object-cover w-full h-full border border-white border-2" src="@/assets/cam.jpg" alt="">
                <p class="text-xs absolute bottom-0 inset-x-0 text-center font-semibold" style="bottom:0.5rem">John</p>
              </div>
              <div v-else class="h-16 w-24 relative bg-black flex items-center justify-center">
                <div>
                  <img class="w-6" src="@/assets/icons/video-off.svg" alt="">
                  <p class="text-xs text-center font-semibold" style="bottom:0.5rem">John</p>
                </div>
              </div>
              <div class="h-16 w-24">
                <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
              </div>
              <div class="h-16 w-24 relative">
                <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
                <p class="text-xs absolute bottom-0 inset-x-0 text-center font-semibold" style="bottom:0.5rem">Sales Exec.</p>
              </div>
            </div>
          </div>
          <div v-if="moreInfo" class="time-info mx-4">
            <span class="text-xs">31m</span>
          </div>
        </div>
      </div>
      <div class="py-4 flex justify-between items-center text-white">
        <div>
          <img class="w-20" src="@/assets/icons/logo.svg" alt="">
        </div>
        <div class="flex items-center">
          <img v-if="mic" @click="mic = !mic" class="cursor-pointer w-12" src="@/assets/icons/mic-on.svg" alt="">
          <img v-else @click="mic = !mic" class="cursor-pointer w-12" src="@/assets/icons/mute.svg" alt="">
          <img v-if="camera" @click="camera = !camera" class="cursor-pointer w-12 mx-3 md:mx-6" src="@/assets/icons/camera-on.svg" alt="">
          <img v-else @click="camera = !camera" class="cursor-pointer w-12 mx-3 md:mx-6" src="@/assets/icons/video-off-grey.svg" alt="">
          <img class="cursor-pointer w-12" src="@/assets/icons/end-call.svg" alt="">
        </div>
        <div class="flex items-center">
          <button @click="showBilling = !showBilling" class="bg-gray-500 capitalize text-xs text-black rounded-lg border border-black border-1 px-3 py-1 mr-6">start billing</button>
          <div class="flex items-center cursor-pointer">
            <img class="w-4 mr-3 fill-white" src="@/assets/icons/fullscreen.svg" alt="">
            <p class="text-xs">Exit Full Screen</p>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <billing v-if="showBilling" @close="showBilling = !showBilling"></billing>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Billing from '@/components/billing';

export default {
  name: 'Home',
  components: {
    Billing,
  },
  data() {
    return {
      showBilling: true,
      moreInfo: true,
      mic: true,
      camera: true,
    }
  },
  methods: {
  }
}
</script>

<style>
  .static-bg {
    background: linear-gradient(rgb(0 0 0 / 78%) 0%, rgba(255, 255, 255, 0) 15%, rgba(0, 0, 0, 0) 85%, rgb(0 0 0 / 78%) 100%),url(/img/cam.032e1e2b.jpg) center center no-repeat,url('../assets/cam.jpg') center center no-repeat;
  }
  .time-info {
    position: relative;
  }
  .time-info::before {
  border: solid 3px #cfd0d1;
  border-top-color: green;
  border-radius: 50%;
  content: "";
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) rotate(45deg);
  width: 50px;
  will-change: transform;
}
</style>