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
          <div class="col-6">
            <h1>Interviews</h1>
            <!--info text-->
            <p>
              Im Rahmen der Anforderungsanalyse wurde entschieden, ein Experteninterview durchzuführen, um den praktischen Kontext der interaktiven Fußmatte besser zu verstehen und Anforderungen von echten Nutzern aufzunehmen. Für das Interview selbst konnten zwei Gesprächspartner akquiriert werden: Ralf Gerber und Sonja Brüllke. Ralf Gerber ist Geschäftsführer eines Männermodegeschäfts in Kirchheim unter Teck. Dieses führt er in vierter Generation. Angeboten werden Marken im mittleren und höheren Preissegment. Sonja Brüllke arbeitet in der Geschäftsleitung eines weiteren großen Modehauses in Kirchheim unter Teck. Dort übernimmt sie multiple Aufgaben und leitet im Team ca. 30 Mitarbeiter. Angeboten wird alles für Damen, Herren und Kindern auf vier Etagen. Beide Befragten qualifizieren sich als Experten, da sie die Prozesse im Textileinzelhandel bestens kennen. Des Weiteren besitzen beide Ladengeschäfte ein digitales Personenzählsystem des gleichen Herstellers, welches mit dem Warenwirtschaftssystem des jeweiligen Geschäfts verbunden ist. Um die beiden Interviews bestmöglich vorzubereiten, wurde ein Interviewleitfaden formuliert. Dieser kann als Richtschnur des Interviews gesehen werden. Das Gespräch an sich wurde dann in einem semistrukturierten Charakter durchgeführt, sodass die Fragen zwar vorher festgelegt wurden, die Reihenfolge allerdings flexibel gestaltet war. Die Durchführung der Interviews fand an zwei aufeinanderfolgenden Tagen statt und dauerten jeweils circa 30 min. In dieser Zeit schilderten die Befragten in Orientierung an die im Leitfaden formulierten Fragestellungen die Regularien und Besonderheiten des Textileinzelhandels im Rahmen der Covid-19-Pandemie. Des Weiteren gaben sie eine Auskunft über die Anforderungen, die sie an ein Personenzählsystem vor der Einführung hatten. Interessant war, dass das Personenzählsystem der beiden Geschäfte durch Anschluss an das Warenwirtschaftssystem weitere Funktionalitäten über das eigentliche Personenzählen hinaus erfüllen kann. So kann unter anderem eine Conversion-Rate berechnet werden. Also wie viele Menschen, die das Geschäft betreten, auch einen Kauf tätigen. Zusammenfassend kann gesagt werden, dass die Gespräche mit den Befragten sehr aufschlussreich waren und einen guten Eindruck über den Kontext des Systems, welches Subjekt dieser Arbeit ist geben konnten. Außerdem konnten durch das Interview die Anforderungen an das System ergänzt werden. 
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-5">
            <img class="main-section-image" src="../../assets/interviewee1.jpg"/>
            <img class="main-section-image" src="../../assets/interviewee2.jpg"/>
          </div>
        </div>
      </div>
      <!--main section 1 end-->

      <!--spacer bottom start-->
      <div class="d-flex" style="height: 150px; background-color: rgba(0,0,0,0)"></div>
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
  display: block;
  margin: auto;
  max-width: 80%;
  max-height: auto;
  border-radius: 15px;
  margin-bottom: 15px;
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
