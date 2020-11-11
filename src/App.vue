<template>
  <div id="app">
    <div id="nav p-0">
      <Header />
        <!-- <kinesis-container id="container">
          <kinesis-element
            :src="'../src/assets/image/bee.png'"
            :strength="10"
            type="depth">
          </kinesis-element>
        </kinesis-container> -->
      <Navigate /> 
      <Greeting />
      <AboutMain />
      <Worklist />
      <Contact />
    </div>
    <!-- <router-view /> -->
    <Footer />
  </div>
</template>
<script>
import 'normalize.css'
import Header from '@/components/Header.vue'
import Navigate from '@/components/Navigate.vue'
import AboutMain from '@/components/AboutMain.vue'
import Greeting from '@/components/Greeting.vue'
import Worklist from '@/components/Worklist.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigate,
    AboutMain,
    Greeting,
    Worklist,
    Contact,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  scroll-behavior: smooth;
}

#nav {
  padding: 30px;
}
</style>
