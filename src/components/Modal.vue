<template>
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    style="display: none;">

    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{ login }}
          <form action="" @submit.prevent="postLogin">
            <div class="form-group">
              <label class="form-lable" for="username">UserName</label>
              <input type="text" name="username" id="userid" v-model="login.username" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-lable" for="password">password</label>
              <input type="password" name="password" id="password" v-model="login.password" class="form-input">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="postLogin">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '@/axios';
import { defineComponent } from 'vue';
export default defineComponent( {
  data() {
    return {
      login: {
        email: '', // Initialize with empty string
        password: ''  // Initialize with empty string
      }
    };
  },
  mounted() {
    // Clear login data when the component is mounted
    this.clearLoginData();
    this.getToken()
  },
  methods: {
    clearLoginData() {
      // Reset login data to initial values
      this.login.email = '';
      this.login.password = '';
    },
    async getToken(){
      try {
        const token = localStorage.getItem('oauth');
        if (!token) {
        const res = await axios.post('http://localhost:59767/api/RequestValidation/Authenticate');

        this.setHeaderAfterLogin(res);
        }
      }
      catch (error) {
        console.log(error)
      }
    },
    setHeaderAfterLogin(xhr) {
      const authorization = xhr.headers['authorization'];
      if (authorization) {
        localStorage.setItem("oauth", authorization); // Store authorization token in localStorage
      }
    },
    async postLogin() {
      try {
        // Make a POST request to the API endpoint
        const response = await axios.post('http://localhost:59767/User/LoginForm', this.login);

        // Handle the response as needed
        console.log('Login successful:', response.data);

        // Clear login data after successful login
        this.clearLoginData();
      } catch (error) {
        // Handle errors
        console.error('Error logging in:', error);
      }
    },
  }
});
</script>
<style >
.modal-backdrop {
  opacity: 0.5;
  /* Adjust opacity as needed */
  --bs-backdrop-zindex: -1 !important
}

/* Styling for form elements */
.modal-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}</style>