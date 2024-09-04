<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="pp-logo">
            <a href="/" class="q-py-none q-px-md q-ma-none">
              <img
                alt="Papello logo"
                src="../assets/quasar-logo-vertical.svg"
                class="full-width q-my-auto"
              >
            </a>
          </div>
        </q-toolbar-title>
        <div class="col-auto">
          <q-btn color="accent" icon-right="add" label="Create order" to="/create-order" no-caps class="text-btn header-btn mr-15"/>
        </div>
        <div class="col-auto">
          <q-btn outline icon="shopping_bag" to="/basket" class="header-btn mr-15" style="color: #EAEAEA"/>
        </div>
        <div class="col-auto">
          <q-btn outline icon="notifications" class="header-btn mr-15" style="color: #EAEAEA">
            <q-badge floating class="header-notification-badge">2</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item
          clickable v-ripple
          class="q-ma-none q-pa-none q-mx-md"
          @click="navigateTo('/')"
        >
          <q-item-section avatar class="q-ml-sm q-mr-none q-my-none q-pa-none col-auto">
            <q-avatar class="black icons" text-color="black" >
              <img src="../assets/icons/Dashboard Icons/Dashboard.svg" alt="Dashboard Icon">
            </q-avatar>
          </q-item-section>

          <q-item-section class="side-bar-text">Dashboard</q-item-section>
        </q-item>
        <q-item
          clickable v-ripple
          class="q-ma-none q-pa-none q-mx-md"
          @click="navigateTo('/payment')"
        >
          <q-item-section avatar class="q-ml-sm q-mr-none q-my-none q-pa-none col-auto">
            <q-avatar class="black icons" text-color="black" >
              <img src="../assets/icons/Dashboard Icons/Dashboard.svg" alt="Dashboard Icon">
            </q-avatar>
          </q-item-section>

          <q-item-section class="side-bar-text">Payment</q-item-section>
        </q-item>

        <q-item
          clickable v-ripple
          class="q-ma-none q-pa-none q-mx-md"
          @click="navigateTo('/doctor')"
        >
          <q-item-section avatar class="q-ml-sm q-mr-none q-my-none q-pa-none col-auto">
            <q-avatar class="black icons" text-color="black" >
              <img src="../assets/icons/Dashboard Icons/Dashboard.svg" alt="Dashboard Icon">
            </q-avatar>
          </q-item-section>

          <q-item-section class="side-bar-text">Doctor</q-item-section>
        </q-item>
        <!-- Logout -->
        <q-item class="userSection q-ma-none q-pa-none"  clickable v-ripple @click="logOut">
          <q-item-section avatar class="q-ml-lg q-mr-none q-my-none q-pa-none col-auto">
            <q-avatar class="black icons" text-color="black">
              <img src="../assets/icons/Dashboard Icons/Log Out.svg" alt="Log out Icon">
            </q-avatar>
          </q-item-section>
          <q-item-section class="side-bar-text">Log Out</q-item-section>
        </q-item>
        <q-item
          clickable v-ripple
          class="q-ma-none q-pa-none q-mx-md"
          @click="navigateTo('/appointment')"
        >
          <q-item-section avatar class="q-ml-sm q-mr-none q-my-none q-pa-none col-auto">
            <q-avatar class="black icons" text-color="black" >
              <img src="../assets/icons/Dashboard Icons/Dashboard.svg" alt="Dashboard Icon">
            </q-avatar>
          </q-item-section>

          <q-item-section class="side-bar-text">Appointment</q-item-section>
        </q-item>
        <q-item
          clickable v-ripple
          class="q-ma-none q-pa-none q-mx-md"
          @click="navigateTo('/paitent')"
        >
          <q-item-section avatar class="q-ml-sm q-mr-none q-my-none q-pa-none col-auto">
            <q-avatar class="black icons" text-color="black" >
              <img src="../assets/icons/Dashboard Icons/Dashboard.svg" alt="Dashboard Icon">
            </q-avatar>
          </q-item-section>

          <q-item-section class="side-bar-text">Paitent</q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const route = useRoute()
    const router = useRouter()

    const routePath = ref<string[]>(route.path.split('/'))

    function logOut () {
      router.push('/auth/login')
    }

    function navigateTo(path: string) {
      router.push(path);
    }

    watchEffect(() => {
      routePath.value = route.path.split('/')
    })

    return {
      leftDrawerOpen: ref(false),
      routePath,
      logOut,
      navigateTo
    }
  }
})

</script>
<style lang="scss" scoped>
  .pp-logo {
    width: 109px;
    height: 45px;
  }
  .page-container {
    padding-left: 250px !important;
  }
  .left-drawer {
    max-width: 250px !important;
  }
  .custom-header {
    border-bottom: 1px solid #ccc;
    height: 76px;
    padding: 12px;
  }
  .q-item {
    min-height: 35px !important;
  }
  .userSection {
  bottom: 0%;
  position: fixed;
  width: 250px;
  border-right: 3px solid #ffffff;
  background: #d3d3d3;
  max-height: 24px;
}
</style>
