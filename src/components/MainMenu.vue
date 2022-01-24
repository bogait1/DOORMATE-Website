<template>
  <div id="bg" v-on:click="off()">
    <div id="overlay">
      <a style="margin-top: 30px" class="menu-item" href="/">Startseite</a>
      <a class="menu-item" href="/doku">Dokumentation</a>
      <a class="menu-item" href="/physprototype">Physischer Prototyp</a>
      <a class="menu-item" href="/appprototype">App Prototyp</a>
      <a class="menu-item" href="/interview">Interview</a>
      <a class="menu-item" href="/downloads">Literatur</a>
      <a class="menu-item" href="/about">Lernen Sie das Team kennen</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  methods: {
    toggle: function() {
      if (document.getElementById("overlay").style.visibility === "visible") {
        this.off();
      } else {
        this.on();
      }
    },
    on: function() {
      document.getElementById("overlay").style.visibility = "visible";
      document.getElementById("bg").style.visibility = "visible";
      document.getElementById("overlay").style.transform = "translateY(10px)";
      document.getElementById("overlay").style.opacity = "1";
    },
    off: function() {
      document.getElementById("overlay").style.visibility = "hidden";
      document.getElementById("bg").style.visibility = "hidden";
      document.getElementById("overlay").style.transform = "translateY(-10px)";
      document.getElementById("overlay").style.opacity = "0";
    }
  }
}
</script>

<style>

#bg {
  position: fixed;
  background-color: rgba(0,0,0,0);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  visibility: hidden;
}

#overlay {
  display: inline-block;
  background-color: rgb(87, 87, 196);
  position: fixed;
  min-width: 400px;
  width: 20vw;
  height: min-content;
  border-radius: 14px;
  margin-left: auto;
  margin-right: 2.5vw;
  margin-top: 11vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10001;
  visibility: hidden;
  opacity: 0;

  transition: opacity .5s, transform .25s;
}

.menu-item {
  display: block;
  border-radius: 7px;
  margin: 15px 30px 30px 30px;
  background-color: rgb(64, 64, 255, 0);
  height: 50px !important;
  line-height: 50px;
  width: auto;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  font-size: 18px;
}

 .menu-item:hover,
 .menu-item:focus-visible {
   background-color: rgb(255, 255, 255);
   color: rgba(64, 64, 191);
   transition: .25s;
   cursor: pointer;
 }

</style>