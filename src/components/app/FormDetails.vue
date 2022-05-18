<template>
<div class="app-screen">
  <!-- First and Last Name Row -->
  <div class="">
    <div class="col-sm-6 mb-3 m-auto">
      <div class="page">
      <label class="field field_v2">
        <input class="field__input" placeholder="Jane Doe" type="text" v-model="v$.form.name.$model">
        <span class="field__label-wrap">
          <span class="field__label">First Name:</span>
        </span>
      </label>    
      </div>
      
      <!-- Error Message -->
      <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    <div class="col-sm-6 mb-3 m-auto">
      <div class="page">
        <label class="field field_v2">
          <input class="field__input" placeholder="NL99ABNA123456789" type="text" v-model="v$.form.accountNumber.$model">
          <span class="field__label-wrap">
            <span class="field__label">Account Number</span>
          </span>
        </label>    
      </div>
    </div>
    <!-- Error Message -->
    <div class="input-errors" v-for="(error, index) of v$.form.accountNumber.$errors" :key="index">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>

    <!-- BSN Row -->
    <div class="col-sm-6 m-auto">
      <div class="page">
      <label class="field field_v2">
        <input class="field__input" placeholder="Enter BSN Number" type="text" v-model="v$.form.bsnNumber.$model">
        <span class="field__label-wrap">
          <span class="field__label">BSN Number:</span>
        </span>
      </label>    
      </div>
      
      <!-- Error Message -->
      <div class="input-errors" v-for="(error, index) of v$.form.bsnNumber.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    <!-- Amount -->
    <div class="col-sm-6 m-auto">
      <div class="page">
      <label class="field field_v2">
        <input class="field__input" placeholder="Enter Amount" type="text" 
        v-model="v$.form.amount.$model">
        <span class="field__label-wrap">
          <span class="field__label">Enter Amount:</span>
        </span>
      </label>    
      </div>
      
      <!-- Error Message -->
      <div class="input-errors" v-for="(error, index) of v$.form.amount.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <div class="col-sm-6 m-auto">
      <div class="page">
      <label class="field field_v2">
        <input class="field__input" placeholder="Sender Mobile Number" type="text" 
        v-model="v$.form.senderPhoneNumber.$model">
        <span class="field__label-wrap">
          <span class="field__label">Sender Mobile Number:</span>
        </span>
      </label>    
      </div>
      
      <!-- Error Message -->
      <div class="input-errors" v-for="(error, index) of v$.form.senderPhoneNumber.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <div class="col-sm-6 m-auto">
      <div class="page">
      <label class="field field_v2">
        <input class="field__input" placeholder="Receiver Mobile Number" type="text" 
        v-model="v$.form.receiverPhoneNumber.$model">
        <span class="field__label-wrap">
          <span class="field__label">Receiver Mobile Number:</span>
        </span>
      </label>    
      </div>
      
      <!-- Error Message -->
      <div class="input-errors" v-for="(error, index) of v$.form.receiverPhoneNumber.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <!-- pin and Confirm pin Row -->
    <div>
      <div class="col-sm-6 m-auto">
        <div class="page">
        <label class="field field_v2">
          <input class="field__input" placeholder="Set Secret Code" type="password" 
          v-model="v$.form.pin.$model">
          <span class="field__label-wrap">
            <span class="field__label">Set Secret Code:</span>
          </span>
        </label>    
        </div>
        
        <!-- Error Message -->
        <div class="input-errors" v-for="(error, index) of v$.form.pin.$errors" :key="index">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="col-sm-6 m-auto">
        <div class="page">
        <label class="field field_v2">
          <input class="field__input" placeholder="Confirm secret code" type="password" 
          v-model="v$.form.confirmPin.$model" @input="checkPassword()">
          <span class="field__label-wrap">
            <span class="field__label">Confirm Secret code:</span>
          </span>
        </label>    
        </div>
        
        <!-- Error Message -->
        <div class="input-errors" v-for="(error, index) of v$.form.confirmPin.$errors" :key="index">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

    </div>

    <!-- Submit Button -->
    <div class="buttons-w">
      <button class="m-auto btn btn-primary" :disabled="v$.form.$invalid" 
      style="margin-left:120px" :style="{'background-color': v$.form.$invalid ? ' #cccccc': ''}"
      @click="sendData">Create Request</button>
    </div>
    </div>
</template> 
<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators';

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)){
    return true;
  }
  return false;
}
export function validAccNumber(name) {
  let validNamePattern = new RegExp("^[a-zA-Z0-9_]*$");
  if (validNamePattern.test(name)){
    return true;
  }
  return false;
}
export function validPhoneNumber(senderPhoneNumber) {
  let validNamePattern = new RegExp("^[789]\\d{9}$");
  if (validNamePattern.test(senderPhoneNumber)){
    return true;
  }
  return false;
}

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        name: '',
        accountNumber: '',
        bsnNumber: '',
        amount: null,
        senderPhoneNumber:'',
        receiverPhoneNumber:'',
        pin: '',
        confirmPin: '',
      }
    }
  },

  methods:{
    sendData(){
      const otp1 = Math.floor(Math.random() * 90 + 10);
      const otp2 = Math.floor(Math.random() * 90 + 10);
      const payLoad={
        name: this.form.name,
        accountNumber: this.form.accountNumber,
        bsnNumber: this.form.bsnNumber,
        amount: this.form.amount,
        senderPhoneNumber: this.form.senderPhoneNumber,
        receiverPhoneNumber: this.form.receiverPhoneNumber,
        pin: this.form.pin,
        otp: "" + otp1 + otp2
      }
      const requestOptions = {  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payLoad)
      };
      fetch("http://localhost:3000/postTranscation", requestOptions)
        .then(response => response.json());
        console.log("reached")
        this.$router.push('/getDetails')
    },
    checkPassword() {

    }
  },

  validations() {
    return {
      form: {
        name: { 
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name.'
          } 
        },
        accountNumber: { 
          required, name_validation: {
            $validator: validAccNumber,
            $message: 'Invalid Number. '
          } 
        },
        bsnNumber: { 
          required, name_validation: {
            $validator: validAccNumber,
            $message: 'Invalid Number. '
          } 
        },
        amount: { 
          required, max: maxLength(5), name_validation: {
            $validator: validAccNumber,
            $message: 'Invalid amount. '
          } 
        },
        senderPhoneNumber:{
          required , senderPhoneNumber_validation:{
             $validator: validPhoneNumber,
            $message: 'Invalid Phone Number. '
          }
        },
        receiverPhoneNumber:{
          required , receiverPhoneNumber_validation:{
             $validator: validPhoneNumber,
            $message: 'Invalid Phone Number. '
          }
        },
        pin: { required, min: minLength(4), max: maxLength(4) },
        confirmPin: { required }
      },
    }
  },
}
</script>
<style scoped>
</style>