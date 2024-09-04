<template>
  <q-page class="row items-center justify-center">
    <p>Doctor Page</p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DoctorPage',
  setup () {
    function init () {
      console.log('DoctorPage')
    }
    init()
    return {
    }
  }
})

</script>
<style lang="scss" scoped>
</style>
