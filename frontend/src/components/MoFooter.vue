<template>
  <!-- Footer -->
  <div id="footer">
    <p>&copy; Untitled. All rights reserved. Design: <a href="http://templated.co">TEMPLATED</a>. Demo Images: <a href="http://unsplash.com">Unsplash</a>.</p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
#footer:before {
  content:'';
  display: block;
  margin:2rem auto;
  width:10rem;
  border-top:1px solid rgba(255,255,255,0.25);
  margin:0 auto 3em auto;
}  

#footer {
  color: $titleColor;
  font-weight: 200;
  font-size: 1rem;
  padding: 4em 0 4em 0;

  a {
    color: $titleColor;
    border-bottom: 1px dotted $outlineColor;
  }
  a:hover {
    color: white;
  }
}

@media screen and (max-width: 1280px) {
  #footer {
    padding: 2em 0 2em 0;
  }
}
</style>