<template>
  <div id="wrapper">
    <!-- Header -->
    <MoHeader />
    <!-- Main -->
    <MoMain v-on:open="showModal" />
    <!-- Footer -->
    <MoFooter />
    <PopupView v-show="modalVisible" 
      v-on:close="modalVisible = false">
      <template v-slot:modal-text>{{ modalContext }}</template>
    </PopupView>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MoHeader from './components/MoHeader.vue'
import MoMain from './components/MoMain.vue'
import MoFooter from './components/MoFooter.vue'
import PopupView from './components/common/PopupView.vue';

export default {
  name: 'App',
  data() {
    return {
      modalVisible: false,
      modalContext: "",
    }
  },
  components: {
    // HelloWorld
    MoHeader,
    MoMain,
    MoFooter,
    PopupView
  },
  methods: {
    showModal(text) {
      console.log('showModal', text);

      this.modalVisible = !this.modalVisible;
      this.modalContext = text;
    }
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap");

// *{
//   box-sizing: border-box;
// }

#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  background-image: url('assets/images/bg.jpg');
  background-size: cover;

  a{
    text-decoration: none;
  }
  a.a_opacity {
    opacity: 0.4;
  }

  #wrapper {
    max-width: 68rem;
    margin: 0 auto;
  }
}
</style>
