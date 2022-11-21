<template>
  <div id="wrapper">
    <!-- Header -->
    <MoHeader />
    <!-- Main -->
    <MoMain v-on:open="showModal" />
    <!-- Footer -->
    <MoFooter />
    <PopupView v-show="modalVisible" 
      v-bind:imageUrl="modalImgUrl"
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
      modalImgUrl: "",
    }
  },
  components: {
    MoHeader,
    MoMain,
    MoFooter,
    PopupView
  },
  methods: {
    showModal(file, text) {
      // console.log('showModal', file, text);
      // const HOST = "http://localhost:3000";
      this.modalImgUrl = file;
      this.modalVisible = !this.modalVisible;
      this.modalContext = text;
    }
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap");

*{
  box-sizing: border-box;
}

@media(max-width:480px){
  #main .thumbnails {
    display: block;
  }
}

body.is-loading #wrapper {
  opacity: 0;
  -moz-filter: blur(1px);
  -webkit-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: blur(1px);
}

body.is-covered #wrapper {
  -moz-filter: blur(3px);
  -webkit-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
}

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
