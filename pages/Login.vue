<template>
  <div class="h-screen grid place-items-center">
    <div class="grid grid-cols-2 rounded-md defaultSecondaryColor shadow-loginShadow shadow-fuchsia-500">
      <form novalidate @submit.prevent="submitForm" class="text-black grid justify-items-center grid-rows-6 w-96">
        <div class="text-white text-4xl font-bold py-7">
          Signup
        </div>
        <div class="block w-2/3 mb-4"><input
          v-model="formData.username" 
          type="text"
          class="inputField"
          :class="{
            'border-red-500 focus:border-red-500': v$.username.$error,
            'border-[#42d392] ': !v$.username.$invalid,
          }"
          name="username"
          placeholder="username"
          @change="v$.username.$touch"/>
          <span class="text-xs text-red-500" v-if="v$.username.$error">{{
            v$.username.$errors[0].$message
          }}</span></div>

      <div class="block w-2/3 mb-4"><input
          v-model="formData.email" 
          type="email"
          class="inputField"
          :class="{
            'border-red-500 focus:border-red-500': v$.email.$error,
            'border-[#42d392] ': !v$.email.$invalid,
          }"
          name="email"
          placeholder="Email"
          @change="v$.email.$touch"/>
          <span class="text-xs text-red-500" v-if="v$.email.$error">{{
            v$.email.$errors[0].$message
          }}</span></div>

      <div class="block w-2/3 mb-4"><input
          v-model="formData.password" 
          type="password"
          class="inputField"
          :class="{
            'border-red-500 focus:border-red-500': v$.password.$error,
            'border-[#42d392]': !v$.password.$invalid,
          }"
          name="password"
          placeholder="Password"
          @change="v$.password.$touch"/>
      <span class="text-xs text-red-500" v-if="v$.password.$error">{{
        v$.password.$errors[0].$message
      }}</span></div>
      <div class="block w-2/3 mb-4"><input
          v-model="formData.confirmPassword" 
          type="password"
          class="inputField"
          :class="{
            'border-red-500 focus:border-red-500': v$.confirmPassword.$error,
            'border-[#42d392]': !v$.confirmPassword.$invalid,
          }"
          name="confirmPassword"
          placeholder="Confirm Password"
          @change="v$.confirmPassword.$touch"/>
          <div
            class="bg-primary absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100"
          >
            <span
              class="bg-primary absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
            ></span>
            Tooltip Text
          </div>
          <span class="text-xs text-red-500" v-if="v$.confirmPassword.$error">{{
            v$.confirmPassword.$errors[0].$message
          }}</span></div>

      <button
          type="submit"
          class=" w-2/3 h-14 text-center py-3 rounded-xl text-white bg-emerald-500 hover:shadow-sm hover:shadow-green-400 hover:bg-green-400 focus:outline-none my-1"
      >Create Account</button>
        <!--<div class="h-60" id="g_id_onload"
          data-client_id="YOUR_GOOGLE_CLIENT_ID"
          data-login_uri="https://your.domain/your_login_endpoint"
          data-your_own_param_1_to_login="any_value"
          data-your_own_param_2_to_login="any_value">
        </div>-->
      </form>
      <div class="bg-no-repeat bg-cover bg-center bg-fixed" style="background-image: url('/images/dentro.jpg');">
        google-fb
    </div>
    </div>
    </div>
</template>
  
  <script setup>
  import { useVuelidate } from '@vuelidate/core';
  import { required, email, sameAs,minLength, maxLength, helpers } from '@vuelidate/validators';


  definePageMeta({
  layout: "login",
});

const formData = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: null,
  
});

const validations = {
  checkLowerCase: helpers.regex(/[a-z]/),
  checkUpperCase: helpers.regex(/[A-Z]/),
  checkNumbers: helpers.regex(/[0-9]/),
  checkSpecial: helpers.regex(/[!@#$%^&*_=+-]/),
  checkLength: helpers.regex(/^.{6,16}$/)
}

const rules = computed(() => {
  return {
    username: {
      required: helpers.withMessage('Username is required', required),
    },
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    password: {
      required: helpers.withMessage('The password field is required', required),
      lowerCase: helpers.withMessage('Must at least contain one lowercase letter', validations.checkLowerCase),
      upperCase: helpers.withMessage('Must at least contain one uppercase letter', validations.checkUpperCase),
      numbers: helpers.withMessage('must at least contain one number', validations.checkNumbers),
      special: helpers.withMessage('Must at least contain one special character', validations.checkSpecial),
      length: helpers.withMessage('Must be 6-16 characters', validations.checkLength)
    },
    confirmPassword: {
      required: helpers.withMessage('The password confirmation field is required', required),
      sameAs: helpers.withMessage("Passwords don't match", sameAs(formData.password)),
    },
  };
});

  const v$ = useVuelidate(rules, formData);

  const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    submit
  }
};
  </script>
  <style scoped>
  
  </style>