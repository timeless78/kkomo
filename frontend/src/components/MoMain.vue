<template>
  <div id="main">
    <!-- Thumbnails -->
    <section class="thumbnails">
      <div v-for="(group, key) in thumbImgs" :key="key">
        <div v-for="(thumb, id) in group.data" :key="id">
          <a href="#" v-on:click="openModal(thumb.full, thumb.descript)">
            <img :src="thumb.pathUrl" alt="image" />
            <h3>{{thumb.descript}}</h3>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import searchFileList from './common/searchFilelist.js';
// import tempJson from '@/assets/thumbnails.json'

export default {
  name: 'MoMain',
  data() {
    return {
      thumbImgs: []
    }
  },
  created: function() {
    const HOST = "";
    this.$axios.get(HOST + '/thumbnails')
      .then((response) => {
        this.thumbImgs = response.data;

        // this.thumbImgs.forEach(itor => {
        //   console.log(itor);

        //   const arrPath = itor.data;
        //   arrPath.forEach(a => {
        //     console.log(a);
        //   })
        // });
      })

    // sample: new URL(`@${thumb.full.replace('/static', '/assets')}`, import.meta.url);
    // for(let i = 1; i < 8; ++i) {
    //   let newObj = { full: '', pathUrl: '', descript: 'Lorem ipsum'};
    //   newObj.full = `@/assets/images/fulls/0${i}.jpg`;
    //   newObj.pathUrl = `@/assets/images/thumbs/0${i}.jpg`;
    //   this.thumbImgs.push(newObj);
    //   console.log(newObj);
    // }
  },
  methods: {
    openModal: function (file, description) {
      // console.log('click', file);
      this.$emit('open', file, description);
    }
  },
}
</script>
<style lang="scss">
.thumbnails {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: row;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  position: relative;
  margin: 0 0 2em -2em;

  div {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    // width: calc(100% / 3);
    padding-left: 2em;

    :last-child {
      margin-bottom: 0;
    }
  }

  a {
    -moz-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border-bottom: none;
    display: block;
    width: 100%;
    margin: 0 0 2em 0;
    text-align: center;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
    background-color: rgba(255, 255, 255, 0.075);
    cursor: pointer;
    outline: 0;
    overflow: hidden;


    img {
      display: block;
      width: 100%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }


    h3 {
      margin: 1em;
    }


    :hover {
      background-color: rgba(255, 255, 255, 0.25);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25), 0 0 0.5em 0 #FF6382;
    }
  }
}

@media screen and (max-width: 1280px) {
  .thumbnails {
    margin: 0 0 2em -1.5em;
  }
  .thumbnails a {
    margin: 0 0 1.5em 0;
  }
  .thumbnails > div {
    padding-left: 1.5em;
  }
}

@media screen and (max-width: 980px) {
  .thumbnails h3 {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 480px) {
  .thumbnails {
    display: block;
  }
  .thumbnails a {
    margin: 0 0 2em 0 !important;
  }
  .thumbnails > div {
    display: block;
    width: 100%;
  }
  .thumbnails > div:last-child > :last-child {
    margin-bottom: 0 !important;
  }
  .thumbnails h3 {
    font-size: 1em;
  }
}
</style>