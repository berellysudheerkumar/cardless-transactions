<template>
<div>
    <div class="col-sm-9 m-auto">
        <h3>Transaction Details</h3>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile number</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody v-for="(item, index) in state" :key="item.name">
    <tr>
      <th scope="row">{{index +1}}</th>
      <td>{{item.name}}</td>
      <td>{{item.receiverPhoneNumber}}</td>
      <td>{{item.amount}}</td>
    </tr>
  </tbody>
</table>
<div class="col-sm-6 mb-3 m-auto">
         <button type="button" class="flex btn btn-primary btn-lg m-auto" @click="gotoDetails()">create cardless transaction request</button>
      </div>
</div>
</div>
</template>
<script>
import { ref, onMounted } from 'vue'
export default {
    name:'GetDetails',
    setup() {
    const state = ref("");

    function fetchData() {
     fetch("http://localhost:3000/getTranscations").then(response => response.json())
            .then(data => state.value = data);
             return { state }
    }
   

    onMounted(() => {
      fetchData();
    });

    return {
     state
    };
  },
  methods:{
    gotoDetails() {
    this.$router.push('/app')
    }
  }
}
</script>
<style scoped>
</style>