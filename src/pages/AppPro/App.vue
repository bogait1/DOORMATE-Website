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
            <h1>App Prototyp</h1>
            <h3>Login</h3>
            <p>Durch ein Nutzerkonto wird der Zugriff auf die Fußmatte von unterschiedlichen Mobilgeräten ermöglicht.</p>
            <h3>Übersicht über alle Fußmatten</h3>
            <p>Die DOORMATE App zeigt alle hinzugefügten Geräte in einer Übersicht an. Mit einem Tippen steuert man alle Fußmatten. Durch Tippen auf eines der Symbole lassen sich Einstellungen vornehmen oder neue Geräte hinzufügen. Zusätzlich wird der aktuelle Status der einzelnen Fußmatten angezeigt.</p>
            <h3>Gruppen</h3>
            <p>Mehrere Fußmatten lassen sich zu einer Gruppe zusammenschließen. Somit können ganze Räume oder Geschäfte konfiguriert werden. Durch die Festlegung von eingangs- und ausgangs Fußmatten lassen sich exakte Besucherstatistiken bestimmen. Die aktuellen Besucherzahlen lassen sich in der Übersicht einfach ablesen. Beim Hinzufügen oder konfigurieren der Gruppen ist es möglich Geräte, Gruppennamen, maximale Personenanzahl einzustellen. Zusätzlich wird die Funktion geboten, die automatische Zugangskontrolle für die Gruppe zu aktivieren. Die Fußmatte wird bei erreichter maximaler Personenanzahl signalisieren, dass keine weiteren Personen eintreten dürfen.</p>
            <h3>Gruppenstatistik</h3>
            <p>Interessant für Ladenbesitzer sind die Besucherzahlen. Die DOORMATE App bietet eine Vielzahl an statistischen Darstellungen. Von einer stundengenauen Tagesansicht bis hin zu einer Jahresbilanz. Somit können alle Aktivitäten im Geschäft genau dokumentiert werden.</p>
            <h3>DOORMATE App</h3>
            <!--info text-->
            <p>Bei der Entwicklung der Smartphone App wurden alle relevanten Anforderungen an die Fußmatte beachtet. Ebenso konnten die Design Prinzipien des User Interfaces nach D. Norman umgesetzt werden. Da es sich bisher nur um einen Klick-Prototypen handelt können Ladebildschirme oder sonstiges entsprechendes Feedback nur schwer dargestellt werden. Diese Punkte werden bei einem Funktionsprototypen beachtet. Eine Simple Menüführung erlaubt den Nutzer: innen einen guten Überblick der Anwendung. Konsistent angeordnete Icons und Texte erleichtern die Navigation zwischen den verschiedenen Fenstern. Für Bei der Auswahl der funktionalen Icons wie des Menüs oder das Schließen, wurde darauf geachtet, möglichst bekannte Symbole zu verwenden. Die DOORMATE App ermöglicht den zugriff auf den Kompletten Funktionsumfang der DOORMATE.</p>
          </div>
          <div class="col-1"></div>
          <div class="col-5">
            <img class="main-section-image" src="../../assets/appprototype.gif"/>
            <div id="app-pro">
              <p><b>Probieren Sie den Prototypen 
                <a 
                style="text-decoration: underline !important"
                href='https://www.figma.com/proto/WMvty66p2BqBe0OyAyAx7O/Untitled?page-id=0%3A1&node-id=33%3A249&viewport=241%2C48%2C0.47&scaling=scale-down&starting-point-node-id=2%3A4'>hier</a>
                selbst aus!</b></p>
              <img style="display: block; margin: auto" src="../../assets/qrcode.png">
            </div>
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

#app-pro {
  background-color: white;
  margin: 50px auto auto auto;
  width: 100%;
  text-align: center;
  border-radius: 15px;
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
  max-width: 100%;
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
