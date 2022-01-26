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

      <!--Ideenfindung section start-->
      <div class="main-section">
        <h1>Der physische Prototyp</h1>
        
        <div class= "d-flex justify-content-between">
          <p class="col-sm"></p>
          <p class="col-sm">
            <iframe width="1149" height="646" src="https://www.youtube.com/embed/uWwkEhTAt8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </p>
          <p class="col-sm"></p>
        </div>

        <div style="background-color:" class='row'>
          <div class="col-5">
            <p>
              Im Rahmen des Human-Centered Design Prozesses nach ISO 9241 – 210 soll nach der Spezifikation der Anforderungen eine Gestaltungslösung 
              entwickelt werden. Im Rahmen des Projekts interaktive Fußmatte sollte dazu ein physischer Prototyp entwickelt werden, der insofern 
              funktionell ist, als dass er mit potenziellen Nutzern verprobt werden kann. Aus den anfänglichen Brainstormings entstand schnell eine 
              grundsätzliche Vorstellung, wie das Design einer interaktiven Fußmatte aussehen könnte. So war die Idee, eine Ringfußmatte zu benutzen, 
              in deren Mitte steuerbare LEDs angebracht sind, um mit der Umgebung interagieren zu können. Zur Umsetzung dieser Idee wurden folgende 
              Materialien verwendet:
            </p>
            <ul>
              <li>Andiamo Gummi-Ringmatte 60x40x0,5cm</li>
              <li>2x BTF-LIGHTING WS2811 adressierbare LED-Lichterkette</li>
              <li>Arduino Uno Rev 3 Minicomputer</li>
              <li>2x HC-SR04 Ultraschallsensoren</li>
              <li>iwalk 10000 mah power ban</li>
              <li>DC-13M Niedervolt-Steckverbinder</li>
              <li>ACO Vario Bodenwanne Light 60x40cm</li>
              <li>JOBY JB01507-BWW GorillaPod Ministativ</li>
            </ul>
            <p>
              Zunächst wurde für die Umsetzung des physischen Prototypen die LEDs in Kombination mit der Fußmatte getestet, dabei konnte festgestellt werden, dass der Durchmesser der Dioden exakt mit dem der inneren Löcher der Ringfußmatte übereinstimmen. Dadurch ist eine Befestigung der Dioden an der Fußmatte ohne weitere Hilfsmittel möglich. Mithilfe der inneren Löcher kann so eine 8x14 große LED-Matrix realisiert werden. Die Steuerung der LED-Matrix wird durch den Arduino Uno und die zugehörige Arduino-IDE realisiert. Dazu wurden im Rahmen des Projektes zwei Bibliotheken des Herstellers Adafruit verwendet: NeoPixel und NeoMatrix. Diese stellen Funktionen bereit, um die LEDs der Matrix anzusteuern und so verschiedene Farben, Formen, aber auch Textdarstellungen zu realisieren. Im Rahmen des Use-Cases Personenzähler kann so die freie Personenkapazität eines Geschäfts über die Fußmatte in Form einer dargestellten Zahl angezeigt werden. Bei Überschreitung der Personenkapazität wird darüber hinaus ein Umschalten aller Dioden auf die Farbe Rot an eine Ampel angelehnt suggerieren, dass nicht eingetreten werden darf. Um die Personenanzahl in einem Geschäft zu tracken, benötigt es über die LEDs hinaus Sensoren. Im Rahmen dieses Projekts wurden hierzu zwei HC-SR04 Ultraschallsensoren verwendet. Diese können Entfernungen zu Gegenständen durch ein ausgesendetes Ultraschallsignal messen. Die gemessenen Werte können dann ausgewertet werden und geben Rückschlüsse darauf, wie viele Leute an dem Sensor vorbeigelaufen sind. Um die Sensordaten auszulesen, wurde die NewPing-Bibliothek verwendet. Die Sensoren sind gegenüberliegend angebracht, sodass der eine Sensor den Eingang misst und der andere den Ausgang. Misst der Sensor am Eingang eine Person, die an ihm vorbeiläuft, so wird die maximale Personenanzahl heruntergezählt. Dies passiert aber erst, wenn nach den Messwerten für 5 Messungen in folge keine Person mehr vor dem Sensor steht. Dies verhindert, dass eine Person durch mehrere Messungen als mehrere Personen identifiziert wird. Dasselbe passiert am Ausgang, dort wird allerdings die maximale Anzahl wieder hochgezählt. Ein Problem, welches bei Erstellung des Prototypen aufgetreten ist, ist die Größe und die Kabellänge der Dioden. Bei Befestigung an der Fußmatte stehen diese mehrere Zentimeter heraus, sodass beim Betreten der Matte die Kabel zusammengedrückt werden. Dies kann zu einer Beschädigung und im schlimmsten Fall bis hin zum Ausfall der Lichterkette führen. Um dies zu verhindern, wurde eine Bodenwanne verwendet. Diese haben den ursprünglichen Zweck, dass sie in Kombination mit einer Fußmatte vor einer Tür fest im Boden installiert werden, um so Schmutz und Wasser aufzufangen. Im Rahmen dieses Projektes können im Bauch der Wanne die Kabel der LED-Lichterkette verlegt werden, sodass diese geschützt sind. Des Weiteren bietet ein Mittelstegsystem der Bodenwanne Stabilität für die sonst eher instabile Gummifußmatte. Um die Kabel trittsicher zu verlegen, wurden zum einen Styroporplatten rechteckig zugeschnitten und in die Ecken der Bodenwanne verlegt. Des Weiteren wurden Löcher in der Größe der Dioden und nach Muster der Fußmatte in die Platten gebohrt. Außerdem wurden Löcher in das Mittelstegsystem der Bodenwanne gebohrt, um so die Kabel über die verschiedenen Teil-Bereiche der Wanne hinweg verlegen zu können.
            </p>
            <p>
              Auch der Ardunio-Computer und die Sensoren sind nicht ohne Weiteres vor Umwelteinflüssen geschützt. Zu diesem Zweck werden normalerweise ABS-Gehäuse verwendet. Es konnte jedoch kein Gehäuse gefunden werden, welches den Abmessungen des Arduino und der Sensoren entspricht. Dies war vor allem der Tatsache geschuldet, dass eine genau Breite des Gehäuses gegeben sein muss, damit beide Sensoren gleichmäßig aus dem Gehäuse herausschauen und so uneingeschränkt funktionieren. Um dieses Problem zu lösen, wurden Lego-Bausteine verwendet, um ein Gehäuse um den Minicomputer zu bauen. Dieses Gehäuse konnte durch die vielen Möglichkeiten des Klemmbausteinsystems genau so konstruiert werden, dass beide Sensoren optimal herausschauen und die Anschlüsse des Kontrollers frei liegen. Außerdem wurde am Boden des Gehäuses eine M6 Gewindeschraube angebracht, sodass sich das Gehäuse auf ein Kamerastativ montieren lässt. Auf diesem Stativ kann die Position der Sensoren variabel eingestellt werden. Betrieben wird das Gesamtsystem mit einer 10000mah-Powerbank, sodass keine externe Stromversorgung vorhanden sein muss.
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-6">
            <img v-on:click="openImage('/img/aufbau1.3f794ba4.png')" class="main-section-image" src="../../assets/aufbau1.png">
            <img v-on:click="openImage('/img/aufbau2.a941cb4e.png')" class="main-section-image" src="../../assets/aufbau2.png">
            <img style="margin-top: 150px" v-on:click="openImage('/img/physpro1.33bfd423.png')" class="main-section-image" src="../../assets/physpro1.png">
            <img v-on:click="openImage('/img/physpro2.2c189798.png')" class="main-section-image" src="../../assets/physpro2.png">
            <img style="margin-top: 250px" v-on:click="openImage('/img/evaluierung0.929b2abd.png')" class="main-section-image" src="../../assets/evaluierung0.png">
            <img v-on:click="openImage('/img/evaluierung1.f78cd80c.png')" class="main-section-image" src="../../assets/evaluierung1.png">
          </div>
        </div>
      </div>
      <!--Ideenfindung section end-->
      
      <!--spacer 2 start-->
      <div class="d-flex" style="height: 50px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 2 end-->

      <!--Technologien section start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <div class="col-5">
            <h3>Evaluierung</h3>
            <p>
              Im letzten Schritt einer Iteration des Human-Centered Design Prozesses soll die vorher entwickelte Gestaltungslösung evaluiert und somit überprüft werden, ob die Anforderungen erfüllt sind. Im Rahmen des Projekts wurde hierbei die Funktion des Personenzählers betrachtet. Dabei wurde geprüfte, inwiefern Personen gezählt werden und ob die Signale der Fußmatte eindeutig zu erkennen sind. Für die Evaluierung konnten die Räumlichkeiten des Feuerwehrmuseums in Kirchheim unter Teck verwendet werden. Dort wurde ein potenzielles Szenario, in dem die interaktive Fußmatte zum Einsatz kommen könnte, simuliert. Dazu wurde der Eingang zum Veranstaltungssaal des Museums durch eine Abtrennung in einen Eingang und einen Ausgang unterteilt. Beides wurde mithilfe von Markierungen am Boden verdeutlicht. Die eingeladenen Tester sollten nun, ohne vorher eine Einführung zu bekommen, die Fußmatte testen. Die Tester haben dabei schnell verstanden, dass die dargestellte Zahl auf der Fußmatte für die Personen steht, die noch in den Raum eintreten dürfen. Auch das Signal bei Überschreiten der Personengrenze wurde zur Kenntnis genommen und verstanden. Somit konnte die Evaluierung zeigen, dass die grundlegenden Anforderungen an eine Personenzählfunktion durch den Prototypen gewährleistet sind. Bei der Evaluierung konnte darüber hinaus festgestellt werden, dass die Position und Kalibrierung der Sensoren wichtig sind, um die Funktion der interaktiven Fußmatte zu gewährleisten.
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-6">
            <img v-on:click="openImage('/img/evaluierung2.bc8984bc.png')" class="main-section-image" src="../../assets/evaluierung2.png">
          </div>
        </div>
      </div>
      <!--Technologien section end-->

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
    },
    openImage: function(url) {
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
  cursor: default;
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

.main-section p {
  margin-bottom: 15px;
}

.main-section-image {
  max-width: 100%;
  max-height: auto;
  border-radius: 15px;
  margin-bottom: 15px;
  cursor: pointer;
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
