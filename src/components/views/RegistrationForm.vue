<template>
    <div class="container mt-5">
      <h2>Registration Form</h2>
      <form ref="form" class="needs-validation" @submit.prevent="submitForm" novalidate>
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name:</label>
          <input type="text" class="form-control" id="firstName" v-model="formData.firstName" required @input="updateFormValidity">
          <div class="invalid-feedback">Please enter your first name.</div>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name:</label>
          <input type="text" class="form-control" id="lastName" v-model="formData.lastName" required>
          <div class="invalid-feedback">Please enter your last name.</div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
          <div class="invalid-feedback">Please enter a valid email address.</div>
        </div>
        <div class="mb-3">
          <label for="contactNumber" class="form-label">Contact Number:</label>
          <input type="telephone" class="form-control" id="contactNumber" v-model="formData.contactNumber" required>
          <div class="invalid-feedback">Please enter your contact number.</div>
        </div>
        <div class="form-check mb-3">
          <input type="checkbox" class="form-check-input" id="agree" v-model="formData.agree" required>
          <label class="form-check-label" for="agree">I agree to the terms and conditions</label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
       
        <button type="submit" class="btn btn-primary" :disabled="!isFormValid">Register</button>
      </form>
    </div>
    {{ isFormValid }}
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          firstName: '',
          lastName: '',
          email: '',
          contactNumber: '',
          agree: false
        }
      };
    },
    mounted() {
    console.log('Refs:', this.$refs?.form.checkValidity());
  },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted');
        console.log('Form Data:', this.formData);
      },
      updateFormValidity() {
        console.log('Refs:', this.$refs?.form.checkValidity());
    }
    },
    computed: {
    isFormValid() {
        return this.$refs.form && this.$refs.form.checkValidity();  // Check if the form is valid
    }
  },
  };
  </script>
  
  <style scoped>
  .mt-5 {
    margin-top: 10rem !important;
}
.form-control:valid {
  border-color: #28a745; /* Green */
}

/* Style for invalid form fields */
.form-control:invalid {
  border-color: #dc3545; /* Red */
}
  </style>
  