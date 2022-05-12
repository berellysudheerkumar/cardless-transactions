<template>
<div class="d-block">
    <h3>App Screen</h3>
     <FormDetails></FormDetails>
</div>
</template>
<script>
import FormDetails from "@/components/app/FormDetails.vue"
export default {
  name: 'AppScreen',
  components:{
      FormDetails
  },
}</script>