<template>
  <div class="h-full p-2">
    <div class="flex flex-col px-3">
      <p class="text-base text-gray-800 font-semibold my-1 mb-3">Choose Payment Method</p>
      <div>
        <div class="flex items-center justify-start bg-white shadow hover:shadow-md p-4 rounded-md">
          <input v-model="paymentMethod" :value="0" name="method" id="cod" class="mr-2 cursor-pointer" type="radio">
          <label for="cod" class="flex items-center cursor-pointer">
            <img class="mx-4" src="@/assets/icons/cash-on-delivery.svg" alt="">
            <p class="text-sm font-semibold text-gray-800">Cash on Delivery</p>
          </label>
        </div>
        <div class="flex items-center justify-start bg-white shadow hover:shadow-md p-4 rounded-md my-4">
          <input v-model="paymentMethod" :value="1" name="method" id="od" class="mr-2 cursor-pointer" type="radio">
          <label for="od" class="flex items-center cursor-pointer">
            <img class="mx-4" src="@/assets/icons/credit-card-two.svg" alt="">
            <p class="text-sm font-semibold text-gray-800">Online Banking</p>
          </label>
        </div>
        <div class="flex items-center justify-start bg-white shadow hover:shadow-md p-4 rounded-md">
          <input v-model="paymentMethod" :value="2" name="method" id="ps" class="mr-2 cursor-pointer" type="radio">
          <label for="ps" class="flex items-center cursor-pointer">
            <img class="mx-4 w-10" src="@/assets/icons/store-pick.png" alt="">
            <p class="text-sm font-semibold text-gray-800">Pick Up From Store</p>
          </label>
        </div>
      </div>
      <div class="mt-5" v-if="paymentMethod == 2">
        <select class="w-full p-3 cursor-pointer shadow rounded-md">
          <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: '',
      cities: [
        "Bhandup",
        "Mumbai",
        "Visakhapatnam",
        "Coimbatore",
        "Delhi",
        "Bangalore",
        "Pune",
        "Nagpur",
        "Lucknow",
        "Vadodara",
        "Indore",
        "Jalalpur",
        "Bhopal",
        "Kolkata",
        "Kanpur",
        "New Delhi",
        "Faridabad",
        "Rajkot",
        "Ghaziabad",
        "Chennai",
        "Meerut",
        "Agra",
        "Jaipur",
        "Jabalpur",
        "Varanasi",
        "Allahabad",
        "Hyderabad",
        "Noida",
        "Howrah",
        "Thane",
        "Patiala",
        "Chakan",
        "Ahmedabad",
        "Manipala",
        "Mangalore",
        "Panvel",
        "Udupi",
        "Rishikesh",
        "Gurgaon",
        "Mathura",
        "Shahjahanpur",
        "Bagpat",
        "Sriperumbudur",
      ],
    }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style>

</style>