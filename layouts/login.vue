<template>
  <div class="fixed w-full h-full defaultPrimaryColor">
    <navbar :current-layout="$layout" />
      <div class="pt-12 lg:pt-16">
        <div class="h-screen overflow-auto">
          <slot />
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>