<template>
<div class="p-4">
<button v-if="!showButton" type="button" class="btn btn-primary btn-lg button-display" @click="initiateTransaction">Initiate Cashless Transaction</button>
   <div v-if="showButton && !state" class="d-block">
    <div class="page">
  <label class="field field_v2">
    <input class="field__input" placeholder="123456789" v-model="phoneNumber">
    <span class="field__label-wrap">
      <span class="field__label">Enter Mobile Number</span>
    </span>
  </label>    
</div>
<div class="page">
  <label class="field field_v2">
    <input type= "password" class="field__input" placeholder="****" v-model="secretPin">
    <span class="field__label-wrap">
      <span class="field__label">Secret Pin</span>
    </span>
  </label>    
</div>
      <div class="col-sm-6 mb-3 m-auto">
         <button type="button" class="flex btn btn-primary btn-lg m-auto" @click="ValidateMobileNumber">Generate OTP</button>
      </div>
</div>
   <div v-if="state && stateOTP === ''" class="d-block">
    <h3>Please validate your OTP to withdraw ₹{{state.amount}}</h3>
   <div class="page">
  <label class="field field_v2">
    <input type= "text" class="field__input" placeholder="1234" v-model="oneTimePassword">
    <span class="field__label-wrap">
      <span class="field__label">Enter One Time Password</span>
    </span>
  </label>    
</div>
      <div class="col-sm-6 mb-3 m-auto">
         <button type="button" class="flex btn btn-primary btn-lg m-auto" @click="ValidateOTPValue">Validate</button>
      </div>
</div>
 <!-- <div v-if="stateOTP" class="d-block">
 <h3> you can withdraw total amount of {{state.amount}}</h3>
  <div class="page">
  <label class="field field_v2">
    <input type= "text" class="field__input" placeholder="1234" v-model="amount">
    <span class="field__label-wrap">
      <span class="field__label">Enter amount</span>
    </span>
  </label>    
</div>
      <div class="col-sm-6 mb-3 m-auto">
         <button type="button" class="flex btn btn-primary btn-lg m-auto" @click="withdraw">Withdraw</button>
      </div>
</div> -->
<div v-if="loader">
<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
<div v-if="!loader && stateOTP.status === 'valid'">
<h3>your transaction is successfull, please collect your money</h3>
</div>
<div v-if="!loader && stateOTP.status === 'invalid'">
<h3>your transaction is successfull, please collect your money</h3>
</div>
</div>
</template> 
<script setup>
import { ref,  } from 'vue'
let showButton = ref(false);
let ValidateMobile = ref(false);
// let ValidateOTP = ref(false);
let loader = ref(false);
let secretPin = ref('');
let phoneNumber = ref('');
let state = ref('');
let stateOTP = ref('');
let oneTimePassword = ref('');
// let showTransactionStatus = ref(false);

function initiateTransaction(){
  showButton.value = !showButton.value;
} 

function ValidateMobileNumber(){
ValidateMobile.value = !ValidateMobile.value; 
 const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secretPin: secretPin.value, phoneNumber: phoneNumber.value })
  };
  fetch("http://localhost:3000/validateSecretPin", requestOptions)
    .then(response => response.json()).then(data => {
      state.value = data;
    })
}

function ValidateOTPValue(){
 const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ otp: oneTimePassword.value })
  };
  fetch("http://localhost:3000/validate", requestOptions)
    .then(response => response.json())
            .then(data => {
              stateOTP.value = data;
              loader.value = !loader.value;
   setTimeout(function(){
     loader.value = !loader.value;
   }, 1000);
            });
}

</script>
<style scoped>
.button-display{
    float: right;
}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgb(12, 228, 102);
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>