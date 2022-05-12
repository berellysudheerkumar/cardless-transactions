
<template>
    <!-- First and Last Name Row -->
    <div class="">
      <div class="col-sm-6 mb-3 m-auto">
        <div class="form-group">
          <label for=""> First Name:</label><input class="form-control" placeholder="Enter name" type="text" v-model="v$.form.name.$model">
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 mb-3 m-auto">
        <div class="form-group">
          <label for="">Account Number:</label><input class="form-control" placeholder="Choose Account number" type="text" v-model="v$.form.accountNumber.$model">
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.accountNumber.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>
    </div>


    <!-- BSN Row -->
    <div class="form-group col-sm-6 mb-3 m-auto">
      <label for="">BSN Number</label><input class="form-control" placeholder="Enter BSN Number" type="email" v-model="v$.form.bsnNumber.$model">
      <div class="pre-icon os-icon os-icon-email-2-at2"></div>
      <!-- Error Message -->
        <div class="input-errors" v-for="(error, index) of v$.form.bsnNumber.$errors" :key="index">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
    </div>

    <div class="form-group col-sm-6 mb-3 m-auto">
      <label for="">Sender Mobile Number</label><input class="form-control" placeholder="Sender Mobile Number" type="email" v-model="v$.form.senderPhoneNumber.$model">
      <div class="pre-icon os-icon os-icon-email-2-at2"></div>
      <!-- Error Message -->
        <div class="input-errors" v-for="(error, index) of v$.form.senderPhoneNumber.$errors" :key="index">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
    </div>

    <div class="form-group col-sm-6 mb-3 m-auto">
      <label for="">Receiver Mobile Number</label><input class="form-control" placeholder="Receiver Mobile Number" type="email" v-model="v$.form.receiverPhoneNumber.$model">
      <div class="pre-icon os-icon os-icon-email-2-at2"></div>
      <!-- Error Message -->
        <div class="input-errors" v-for="(error, index) of v$.form.receiverPhoneNumber.$errors" :key="index">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
    </div>


   


    <!-- pin and Confirm pin Row -->
    <div>
      <div class="col-sm-6 mb-3 m-auto">
        <div class="form-group">
          <label for="">Set 4 digit pin:</label><input class="form-control" placeholder="set 4 digit pin" type="password" v-model="v$.form.pin.$model">
          <div class="pre-icon os-icon os-icon-fingerprint"></div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.pin.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 mb-3 m-auto">
        <div class="form-group">
          <label for="">Confirm 4 digit pin:</label><input @input="checkPassword()" class="form-control" placeholder="Confirm 4 digit pin" type="password" v-model="v$.form.confirmPin.$model">
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.confirmPin.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="buttons-w">
      <button class="m-auto btn btn-primary" :disabled="v$.form.$invalid" style="margin-left:120px">Create Request</button>
    </div>
</template> 
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'


export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
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
        senderPhoneNumber:'',
        receiverPhoneNumber:'',
        pin: '',
        confirmPin: '',
      }
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
            $validator: validName,
            $message: 'Invalid Name. '
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
        bsnNumber: { required, email },
        pin: { required, min: minLength(4), max: maxLength(4) },
        confirmPin: { required }
      },
    }
  },
}
</script>
<style scoped>
</style>