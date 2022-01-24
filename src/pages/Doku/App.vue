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
        <div style="background-color:" class='row'>
          <div class="col-5">
            <h1>Ideenfindung</h1>
            <p>
              Die Idee einer intelligenten Fußmatte, also einer Fußmatte, die über diverse Technologien verfügt, stammt aus der Vorlesung Interaktive
              Systeme. Der erste Schritt war die Gestaltung eines Verpackungsprototypen. Diese Aufgabe hat das Team kritisch darüber nachdenken lassen,
              welche Nutzungszwecke eine solche Fußmatte für welche Nutzer hat. Der Hauptanwendungsfall, auf den wir uns zunächst entschieden haben, lag 
              in der Verwendung der Matte in einem Smart Home. Als solches haben wir jedes Haus definiert, das über Technologien zum Steuern von diversen 
              Aspekten wie der Beleuchtung, der Temperatur, etc. verfügt.
            </p>
            <p>
              Nach diversen Brainstorming Sessions sind uns zwar einige Verwendungen für die Matte in einem Smart Home eingefallen, allerdings sahen wir 
              deutlich mehr Potential in der Verwendung in einem anderen Szenario: <b>das Implementieren der Matte in Geschäften</b>. Nicht nur wurden uns neue, 
              innovative Nutzungszwecke deutlich, die für Ladenbesitzer relevanterer sind als für Privatpersonen, die Verwendung bei Geschäften löst auch 
              mehrere Probleme, die uns bei der Konzeption der Implementierung der Matte in einem Smart Home deutlich wurden, unter anderen der Preis, die 
              Größe und die Stromversorgung.
            </p>
            <p>
              Bereits früh im Projekt fiel uns der Name DOORMATE ein - ein Wortspiel bestehend aus den englischen Worten Doormat und Mate, also Fußmatte
              Kumpel. Dieser Name lässt sich gut als Motto für die Entwicklung des Produkts sehen, denn wir wollen eine Fußmatte erstellen, die, wie 
              ein Freund, für den / die Nutzer*in da ist und ihn / sie unterstützt. 
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-6">
            <img v-on:click="openImage('/img/teaserBox.e4032b4e.jpg')" class="main-section-image" src="../../assets/teaserBox.jpg">
            <img v-on:click="openImage('/img/boxBack.cf19899c.jpg')" class="main-section-image" src="../../assets/boxBack.jpg">
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
            <h1>Technologien</h1>
            <p>
              Die Realisierung einer intelligenten Fußmatte kann sehr simpel, oder sehr kompliziert ausfallen. Das liegt daran, dass 
              das Potential sehr hoch ist. 
            </p>
            <p>
              Wollen wir bloß eine sehr simple intelligente Fußmatte erstellen, sind nicht viele Hardware-Komponenten notwendig. Außer der 
              Matte selbst fehlen nur eine Recheneinheit in Form eines Mini-Computers und eine Technologie, um diesen Mini-Computer mit 
              Strom zu versorgen. Populäre Mini-Computer wären beispielweise der <a style="text-decoration: underline !important" 
              href="https://www.raspberrypi.org">Raspberry Pi</a> oder
              der <a style="text-decoration: underline !important" href="https://www.arduino.cc">Arduino Nano</a>. Diese kommen nicht nur mit der zentralen Recheneinheit, sondern auch mit einem 
              Kanal für die Stromversorgung. 
            </p>
            <p>
              Ein Minicomputer allein kann allerdings nicht viel. Die Idee ist, dass Sensoren und Output-Geräte an die Computer angeschlossen werden, 
              damit mit der Matte interagiert werden kann. Will man einfach nur beispielweise die Matte benutzen, um die Temperatur zu messen, muss 
              eine kompatible Thermometer-Komponente an den Computer angeschlossen werden. Man kann allerdings nicht bloß einen Sensor auf einmal 
              benutzen. Durch die Aufrüstung der Matte können mehr und mehr Funktionen hinzugefügt werden. Es können diverse Input- und Output-Geräte 
              verbunden werden, beispielweise ein Touchscreen. Durch das Hinzufügen von Kommunikationsmodulen, welche über Standards wie WLAN oder 
              Bluetooth verfügen, kann die Matte mit anderen Geräten kommunizieren, was erneut das Potential der Fußmatte um ein Vielfaches 
              erhöht.
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-6">
            <img v-on:click="openImage('/img/arduino.024b4e4e.png')" class="main-section-image" src="../../assets/arduino.png">
          </div>
        </div>
      </div>
      <!--Technologien section end-->

      <!--spacer 3 start-->
      <div class="d-flex" style="height: 50px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 3 end-->

      <!--Aktorik section start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <h1>Aktorik und Kommunikation zwischen Mensch und Maschine</h1>
          <div class="col-8">
            <p>
              Die Kommunikationsmöglichkeiten der Fußmatte sollen sich nicht nur auf die Kommunikation zwischen verschiedenen Smart Home Geräten 
              begrenzen, sondern auch eine Kommunikation zu den Benutzer: innen ermöglichen. Dabei lassen sich zwischen indirekter Kommunikation 
              mittels einer Smartphone App oder auch einer direkten Kommunikation über visuelle-/akustische und haptische Kanäle unterscheiden. 
              Mit einer Literaturrecherche soll der aktuelle Stand der Technik bezüglich der Aktorik und Kommunikation zwischen Mensch und Maschine 
              in Smart-Home Produkten festgestellt werden. Zusätzlich kann ermittelt werden, welche Möglichkeiten zur Kommunikation zwischen Mensch 
              und Fußmatte für das Projekt in Frage kommen. Mit wissenschaftlichen Suchmaschinen wie Google Scholar, Web of Science und IEEE wird 
              nach geeigneter Literatur gesucht. Um möglichst aktuelle Ergebnisse zu erhalten wird der Veröffentlichungszeitraum auf den Zeitraum 
              2017-2021 begrenzt. Mit Suchbegriffen wie Smart Home AND actuators, Smart Home AND User acceptance, Smart Home AND Machine-Human 
              interaction, Robot Human Interaction und affordance AND Smart Home konnten sehr gute Ergebnisse erzielt werden. Diese Recherche 
              liefert fünf gut geeignete Quellen. Diese behandeln Themen wie durch IOT in Pflegeheimen das Pflegepersonal entlastet werden kann.  
              Indem die Bedürfnisse älterer Menschen in die Entwicklung miteinfließen, kann gewährleistet werden, dass die mögliche Kundengruppe 
              so breit wie möglich ausfällt.  Auch Arbeiten, welche sich mit der Akzeptanz und Affordanz der Smart-Home Technologie befassen, konnten 
              gefunden werden. Diese genannte Literatur trägt dazu bei, das Produkt möglichst nutzerfreundlich zu gestalten. Die Suche ergab auch 
              Quellen, durch welche die technische Umsetzung des Produktes ermöglicht werden kann. Ein Report befasst sich mit der Anwendung und 
              Funktion von Soft Robotics. Damit ist eine Technologie gemeint, welche es möglich macht, bestimmte Textil-Fasern so zu weben oder 
              anzuordnen, dass diese als Sensoren oder auch Aktoren eingesetzt werden können.
            </p>
          </div>
        </div>
      </div>
      <!--Aktorik section end-->

      <!--spacer 4 start-->
      <div class="d-flex" style="height: 50px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 4 end-->

      <!--Nutzungskontext section start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <div class="col-5">
            <h1>Nutzungskontext</h1>
            <p>
              Laut der ISO Norm 9241-210 ist der Nutzerkontext definiert als: „Benutzermerkmale, Aufgaben und die organisatorische, technische und 
              physische Umgebung bestimmen den Kontext, in dem das System verwendet wird“ [ISO 9241-210]. Um den Nutzungskontext abgrenzen zu können 
              ist es wichtig, sich mit ähnlichen bereits vorhandenen Systemen zu befassen. Durch die Analyse dieser kann ermittelt werden, welche Aspekte 
              in der Kontextabgrenzung relevant und welche zu vernachlässigen sind. Für die Analyse der bereits vorhandenen oder ähnlichen Systeme 
              wurden mehrere Literaturrecherchen in unterschiedlichen Bereichen durchgeführt. Somit konnten bereits Schwerpunkte in den Themenbereichen 
              Kommunikation, Aktorik und Smart Home festgelegt werden. 
            </p>
            <p>
              Mittels eines Diagrammes werden die relevanten Stakeholder identifiziert. Im Rahmen der Entwicklung wurde von uns beschlossen die erste
              Variante der Fußmatte auf den Nutzen im gewerblichen Sinne zu beschränken. Dabei soll die Fußmatte vor und in Geschäften installiert werden.
              Die daraus resultierenden Stakeholder sind auf dem Schaubild rechts zu sehen.
            </p>
            <p>
              Zu der Zielgruppe gehören Geschäftsbesitzer oder Manager eines Geschäfts. Dabei kann es sich um ein kleines Geschäft in der Innenstadt 
              oder um ein Supermarkt handeln. Direkte Stakeholder sind dabei die Kunden wie auch Mitarbeiter. Die Mitarbeiter können während des 
              Betriebes Einstellungen an den Fußmatten vornehmen, oder diese aktivieren und deaktivieren. Kunden kommen beim Betreten des Geschäftes 
              mit der Fußmatte in Kontakt. Ebenso ist das Sicherheitspersonal ein Stakeholder. Vor allem zu Zeiten der Pandemie wurde gezeigt das es 
              vielerorts notwendig ist, Sicherheitspersonal einzustellen. Durch die Fußmatte wird auch deren Arbeit erleichtert.  
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-6">
            <img v-on:click="openImage('/img/stakeholder.1396adb0.png')" class="main-section-image" src="../../assets/stakeholder.png">
          </div>
        </div>
      </div>
      <!--Nutzungskontext section end-->

      <!--spacer 5 start-->
      <div class="d-flex" style="height: 50px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 5 end-->

      <!--Nutzungsanforderungen section start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <h1>Festlegung der Nutzungsanforderungen</h1>
          <div class="col-8">
            <p>
              Durch die Abgrenzung des Nutzerkontexts können im folgenden Kapitel die Nutzungsanforderungen des Produktes spezifiziert werden. 
              bereits erläutert, wird primär der Einsatz des Produktes durch Geschäftsbesitzer betrachtet. In folgender Tabelle werden diese 
              Anforderungen dargestellt.
            </p>

            <table>
              <tr>
                <th>REQ 1</th>
                  <td>Der Nutzer muss die Fußmatte an und abschalten können.</td>
              </tr>
              <tr>
                <th>REQ 2</th>
                  <td>Der Nutzer muss die Fußmatte mit einer Smartphone App verbinden können.</td>
              </tr>
              <tr>
                <th>REQ 3</th>
                  <td>Der Nutzer muss die Möglichkeit haben mehrere Fußmatten mit einer Smartphone App zu verbinden.</td>
              </tr>
              <tr>
                <th>REQ 4</th>
                  <td>Der Nutzer muss den Status jeder Fußmatte abfragen können.</td>
              </tr>
              <tr>
                <th>REQ 5</th>
                  <td>Der Nutzer muss zwischen angezeigtem Text und Symbolen wählen können.</td>
              </tr>
              <tr>
                <th>REQ 6</th>
                  <td>Der Nutzer muss den angezeigten Text selbst einstellen können.</td>
              </tr>
              <tr>
                <th>REQ 7</th>
                  <td>Der Nutzer muss die Farbe der Anzeige einstellen können.</td>
              </tr>
              <tr>
                <th>REQ 8</th>
                  <td>Der Nutzer muss den Gerätenamen einstellen können.</td>
              </tr>
              <tr>
                <th>REQ 9</th>
                  <td>Der Nutzer muss festlegen können, ob die Fußmatte an einem Eingang oder Ausgang eingesetzt wird.</td>
              </tr>
              <tr>
                <th>REQ 10</th>
                  <td>Der Nutzer muss die Möglichkeit haben mehrere Fußmatten zu einer Gruppe (einem Laden) zusammenzuschließen.</td>
              </tr>
              <tr>
                <th>REQ 11</th>
                  <td>Der Nutzer muss die Möglichkeit haben, die Parameter wie maximale Personenanzahl für eine Gruppe zu definieren.</td>
              </tr>
              <tr>
                <th>REQ 12</th>
                  <td>Der Nutzer muss die Möglichkeit haben, mehrere Gruppen von Fußmatten zu erstellen.</td>
              </tr>
              <tr>
                <th>REQ 13</th>
                  <td>Der Nutzer muss die Möglichkeit haben den Status jeder Gruppe abzurufen.</td>
              </tr>
              <tr>
                <th>REQ 14</th>
                  <td>Der Nutzer soll die Möglichkeit haben eine Tages-, Wochen-, Monats-, und Jahresstatistik für die gesammelten 
                    Daten der Fußmatte abzurufen.</td>
              </tr>
              <tr>
                <th>REQ 15</th>
                  <td>Der Nutzer muss die aktuelle Besucherzahl abrufen können.</td>
              </tr>
              <tr>
                <th>REQ 16</th>
                  <td>Der Nutzer soll die Möglichkeit haben, die Anzeige der Fußmatte zu ändern, wenn die maximale Besucherzahl erreicht ist.</td>
              </tr>
              <tr>
                <th>REQ 17</th>
                  <td>Der Nutzer muss die Fußmatte im freien benutzen können.</td>
              </tr>
              <tr>
                <th>REQ 18</th>
                  <td>Der Geschäftskunde muss die Anzeige der Fußmatte bei unterschiedlichen Lichtbedingungen gut erkennen können.</td>
              </tr>
              <tr >
                <th style="border-bottom: 0">REQ 19</th>
                  <td style="border-bottom: 0">Die Mitarbeiter sollen die Fußmatten konfigurieren können.</td>
              </tr>
            </table>

          </div>
        </div>
      </div>
      <!--Nutzungsanforderungen section end-->

      <!--spacer 6 start-->
      <div class="d-flex" style="height: 70px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 6 end-->

      <!--Nutzungszwecke section start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <div class="col-5">
            <h1>Nutzungszwecke</h1>
            <p>
              Das Zeil eines jeden Verkäufers ist das verkaufen von Dingen. Wie also können wir diesen Prozess durch die Verwendung einer intelligenten
              Fußmatte unterstützen?
            </p>
            <p>
              Es ist wichtig, sich das Szenario nicht nur aus Sicht des Verkäufers anzuschauen. Die Kunden und Kundinnen sind im Endeffekt die, die 
              die Produkte kaufen werden. Es soll also dazu motiviert werden, Geld auszugeben und das so, dass der / die Käufer*in eine positive 
              Erfahrung hatte und gerne erneut dieses Geschäft besuchen würde. Genau hierfür könnte sich die intelligente Fußmatte äußerst gut eignen. 
              Schon deshalb, weil es sich um eine neuartige Technologie handelt, mit der der Großteil der potentiellen Kunden*innen noch nie interagiert 
              hat, ist hohes Potential für eine positive User Experience gegeben. Für den Kunden eignet sich die Matte hauptsächlich zum Sehen von 
              Information, die mit dem aktuellen Status des Geschäfts zusammenhängt. So kann der Kunde beispielweise schnell sehen, ob der Laden offen 
              ist, für wie lange er offen ist, wann er wieder öffnet, etc. Es können dem Kunden aktuelle Angebote angezeigt werden, was ebenfalls neue 
              Kunden anlocken kann. Auf Grund der aktuellen Lage ist es auch verständlich, dass der / die Nutzer*in sehen möchte, wie viele Kunden 
              momentan im Laden unterwegs sind, um eine Entscheidung zu treffen, ob es sich lohnt, den Laden zu betreten. Die Fußmatte kann über 
              Technologien verfügen, die nicht nur in der Lage ist, die Zahl der Kunden*innen anzuzeigen, sondern diese auch zu messen. Damit ist der 
              Verkäufer ebenfalls in der Lage, vollkommen automatisch den Laden bei Überbelastung temporär zu schließen und Kunden anzuzeigen, dass sie 
              doch bitte warten sollen, bis andere Kunden den Laden verlassen.
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-6">
            <img v-on:click="openImage('/img/mindmap.166fd4bf.png')" class="main-section-image" src="../../assets/mindmap.png">
            <img v-on:click="openImage('/img/UseCaseFußmatte.fed0c6aa.png')" class="main-section-image" src="../../assets/UseCaseFußmatte.png">
          </div>
        </div>
      </div>
      <!--Nutzungszwecke section end-->

      <!--spacer 7 start-->
      <div class="d-flex" style="height: 50px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 7 end-->

      <!--Erfahrungen section start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <div class="col-5">
            <h1>Physischer Prototyp</h1>
            <p>
              TODO Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut a corrupti totam tempore ducimus, commodi et doloribus 
              corporis quis autem sint expedita facilis? Error dignissimos esse ipsum debitis consectetur eos.
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-6">
            <img v-on:click="openImage('/img/UseCaseFußmatte.fed0c6aa.png')" class="main-section-image" src="../../assets/placeholder-image.png">
          </div>
        </div>
      </div>
      <!--Erfahrungen section end-->

      <!--spacer 8 start-->
      <div class="d-flex" style="height: 50px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 8 end-->

      <!--Fazit section start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <div class="col-7">
            <h1>Fazit</h1>
            <p>
              Unser Ziel war die Entwicklung eines Prototypen einer intelligenten Fußmatte und abschließend waren wir in der Lage, 
              einen solchen mit Fokus auf der Verwendung und der Realisierbarkeit zu erstellen.
            </p>
            <p>
              Der Design-Prozess war hier äußerst wichtig - von der initialen Idee hin zur Spezifizierung eines 
              Anwendungsgebietes und darüber hinaus zur Definition von Nutzungszwecken und des Erstellens eines physischen Prototypen 
              waren alle Schritte wichtig, um unser Team Punkt für Punkt zum aktuellen Status zu bringen. Wir konnten zeigen, dass eine 
              intelligente Fußmatte nicht nur realisierbar, sondern auch nützlich ist. 
            </p>
          </div>
        </div>
      </div>
      <!--Fazit section end-->

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

 table {
   margin: 0 50px 0 50px;
   padding: 10px 10px 10px 10px;
   border-radius: 9px;
 }

tr th {
   width: 100px;
   border-right: 2px solid rgb(201, 201, 201);
   border-bottom: 2px solid rgb(201, 201, 201);
 }

tr td {
   border-bottom: 2px solid rgb(201, 201, 201);
   padding-left: 20px;
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
