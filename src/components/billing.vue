<template>
  <div class="popup bg-gray-100 h-full flex flex-col overflow-y-auto">
    <div class="flex justify-between p-6 border border-b-2">
      <img class="w-20" src="@/assets/icons/logo.svg" alt="">
      <button @click="closeDialog" class="rounded-full w-6 h-6 flex justify-center items-center outline-white">
        <img src="@/assets/icons/close-icon.svg" alt="">
      </button>
    </div>
    <div v-if="!submitted" class="bg-gray-300 py-6 px-2 border border-gray-400">
      <step-info :currentStep="currentStep"></step-info>
    </div>
    <div v-if="!submitted" class="flex flex-col flex-grow justify-between">
      <div class="py-4 px-3 flex flex-col flex-grow justify-between">
        <product v-if="currentStep == 0" class="mb-5"></product>
        <customer-details v-if="currentStep == 1" class="mb-5"></customer-details>
        <payment-method v-if="currentStep == 2" class="mb-5"></payment-method>
        <order-summary :currentStep="currentStep"></order-summary>
      </div>
      <button @click="goNext" class="bg-blue-700 text-white py-3 text-sm">{{ currentStepName }}</button>
    </div>
    <confirmation v-if="submitted"></confirmation>
  </div>
</template>

<script>
import StepInfo from '@/components/step-info'
import Product from '@/components/product'
import OrderSummary from '@/components/order-summary'
import CustomerDetails from '@/components/customer-details'
import PaymentMethod from '@/components/payment-method'
import Confirmation from '@/components/confirmation'

export default {
  components: {
    StepInfo,
    Product,
    OrderSummary,
    CustomerDetails,
    PaymentMethod,
    Confirmation,
  },
  data() {
    return {
      currentStep: 0,
      submitted: false,
      stepNames: ['Submit & Go to Customer Details', 'Submit & Go to Payment Info', 'Submit'],
      currentStepName: 'Submit & Go to Customer Details'
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
      this.currentStep = 0;
      this.submitted = false
    },
    goNext() {
      if (this.currentStep == 2) {
        this.submitted = true;
      } else {
        if (this.currentStep <= 1) {
          this.currentStep = this.currentStep + 1;
          this.currentStepName = this.stepNames[this.currentStep];
        }
      }
    }
  }
}
</script>

<style>
  .popup {
    width: 35rem;
  }
  @media screen and (max-width: 768px) {
    .popup {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;right: 0;bottom: 0;left: 0;
    }
  }
</style>