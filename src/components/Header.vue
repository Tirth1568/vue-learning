<template>
    <header>
        <nav class="navbar navbar-expand-xl fixed-top navbar-dark bg-dark py-xl-2">
            <div class="header-container container">
                <a class="navbar-brand" href="#">
                    <img src="https://www.mibinsure.com/Content/newDesigncss/images/Commercial Home Page/logo.webp" width="292" height="90"
                        class="img-fluid" />
                </a>
                <div class="d-flex  align-items-center">
                     <Button title="Log In"/>
                </div>
            </div>
        </nav>
       
    </header>
</template>

<script >
import Button from './Button.vue';
export default{
    components:{
        Button
    }
}
</script>

<style scoped> 

</style>