<template>
<div class="p-4">
<button v-if="!showButton" type="button" class="btn btn-primary btn-lg button-display" @click="initiateTransaction">Initiate Cashless Transaction</button>
   <div v-if="showButton && !ValidateMobile" class="d-block">
    <div class="page">
  <label class="field field_v2">
    <input class="field__input" placeholder="123456789">
    <span class="field__label-wrap">
      <span class="field__label">Enter Mobile Number</span>
    </span>
  </label>    
</div>
      <div class="col-sm-6 mb-3 m-auto">
         <button type="button" class="flex btn btn-primary btn-lg m-auto" @click="ValidateMobileNumber">Generate OTP</button>
      </div>
</div>
   <div v-if="ValidateMobile && !ValidateOTP" class="d-block">
      <div class="col-sm-6 mb-3 m-auto">
        <div class="form-group">
          <label for="">Enter OTP</label><input class="form-control" type="text">
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- Error Message -->
          <div class="input-errors">
            <div class="error-msg"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-3 m-auto">
         <button type="button" class="flex btn btn-primary btn-lg m-auto" @click="ValidateOTPValue">Validate</button>
      </div>
</div>
 <div v-if="ValidateOTP" class="d-block">
      <div class="col-sm-6 mb-3 m-auto">
        <div class="form-group">
          <label for="">Enter amount to be withdrawn</label><input class="form-control" type="text">
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- Error Message -->
          <div class="input-errors">
            <div class="error-msg"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-3 m-auto">
         <button type="button" class="flex btn btn-primary btn-lg m-auto" >Enter</button>
      </div>
</div>
</div>
</template> 
<script setup>
import { ref } from 'vue'
let showButton = ref(false);
let ValidateMobile = ref(false);
let ValidateOTP = ref(false);
function initiateTransaction(){
  showButton.value = !showButton.value;
} 
function ValidateMobileNumber(){
ValidateMobile.value = !ValidateMobile.value;
}

function ValidateOTPValue(){
ValidateOTP.value = !ValidateOTP.value;
}

</script>
<style scoped>
.button-display{
    float: right;
}

</style>