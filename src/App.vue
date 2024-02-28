<script >
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components:{
    Header,
    Footer
  },
}
</script>

<template>
 <Header/>
  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>

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
