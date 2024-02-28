<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
        <a class="btn btn-header"  title="Login" data-target="#loginModal" data-toggle="modal" >
    <svg xmlns="http://www.w3.org/2000/svg" width="17.982" height="18.663"
         viewBox="0 0 17.982 18.663">
        <path id="Icon_open-account-login" data-name="Icon open-account-login"
              d="M8.366,0V2.523H18.459V15.14H8.366v2.523H20.982V0ZM11.69,5.047V7.57H4v2.523h7.69v2.523l5.047-3.785Z"
              transform="translate(-3.5 0.5)" fill="#fff" stroke="#ce9c1c" stroke-width="1" />
    </svg>
    {{title}}
</a>
    </button>
    <Modal/>
</template>

<script>
import Modal from './Modal.vue'
export default {
    props: {
        title: String,
        userData: Object
    },
    components:{
        Modal
    },
    methods: {
        login() {
            console.log("login clicked", this.userData);
        },
        onMounted() {
            // You should not directly modify props. 
            // Instead, use data or a separate variable.
            // This is a corrected approach:
            const newUserData = {
                title: "Login screen"
            };
            return newUserData; // Returning the new data
        }
    },
    mounted() {
       // Assign the returned value from onMounted to a local variable
       const updatedUserData = this.onMounted();
        // Emit an event to update the parent component's userData prop
        this.$emit('update:userData', updatedUserData)
    }
}
</script>


<style scoped>
.btn-header {
    background: #E8AF1D;
    color: #ffffff;
    box-shadow: 0px 0px 30px #ce9c1c87;
    border-radius: 5px;
    border: 2px solid #E8AF1D;
    letter-spacing: 0.1px;
    font-family: "Open Sans SemiBold",sans-serif;
    padding: 14px 28px;
    font-size: 20px;
}
.btn-header:hover {
    color: #ffffff;
    background: #100B00;
    border: 2px solid #E8AF1D;
    box-shadow: none;
}
.btn-header:hover svg path {
 stroke: transparent;
}
.header-fix .btn-header {
    padding: 8px 18px;
}
</style>