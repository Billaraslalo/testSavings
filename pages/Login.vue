<template>
  <div class="h-screen grid place-items-center">
    <div class="grid grid-cols-2 rounded-md defaultSecondaryColor shadow-loginShadow shadow-fuchsia-500">
      <div class="text-black grid justify-items-center grid-rows-6 w-96">
        <div class="text-white text-4xl font-bold py-7">
          Signup
        </div>
        <input 
          type="text"
          class="inputField"
          name="fullname"
          placeholder="Full Name" />

      <input 
          type="email"
          class="inputField"
          name="email"
          placeholder="Email" />

      <input 
          type="password"
          class="inputField"
          name="password"
          placeholder="Password" />
      <input 
          type="password"
          class="inputField"
          name="confirm_password"
          placeholder="Confirm Password" />

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
      </div> 
      <div class="bg-no-repeat bg-cover bg-center bg-fixed" style="background-image: url('/images/dentro.jpg');">
        google-fb
      </div>
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