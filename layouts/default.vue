<template>
  <div class="fixed w-full h-full defaultPrimaryColor">

  <navbar />
  <sidebar-small />
  <sidebar />
    <div class="pt-12 lg:pt-16"
        :class="store.sidebarActive ? 'lg:pl-64' : 'lg:pl-24'">
  <slot />
    </div>
</div>
</template>

<script setup>
import { useMainStore } from '../stores/MainStore'

const store = useMainStore()
</script>

<style scoped>

</style>