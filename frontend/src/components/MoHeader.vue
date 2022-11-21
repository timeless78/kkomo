<template>
  <div id="header">
    <span class="avatar"><img src="@/assets/images/avatar2.jpg" alt="" /></span>
      <h1>This is <strong>{{userTitle}}</strong>, a responsive site template designed by <a href="http://templated.co">TEMPLATED</a><br />
      and released for free under the Creative Commons License.</h1>
      <ul class="icons">
        <li><a href="#" class="icon icon-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="#" class="icon icon-facebook"><span class="label">Facebook</span></a></li>
        <li><a href="#" class="icon icon-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="#" class="icon icon-500px"><span class="label">500px</span></a></li>
        <li><a href="#" class="icon icon-mail"><span class="label">Email</span></a></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "MoHeader",
  data() {
    return {
      userTitle: "Cindy",
    };
  },
}
</script>
<style lang="scss">
#header {
  padding-top: 2rem;
  padding-bottom: 6rem;

  .avatar {
    display: inline-block;
    padding: 0.5rem;
    border-radius: 100%;
    background-color: $bgColor;
    border: 1px solid $outlineColor;
    margin-top: 2rem;
    margin-bottom: 2rem;

    img {
      border-radius: 100%;
      display: block;
      width: 170px;
      height: 170px;
    }
  }

  h1 {
    font-size: 1.25em;
    font-weight: 200;
    line-height: 1.5rem;
    color: $titleColor;
    margin: 0 0 1em 0;

    strong {
      color: white;
      font-weight: 200;
    }

    a {
      color: $titleColor;
      border-bottom: 1px dotted $outlineColor;
    }
    a:hover {
      color: white;
    }
  }

  ul.icons li {
    display: inline-block;
    width:3rem;
    height:3rem;
    border-radius: 100%;
    color: $titlebgColor;
    background-color: $titlebgColor;
    border: 1px solid $outlineColor;
    margin-right: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    :hover {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: inherit;
      height: inherit;
      border-radius: 100%;
      border: 1px solid rgba(255, 255, 255, 0.25);
      background-color: $titlebgColor;
    }

    a.icon {
      color: $titleColor;
      font-weight: 200;
    }

    .label {
      display: none;
    }
  }
}

@media screen and (max-width: 1280px) {
  #header {
    padding: 4em 0 2em 0;
  }
}
</style>