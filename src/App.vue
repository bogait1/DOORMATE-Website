<template>

  <div id="app">
    <div class="container-fluid">
      <!--Topbar start-->
      <div id="toprow" class="d-flex justify-content-between align-items-end">
        <div id="logo" class="p-4 d-flex">
          <div class="p-1">
            <img id="logo-image" src="./assets/logo.png">
          </div>
          <div class="p-3">
            <p id="logo-text">Doormate</p>
          </div>
        </div>
        <div class="p-8">
          <p id="menubutton">Menü</p>
        </div>
      </div>
      <!--Topbar end-->

      <!--spacer 1 start-->
      <div class="d-flex" style="height: 85vh; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 1 end-->

      <!--headline start-->
      <div style="height: 5vh; color: #ffffff; font-size: 5vh">
        <p id="scroll" class="align-items-start text-center">Willkommen daheim.</p>
      </div>
      <!--headline end-->

      <!--spacer 2 start-->
      <div class="d-flex" style="height: 10vh; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 2 end-->

      <!--info bar start-->
      <div id="inforow" class="d-flex justify-content-between align-items-start">
        <p>inforow 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit sodales sodales. Aliquam erat volutpat. Duis euismod rhoncus purus feugiat sodales. Aenean sit amet lobortis ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque non augue rhoncus, tincidunt ipsum vitae, accumsan risus. Proin at maximus ipsum. In mollis vehicula orci, in dignissim dolor rhoncus sed. Fusce tempor ante eget nibh fermentum pellentesque. Fusce viverra ut ipsum sagittis placerat. Duis leo erat, eleifend quis mi eget, pulvinar accumsan ligula. Praesent et lorem accumsan, iaculis nunc quis, posuere diam. Donec hendrerit dolor at ex laoreet tempor. Nunc elementum dignissim massa quis consequat.        </p>
      </div>
      <!--info bar end-->

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
  }
}

var opacity = 0;
//var logoImage = document.getElementById("logo-image");
document.onscroll = function() {

  // changes the opacity of the toprow
  opacity = window.scrollY / 300;
  document.getElementById("toprow").style = "background-color: rgba(98, 98, 226," + opacity + ");";

  // shrinks the icon
  if (window.scrollY > 30) {
    document.getElementById("logo-image").style = "height: 80px;";
  } else {
    document.getElementById("logo-image").style = "height: 250px;";
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

#toprow {
  position: fixed;
  height: 12vh;
  width: 100%;
  padding: 0 100px 0 20px;
}

#inforow {
  background-color: rgba(64, 64, 191);
  height: auto;
}

#inforow p {
  margin: 50px 100px 50px 100px;
  font-size: 24px;
}

#bottomrow {
  background-color: rgb(35, 35, 104);
  height: 12vh;
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
  font-size: 30px;
  margin: 0 0 0 0;
}

#product-image {
  margin: 0;
  padding: 0;
  width: 100%;
}

</style>
