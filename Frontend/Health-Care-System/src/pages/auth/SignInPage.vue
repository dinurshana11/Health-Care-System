<template>
  <q-layout view="hHh lpR fFf">
    <q-page class="row">
      <div class="col-auto gt-sm row img-container">
        <q-img class="q-my-auto login-img" src="/images/ss_tote_g1.jpg" alt="Login image" />
      </div>
      <div class="col q-my-auto q-px-xl">
        <!-- Form Column -->
            <div class="q-py-md">
              <q-img class="logo" src="/images/papello_logo_b_small.png" alt="Logo" />
              <div class="login-title text-left title">
                Login
              </div>
              <br />
              <div class="text-subtitle text-weight-regular">
                Log in to create and sell customised products, place and view orders, catch up on the latest updates and more.
              </div>
              <br />
              <!-- Email Input Field -->
              <div class="q-mb-md">
                <p class="q-mb-none row">
                  <span class="input-topic">Email</span>
                </p>
                <q-input class="login-input" dense placeholder="Email Address" v-model="email" />
              </div>

              <!-- Password Input Field  -->
              <div class="q-mb-md q-mt-sm">
                <p class="q-mb-none row">
                  <span class="input-topic">Password</span>
                </p>
                <q-input class="login-input" dense placeholder="Password" v-model="password" :type="showPassword ? 'text' : 'password'">
                  <template v-slot:append>
                    <q-icon :name="showPassword ? 'visibility' : 'visibility_off'" @click="togglePasswordVisibility" cursor-pointer />
                  </template>
                </q-input>
              </div>
              <!-- Lost Password and Sign Up Links -->
              <div class="forgot-password">
                <router-link class="no-underline" to="/lostpassword">Forgot password?</router-link>
              </div>
              <!-- Login Button -->
              <div class="q-pt-md q-pb-sm">
                <q-btn class="login-btn" no-caps outlined color="accent" label="Login" />
              </div>
              <div class="signup-text">
                Don’t have an account?
                <router-link to="/auth/signup" class="sign-up">Sign Up</router-link>
              </div>
            </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { useRouter } from 'vue-router'
// import { useUtil } from 'src/utils/util'
// import { useQuasar } from 'quasar'
// import axios from 'axios'

export default defineComponent({
  setup () {
    // const router = useRouter()
    // const util = useUtil()
    // const $q = useQuasar()

    const email = ref('')
    const password = ref('')
    const showPassword = ref(false)
    const rememberMe = ref(false)
    const showSuccessAlert = ref(false)

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    // const login = async () => {
    //   try {
    //     const response = await axios.post('/api/login', {
    //       email: email.value,
    //       password: password.value
    //     })
    //     console.log(response)
    //     // Handle successful login
    //     if (response.data.success) {
    //       showSuccessAlert.value = true

    //       $q.localStorage.setItem('access_token', response.data.token)
    //       $q.localStorage.setItem('permission', response.data.permissions)
    //       util.notifySuccess('Login successful')
    //       router.push('/')
    //     } else {
    //       $q.localStorage.clear()
    //       util.notifySuccess('Login failed. Please check your credentials.')
    //     }
    //   } catch (error) {
    //     $q.localStorage.clear()
    //     util.notifySuccess('An error occurred during login.')
    //   }
    // }

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value
    }

    return {
      email,
      password,
      showPassword,
      rememberMe,
      showSuccessAlert,
      isValidEmail,
      // login,
      togglePasswordVisibility
    }
  }
})
</script>

<style scoped>
.img-container{
  width: 550px;
  padding: 50px;
}
.login-img{
  border-radius: 10px;
}
.logo{
  width: 100px;
}
.login-title {
  font-family: Poppins, Helvetica, Arial, Lucida, sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-top: 35px;
}
.input-topic{
  font-size: 12px;
  font-weight: 400;
}
.text-subtitle{
  color: #6A6A6A;
  font-size: 14px;
  max-width: 432px;
}
.no-underline {
  text-decoration: none;
  color: #887CFD;
  font-size: 12px;
}
.login-btn{
  font-size: 14px;
  width: 150px;
}
.login-input{
  border: 1px solid #1E2525;
  padding: 0 10px;
  max-width: 489px;
}
.signup-text{
  color: #707070;
  margin: 10px 0;
  font-size: 13px;
}
.sign-up {
  color: #7b61ff !important;
  text-decoration: none;
}
</style>

