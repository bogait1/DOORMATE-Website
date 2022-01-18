<template>

  <div v-on:keyup.enter="handleEnter()" id="app">
    <div class="container-fluid">
      <!--Topbar start-->
      <div id="toprow" class="d-flex justify-content-between align-items-center">
        <div id="logo" class="p-4 d-flex">
          <div class="p-1">
            <img id="logo-image" src="./assets/logo.png">
          </div>
          <div class="p-3">
            <p id="logo-text">DOORMAT•E</p>
          </div>
        </div>
        <div class="p-8">
          <p tabindex="1" id="menubutton" class="primary-button">Menü</p>
        </div>
      </div>
      <!--Topbar end-->

      <!--spacer 1 start-->
      <div class="d-flex" style="height: 80vh; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 1 end-->

      <!--headline start-->
      <div style="height: 10vh; color: #ffffff; font-size: 5vh">
        <p id="scroll" class="align-items-start text-center">Willkommen daheim.</p>
      </div>
      <!--headline end-->

      <!--spacer 2 start (inclued arrow down)-->
      <div class="d-flex justify-content-between align-items-center" style="height: 10vh; background-color: rgba(0,0,0,0)">
        <p class="col-sm"></p>
        <img tabindex="2" v-on:click="jump()" id="down-arrow" src="./assets/arrow.png">
        <p class="col-sm"></p>
      </div>
      <!--spacer 2 end-->

      <!--info bar start-->
      <div class="inforow d-flex align-items-start">
        <p class="col">inforow 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit sodales sodales. Aliquam erat volutpat. Duis euismod rhoncus purus feugiat sodales. Aenean sit amet lobortis ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque non augue rhoncus, tincidunt ipsum vitae, accumsan risus. Proin at maximus ipsum. In mollis vehicula orci, in dignissim dolor rhoncus sed. Fusce tempor ante eget nibh fermentum pellentesque. Fusce viverra ut ipsum sagittis placerat. Duis leo erat, eleifend quis mi eget, pulvinar accumsan ligula. Praesent et lorem accumsan, iaculis nunc quis, posuere diam. Donec hendrerit dolor at ex laoreet tempor. Nunc elementum dignissim massa quis consequat.
        </p>
      </div>
      <!--info bar end-->

            
      <!--info button start-->
      <div class="inforow d-flex justify-content-between">
        <p class="col-sm"></p>
        <p tabindex="3" class="primary-button col-sm">Mehr Information</p>
        <p class="col-sm"></p>
      </div>
      <!--info button end-->

      <!--bottom bar start-->
      <div id="bottomrow" class="d-flex justify-content-between align-items-end">
        <div class="p-3">
          <p>Boris Garkusha, Niko Gaiser, Tim Jüstel</p>
        </div>
        <div class="p-3">
          <p>Hausarbeit Interaktive Systeme</p>
        </div>
        <div class="p-3">
          <img style="height: 75px; width: auto;" src="./assets/hsreutlingen.png">
        </div>
      </div>
      <!--bottom bar end-->

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    // jumps either to top or bottom of page 
    jump: function() {
      console.log("jump");
      if (document.getElementById("down-arrow").disabled != true)
        window.scrollTo(0, 100000000);
    },
    // makes focused elements react on enter
    handleEnter: function() {
      console.log("enter pressed");
      document.activeElement.click();
    }
  }
}

var opacity = 0;
document.onscroll = function() {
  var documentHeight = window.innerHeight;

  // changes the opacity of the toprow
  opacity = window.scrollY / 300;
  document.getElementById("toprow").style = "background-color: rgba(98, 98, 226," + opacity + ");";

  // shrinks the icon
  if (window.scrollY > 30) {
    document.getElementById("logo-image").style = "height: 80px;";
  } else {
    document.getElementById("logo-image").style = "height: 250px;";
  }

  // sets the direction of the down-arrow according to scroll position
  if (window.scrollY + 500 > documentHeight) {
    document.getElementById("down-arrow").style.opacity = 0;
    document.getElementById("down-arrow").disabled = true;
  } else {
    document.getElementById("down-arrow").style.opacity = 255;
    document.getElementById("down-arrow").disabled = false;
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Spartan:wght@800&display=swap');

body {
  background-image: url("./assets/placeholder-image.png") !important;
  background-size: initial;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: #555f61;
  background-attachment: fixed;
}

#app {
  font-family: 'Nunito';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  margin: 0;
  padding: 0 !important;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
 }

 .primary-button {
   padding: 0 !important;
   margin: 0 !important;
   text-align: center;
   white-space: nowrap;
   border-radius: 7px;
   border: 3px solid;
   border-color: rgb(255, 255, 255);
   background-color: rgb(103, 221, 205, 0);
   font-size: 20px !important;
   min-width: 300px;
   height: 50px;
   line-height: 50px;
   transition: .25s;

   user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
 }


 .primary-button:hover,
 .primary-button:focus-visible {
   background-color: rgb(255, 255, 255);
   color: rgba(64, 64, 191);
   transition: .25s;
   cursor: pointer;
 }

#toprow {
  position: fixed;
  height: 12vh;
  width: 100%;
  padding: 0 100px 0 20px;
}

.inforow {
  background-color: rgba(64, 64, 191);
  height: auto;
}

.inforow p {
  margin: 50px 100px 50px 100px;
  font-size: 24px;
}

#bottomrow {
  background-color: rgb(35, 35, 104);
  min-height: 80px;
}

#logo {
  padding: 0 !important;
  height: 100px;
}

#logo-image {
  height: 250px;
  transition: height .25s;
}

#logo-text {
  font-family: 'Spartan';
  font-size: 45px;
  width: 200px;
  min-height: 4vh;
  padding: 0;
  margin: 0;
  height:auto;
  object-fit: contain;
}

#menubutton {
  min-width: 100px !important;
}

#product-image {
  margin: 0;
  padding: 0;
  width: 100%;
}

#down-arrow {
  height: 70px;
  transition: 0.25s;
}

#down-arrow:hover {
  cursor: pointer;
  transform: translateY(5px);
}

</style>
