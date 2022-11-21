<template>
  <div id="main">
    <!-- Thumbnails -->
    <section class="thumbnails">
      <div v-for="(thumb, key) in thumbImgs" :key="key">
        <a href="#" v-on:click="openModal(thumb.full)">
          <img :src="thumb.pathUrl" alt="image" />
          <h3>{{thumb.descript}}</h3>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
// import searchFileList from './common/searchFilelist.js';

export default {
  name: 'MoMain',
  data() {
    return {
      thumbImgs: []
    }
  },
  created: function() {
    // console.log("this.$http.get('/thumbnails')");
    const HOST = "";

    // axios.get('/thumbnails')
    this.$axios.get(HOST + '/thumbnails')
      .then((response) => {
        // console.log(response.data);
        this.thumbImgs = response.data;

        // this.thumbImgs.forEach(itor => {
        //   console.log(itor.pathUrl);
        // });
      })

    // for(let i = 1; i < 8; ++i) {
    //   let newObj = { full: '', pathUrl: '', descript: 'Lorem ipsum'};
    //   newObj.full = `@/assets/images/fulls/0${i}.jpg`;
    //   newObj.pathUrl = require(`@/assets/images/thumbs/0${i}.jpg`);
    //   // console.log(newObj);

    //   this.thumbImgs.push(newObj);
    // }
  },
  methods: {
    openModal: function (file) {
      console.log('click', file);
      this.$emit('open', file);
    },
    getFullUrl: function (file) {
      return `${this.imgPath}/fulls/${file}`;
    }
  },
}
</script>
<style lang="scss">
  
</style>