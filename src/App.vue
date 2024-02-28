<template>

  <Loader v-if="loaderService.isLoading()" />
 <Header/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>
<script >
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loader from './components/Loader.vue';
import loaderService from '@/services/loaderService'; // Import your loader service
export default {
  components:{
    Header,
    Footer,
    Loader
  },
  data() {
    return {
      isLoading: false // Use a boolean flag to control when the loader is displayed
    };
  }
  ,computed: {
    loaderService() {
      console.log(loaderService.isLoading())
      return loaderService; // Access loader service
    }
  }
}
</script>


<style scoped>
/* Import Bootstrap CSS */
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
