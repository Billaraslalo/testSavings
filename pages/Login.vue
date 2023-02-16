<template>
  <div class="h-screen grid place-items-center">
  <div class="rounded-md defaultSecondaryColor grid  justify-items-center grid-rows-6 w-96">
    <div class="text-4xl font-bold py-7">
      Signup
    </div>
    <input 
      type="text"
      class="block border w-2/3 h-14 p-3 rounded mb-4"
      name="fullname"
      placeholder="Full Name" />

  <input 
      type="text"
      class="block border border-grey-light w-2/3 h-14 p-3 rounded mb-4"
      name="email"
      placeholder="Email" />

  <input 
      type="password"
      class="block border border-grey-light w-2/3 h-14 p-3 rounded mb-4"
      name="password"
      placeholder="Password" />
  <input 
      type="password"
      class="block border border-grey-light w-2/3 h-14 p-3 rounded mb-4"
      name="confirm_password"
      placeholder="Confirm Password" />

  <button
      type="submit"
      class="w-2/3 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
  >Create Account</button>
    <!--<div class="h-60" id="g_id_onload"
      data-client_id="YOUR_GOOGLE_CLIENT_ID"
      data-login_uri="https://your.domain/your_login_endpoint"
      data-your_own_param_1_to_login="any_value"
      data-your_own_param_2_to_login="any_value">
    </div>-->
  </div>
</div>
  </template>
  
  <script setup>
  definePageMeta({
  layout: "login",
});
  </script>
  <style scoped>
  
  </style>