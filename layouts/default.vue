<template>
<div class="bg-white dark:bg-slate-900">
  <navbar />
  <sidebar />
<slot />
</div>
</template>

<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<style scoped>

</style>