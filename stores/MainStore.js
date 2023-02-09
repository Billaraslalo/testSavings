import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state:()=>({
    sidebarActive: true
  }),
  actions: {
    sidebarToggle() {
      this.sidebarActive = !this.sidebarActive;
    },
  },
});