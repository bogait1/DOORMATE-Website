<template>
  <div v-on:keyup.enter="handleEnter()" id="app">
    <MainMenu ref="mainmenu"></MainMenu>
    <div class="container-fluid">
      <!--Topbar start-->
      <div id="toprow" class="d-flex justify-content-between align-items-center">
        <a tabindex="1" href="/">
          <div id="logo" class="p-4 d-flex">
            <div class="p-1">
              <img id="logo-image" src="../../assets/logo.png">
            </div>
            <div class="p-3">
              <p id="logo-text">DOORMAT•E</p>
            </div>
          </div>
        </a>
        <div class="p-8">
          <p v-on:click="toggleMenu()" tabindex="2" id="menubutton" class="primary-button">Menü</p>
        </div>
      </div>
      <!--Topbar end-->

      <!--spacer 1 start-->
      <div class="d-flex" style="height: 180px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 1 end-->

      <!--main section 1 start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <h1>Literatur</h1>
          <p style="margin-bottom: 40px">Hier finden Sie Literaturrecherchen, die im Laufe der Erarbeitung dieses Projekts erstellt wurden.</p>
          <div class="col-7">
            <h3>Kommunikationstechnologien</h3>
            <p>
              Hier wurden moderne Kommunikationstechnologien, insbesondere im Bereich Smart Home, beschrieben und miteinander
              verglichen.
            </p>
          </div>
          <div class="col-1"></div>
          <a v-on:click="openPDF('https://1drv.ms/b/s!Aort0vMguPTpgdgzJvu0lj0bAC-n1g?e=yjIgAJ')" class="secondary-button col-4" download>Öffnen</a>
        </div>
      </div>
      <!--main section 1 end-->
      
      <!--spacer 2 start-->
      <div class="d-flex" style="height: 50px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 2 end-->

      <!--main section 2 start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <div class="col-7">
            <h3>Mensch-Maschine-Interaktion</h3>
            <p>
              Hier wurden der aktuelle Stand der Mensch-Maschine-Interaktion und der Anwenderakzeptanz solcher Technologien betrachtet. 
            </p>
          </div>
          <div class="col-1"></div>
          <a v-on:click="openPDF('https://1drv.ms/b/s!Aort0vMguPTpgdkS3V0A57AUURNmww?e=1XO4oH')" class="secondary-button col-4">Öffnen</a>
        </div>
      </div>
      <!--main section 2 end-->
      
      <!--spacer 3 start-->
      <div class="d-flex" style="height: 50px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 3 end-->

      <!--main section 3 start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <div class="col-7">
            <h3>Smart Home Geräte</h3>
            <p>
              Hier wurden Smart Home Geräte, deren Nutzer und deren Nutzungsmöglichkeiten analysiert. 
              Es wurden spezifisch auf die Erwartungen an solche Systeme eingegangen.
            </p>
          </div>
          <div class="col-1"></div>
          <a v-on:click="openPDF('https://1drv.ms/b/s!Aort0vMguPTpgdkTPgR76NOlrkEaOQ?e=43GDqr')" class="secondary-button col-4">Öffnen</a>
        </div>
      </div>
      <!--main section 3 end-->

      <!--spacer bottom start-->
      <div class="d-flex" style="height: 20vh; background-color: rgba(0,0,0,0)"></div>
      <!--spacer bottom end-->

      <!--bottom bar start-->
      <div id="bottomrow" class="d-flex justify-content-between align-items-end">
        <div class="p-3">
          <p>Boris Garkusha, Niko Gaiser, Tim Jüstel</p>
        </div>
        <div class="p-3">
          <p>Hausarbeit Interaktive Systeme</p>
        </div>
        <div class="p-3">
          <img style="height: 75px; width: auto;" src="../../assets/hsreutlingen.png">
        </div>
      </div>
      <!--bottom bar end-->

    </div>
  </div>
</template>

<script>
import MainMenu from "../../components/MainMenu.vue"

export default {
  name: 'App',
  components: {
    MainMenu
  },
  methods: {
    // makes focused elements react on enter
    handleEnter: function() {
      console.log("enter pressed");
      document.activeElement.click();
    },
    toggleMenu: function() {
      console.log("toggle");
      this.$refs.mainmenu.toggle();
    },
    openPDF: function(url) {
      window.open(url);
    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Spartan:wght@800&display=swap');

body {
  background-size: initial;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: #e9e9e9 !important;
  background-attachment: fixed;
}

a {
  text-decoration: none !important;
}

#app {
  font-family: 'Nunito';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #313131 !important;
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
   color: white;
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

 .secondary-button {
   padding: 0 !important;
   margin: 0 !important;
   text-align: center;
   white-space: nowrap;
   border-radius: 7px;
   border: 3px solid;
   border-color: rgb(64, 64, 191);
   color: rgb(64, 64, 191);;
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


 .secondary-button:hover,
 .secondary-button:focus-visible {
   background-color: rgb(64, 64, 191);
   color: white;
   transition: .25s;
   cursor: pointer;
 }

#toprow {
  position: fixed;
  height: 130px;
  width: 100%;
  padding: 0 27px 0 20px;
  background-color: rgb(98, 98, 226);

   user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}

.inforow {
  background-color: rgba(64, 64, 191);
  height: auto;
}

.inforow p {
  margin: 50px 300px 50px 300px;
  font-size: 24px;
}

.main-section {
  height: auto;
  text-align: left;
  font-size: 20px;
  margin: 0 10vw 0 10vw;
}

.main-section h1 {
  padding-bottom: 10px;
}

.main-section-image {
  max-width: 100%;
  max-height: auto;
  border-radius: 15px;
}

#bottomrow {
  background-color: rgb(35, 35, 104);
  color: white;
  min-height: 80px;
}

#logo {
  padding: 0 !important;
  height: 100px;
  width: 450px;
}

#logo-image {
  height: 90px;
  transition: .25s;
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
  color: white;
  text-decoration: none !important;
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
