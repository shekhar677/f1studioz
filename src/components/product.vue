<template>
  <div class="bg-white shadow rounded-tr-md rounded-tl-md h-full">
    <div class="bg-gray-200 flex items-center no-wrap overflow-x-auto">
      <div @click="showDetail(product)" v-for="(product, index) in products" :key="index" class="w-32 h-10 cursor-pointer p-2 rounded-tr-md rounded-tl-md text-xs flex items-center justify-between flex-no-wrap" :class="(currentProduct.model == product.model)? 'active-tab': 'inactive-tab'">
        <p class="mr-3 text-xs font-semibold">{{ product.productName }}</p>
        <button v-if="currentProduct.model == product.model" class="p-1"><img @click="removeProduct(index)" class="w-2" src="@/assets/icons/close-icon.svg" alt=""></button>
      </div>
      <button v-if="products.length <= 2" @click="addProduct" class="flex items-center p-2 w-24">
        <img class="w-3 mr-1" src="@/assets/icons/plus-blue.svg" alt="">
        <span class="text-xs text-blue-500 font-semibold break-normal">Add More</span>
      </button>
    </div>
    <div class="p-3" v-if="currentProduct">
      <div class="my-2">
        <p class="text-xs text-gray-600 mb-1">Model/Product ID #</p>
        <input class="w-full px-2 py-1 border-b-2 text-sm" type="text" v-model="currentProduct.model">
      </div>
      <div class="my-2">
        <p class="text-xs text-gray-600 mb-1">Product Type</p>
        <input class="w-full px-2 py-1 border-b-2 text-sm" type="text" v-model="currentProduct.type">
      </div>
      <div class="my-2">
        <p class="text-xs text-gray-600 mb-1">Purity</p>
        <input class="w-full px-2 py-1 border-b-2 text-sm" type="text" v-model="currentProduct.purity">
      </div>
      <div class="my-2">
        <p class="text-xs text-gray-600 mb-1">Weight</p>
        <input class="w-full px-2 py-1 border-b-2 text-sm" type="text" v-model="currentProduct.weight">
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentProduct: '',
      products: [
        {
          productName: 'Product- 1',
          model: 12387963246,
          type: 'Ring (Platinum)',
          purity: '14 kt',
          weight: '3.44 g',
        },
      ]
    }
  },
  methods: {
    getRandomNo() {
      return parseInt((Math.random() * 9 + 1) * Math.pow(10,10-1), 10);
    },
    addProduct() {
      if (this.products.length <= 2) {
        this.products.push({
          productName: `Product- ${this.products.length+1}`,
          model: this.getRandomNo(),
          type: 'Ring (Platinum)',
          purity: '14 kt',
          weight: '3.44 g',
        })
        this.currentProduct = this.products[this.products.length -1];
      }
    },
    removeProduct(index) {
      if (this.products.length > 1) {
        this.products.splice(index, 1);
      }
    },
    showDetail(product) {
      this.currentProduct = product
    }
  },
  mounted() {
    this.currentProduct = this.products[0]
  }
}
</script>

<style>

</style>