<template>
  <transition name="modal" appear>
    <div class="modal modal__dim" @click.self="doclose">
      <div class="modal__content" style="background-image: url('')">
        <img class="modal__img" :src="imageUrl" alt="image" />
        <p class="modal__text">
          <slot name="modal-text">(여기에 모달 내용이 들어가요)</slot>
        </p>
        <button class="modal__close" @click="doclose">OK</button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ["imageUrl"],
    data() {
      return {
  
      }
    },
    watch: {
      imageUrl: function() {
        console.log('watch : ', this.imageUrl);
        // this.$axios.get(HOST + URL)
        // .then((response) => {
        //   this.thumbImgs = response.data;
        // })
      }
    },
    computed: {
      cssImgUrl() {
        return {
          'bgUrl': this.imageUrl,
        }
      }
    },
    methods: {
      doclose: function() {
        console.log('POPUP-VIEW > doclose');
        this.$emit("close");
      },
    },
  };
</script>

<style lang="scss">
  .modal {
    &__dim {
      @include center();
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
    &__content {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 70%;
      height: 70%;
      transform: translate(-50%, -50%);
      // min-width: 34rem;
      margin: 0px auto;
      padding: 2rem;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 10px 30px -4px rgba(10, 10, 10, 0.2);
      transition: all 0.3s ease;
    }
    &__img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 5px;
      object-fit: scale-down;
      object-position: 50% 50%;
    }
    &__text {
      text-align: center;
      font-size: 1.4rem;
      color: #4a4a4a;
      &:before {
        display: block;
        margin: 0 auto;
        // width: 5rem;
        // height: 5rem;
        // border: 2px solid red;
        // background-color: #f0f0f0;
        // border-radius: 50%;
        text-align: center;
        line-height: 5rem;
        font-size: 2.2rem;
        font-weight: bold;
        // content: "Σ(゜ロ゜;)";
        // content: "Oops !";
      }
    }
    &__close {
      text-align: center;
      margin: 2.5rem auto 0;
      padding: 0.4rem 1rem;
      border: 1px solid #b1b1b1;
      border-radius: 0.2rem;
      font-size: 1.2rem;
      color: #555555;
      &:hover {
        color: #323232;
        border-color: #4a4a4a;
      }
    }
  }
  
  // ---- 트랜지션 정의 ----
  .modal-enter, .modal-leave-to {
    opacity: 0;
  }

  .moal-enter-to, .modal-leave {
    opacity: 1;
  }
  
  .modal-enter-active, .modal-leave-active {
    transition: opacity .5s;
  }
</style>
