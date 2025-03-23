import { defineStore } from 'pinia'
import { ref } from 'vue'

export const navbarShadow = defineStore('navbarShadow', () => {
  const navbarShadow = ref(false)
  function setNavbarShadow(shadow: boolean) {
    navbarShadow.value = shadow
  }
  return { navbarShadow, setNavbarShadow }
})
