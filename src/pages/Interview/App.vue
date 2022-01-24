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
            <h1>Interview mit Sonja Brüllke</h1>
            <!--info text-->
            <p><i>
              Sonja Brüllke ist Geschäftsleiterin eines Textileinzelhandels in Kirchheim unter Teck. Mit 30-35 
              Mitarbeitern in Voll- und Teilzeit verkaufen sie alles für Herren, Damen und Kinder. 
            </i></p>
            <!--q1-->
            <p>
              <b>Wann war der erste Moment, als Sie in ihrer Tätigkeit Einschränkungen durch die Corona-Pandemie 
                in Kauf nehmen mussten und wie haben Sie diese Zeit in Erinnerung?</b>
            </p>
            <p>
              <b>Brüllke:</b> Ist zwei Jahre her. Konnte es im ersten Moment gar nicht realisieren. Planung im Voraus. 
              War schon bitter, wenn man realisiert, was man alles nicht umsetzen kann. Man wusste gar nichtwelche Ausmaße 
              das annimmt. Arbeiten war ganz anders, da kaum jemand im Laden war. 
            </p>
            <!--q2-->
            <p>
              <b>Welche Regularien hatten Sie mit ihrem Geschäft was die Personenanzahl anging und wie haben sich diese Verändert?</b>
            </p>
            <p>
              <b>Brüllke:</b> Am Anfang durfte niemand den Laden betreten. Dann nur liefern. Dann nur zur Kasse, um abzuholen. Dann 
              bestimmte Personen pro Quadratmeter. Dann Teile absperren und in gewisser Weise aufhaben. Dann im Sommer nur Personenzählen. 
              War relativ entspannt da viel qm. Im Herbst dann eher mit Test oder Test und Impfstatus.
            </p>
            <!--q3-->
            <p>
              <b>Wie haben Sie von neuen Regularien mitbekommen bzw. wie haben Sie sich über neue Regularien informiert?</b>
            </p>
            <p>
              <b>Brüllke:</b> Über Verband. Verband informiert über neue Regularien. Newsletter vom Land Baden-Württemberg. Herr Gerber 
              (Geschäftsührer) arbeitet sich tief in die Materie ein. Am aktivsten sind Frau Gerber und ich im Haus.
            </p>
            <!--q4-->
            <p>
              <b>Wie sind sie vorgegangen, um diese Regularien einzuhalten?</b>
            </p>
            <p>
              <b>Brüllke:</b> Kunde haben Anstecker mit Smiley mitbekommen und beim Rausgehen wieder abgeben. Höchstzahl abgezählt. Problem 
              Kunden haben die Anstecker mitgenommen. Danach Sicherung, dass es Piepsen würde, wenn jemand das mit rausnimmt. D igitales System 
              kam im Herbst dazu. In Übergangszeit wurde das System eingesetzt, um Kunden zu signalisieren, ob sie reindürfen oder nicht. Heute 
              eher, um Frequenz etc. zu messen.
            </p>
            <!--q5-->
            <p>
              <b>Inwiefern wurde die Einhaltung dieser Regularien kontrolliert?</b>
            </p>
            <p>
              <b>Brüllke:</b> Hygienekonzept liegt aus. Checklisten liegen an der Kasse, um Hygienekonzept einzuhalten. Ordnungsamt o.ä. hat noch 
              nicht nachgefragt bezüglich Personenanzahl.
            </p>
            <!--q6-->
            <p>
              <b>Welche Strafen würden Ihnen bei Nichteinhaltung der Regularien drohen?</b>
            </p>
            <p>
              <b>Brüllke:</b> Ganz am Anfang gab es Strafen, wenn man Kunden in den Laden gelassen. Bei uns nicht vorgekommen man hat es aber von 
              anderen Einzelhändlern mitbekommen. Es war zeitweise nicht klar, wer dafür verantwortlich ist, ob man geimpft oder genesen ist. Zunächst 
              war Kunde selbst verantwortlich und dieser hätte auch eine Strafe zahlen müssen.
            </p>
            <!--q7-->
            <p>
              <b>Mussten Sie bereits Kunden aus dem Laden verweisen, weil sich bereits zu viele Leute im Laden befanden und wenn ja, wie reagierten 
                diese darauf?</b>
            </p>
            <p>
              <b>Brüllke:</b> Kunden waren teilweise nicht einverstanden mit Maßnahmen. Gerade Maske tragen. Dort musste auch eine Person mit der Polizei 
              des Ladens verwiesen werden.Wir konnten eigentlich immer alle rein lassen, da der Laden ziemlich groß ist. An einem Samstag war es vielleicht
              mal, dass man warten musste, bis jemand raus geht. Im Großen und Ganzen gab es da aber keine Probleme.
            </p>
            <!--q8-->
            <p>
              <b>Hatten Sie das Gefühl, dass Ihre Kunden die Regeln verstanden haben?</b>
            </p>
            <p>
              <b>Brüllke:</b> Die Kunden waren selbst meist überfragt was gilt und was nicht. Man wusste es als Händler schon teilweise nicht so genau. 
              Personenbeschränkung wurde über Social-Media, über Google und Lokal kommuniziert. Es wurde mit Absperrungen gearbeitet, um 
              Personenbeschränkung kontrollieren zu können.
            </p>
            <!--q9-->
            <p>
              <b>Welche Aufgaben sollten ihrer Meinung nach ein System bewältigen können, welches die Personenanzahl überwacht?</b>
            </p>
            <p>
              <b>Brüllke:</b>
              <ul>
                <li>Sicheres Zählen</li>
                <li>Darf nicht zu globig sein</li>
                <li>Keine baulichen Maßnahmen um System betreiben zu können</li>
                <li>Mit Warenwirtschaftssystem kompatibel</li>
                <li>Uns interessieren Schaubilder nicht so arg. Frequenz und Conversionrate ist interessant.Wenn nicht an 
                  Warenwirtschaftssystem, dann Frequenzen auf jeden Fall sinnvoll</li>
                <li>Perfekt wäre, wenn Mitarbeiter nicht gezählt werden würden</li>
                <li>Umso genauer Conversionrate desto besser</li>
              </ul>
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-5">
            <img class="main-section-image" src="../../assets/interviewee2.jpg">
          </div>
        </div>
      </div>
      <!--main section 1 end-->

      <!--spacer 2 start-->
      <div class="d-flex" style="height: 180px; background-color: rgba(0,0,0,0)"></div>
      <!--spacer 2 end-->

      <!--main section 2 start-->
      <div class="main-section">
        <div style="background-color:" class='row'>
          <div class="col-6">
            <h1>Interview mit Ralf Gerber</h1>
            <!--info text-->
            <p><i>
              Ralf Gerber ist Geschäftsleiter eines Männermodehauses in Kirchheim unter Teck, in dem Marken der mittleren und 
              höheren Preissegmente angeboten werden. Das Geschäft verfügt über eine Verkaufsfläche von ca. 500 Quadratmetern. 
            </i></p>
            <!--q1-->
            <p>
              <b>Wann war der erste Moment, als Sie in ihrer Tätigkeit Einschränkungen durch die Corona-Pandemie 
                in Kauf nehmen mussten und wie haben Sie diese Zeit in Erinnerung?</b>
            </p>
            <p>
              <b>Gerber:</b> Samstag, 07.März 2020. Privat. Berufspolitiker hat mitgeteilt, dass ich mich auf Ladenschließung einstellen muss.
            </p>
            <!--q2-->
            <p>
              <b>Welche Regularien hatten Sie mit ihrem Geschäft was die Personenanzahl anging und wie haben sich diese Verändert?</b>
            </p>
            <p>
              <b>Gerber:</b> Ca. 20-40qm Fläche pro Kunde; Regularien waren anhand des Infektionsgeschehens gestaffelt. Kontaktdatenformular von 
              allen Kunden. Masken. Lange zu gehabt. Termine mit Kunden.
            </p>
            <!--q3-->
            <p>
              <b>Wie haben Sie von neuen Regularien mitbekommen bzw. wie haben Sie sich über neue Regularien informiert?</b>
            </p>
            <p>
              <b>Gerber:</b> Über den Verband. Handelsverband Baden-Württemberg. Fast täglicher Newsletter. Täglich Information über neue Regularien.
            </p>
            <!--q4-->
            <p>
              <b>Wie sind sie vorgegangen, um diese Regularien einzuhalten?</b>
            </p>
            <p>
              <b>Gerber:</b> Am Anfang händisch. Einlaminierte Tafeln. Standen auf dem Tisch. Wenn ein Kunde in den Laden kam, wurde eine Tafel in eine 
              Prospekthalterung gestellt. Und andersrum, wenn die Person den Laden verlassen hat.
            </p>
            <!--q5-->
            <p>
              <b>Inwiefern wurde die Einhaltung dieser Regularien kontrolliert?</b>
            </p>
            <p>
              <b>Gerber:</b> Bisher wurde die Einhaltung der Regularien nicht kontrolliert. Ist aber sehr Standortabhängig. Wir haben und stehts penibel 
              an die Regularien gehalten und haben somit auch kein Grund gegeben uns zu kontrollieren.
            </p>
            <!--q6-->
            <p>
              <b>Welche Strafen würden Ihnen bei Nichteinhaltung der Regularien drohen?</b>
            </p>
            <p>
              <b>Gerber:</b> Es gibt Strafen, da wir die Maßnahmen stringent einhalten habe ich mich damit aber nicht näher befasst.
            </p>
            <!--q7-->
            <p>
              <b>Mussten Sie bereits Kunden aus dem Laden verweisen, weil sich bereits zu viele Leute im Laden befanden und wenn ja, wie reagierten 
                diese darauf?</b>
            </p>
            <p>
              <b>Gerber:</b> Ja. War am Anfang sehr schwierig, da auch Kunden Termine ausmachen mussten. „Einer goscht immer“; Es war eine schwierige 
              Situation. Vor allem, wenn der vorherige Gast länger braucht.
            </p>
            <!--q8-->
            <p>
              <b>Hatten Sie das Gefühl, dass Ihre Kunden die Regeln verstanden haben?</b>
            </p>
            <p>
              <b>Brüllke:</b> Die große Mehrheit hat die geltenden Regularien verstanden. 
            </p>
            <!--q9-->
            <p>
              <b>Welche Aufgaben sollten ihrer Meinung nach ein System bewältigen können, welches die Personenanzahl überwacht?</b>
            </p>
            <p>
              <b>Brüllke:</b> Wir begleiten unsere Kunden zur Tür da wäre es gut, wenn wir nicht als Kunden identifiziert würden. Oder wenn man mit 
              dem Kunden rausgeht. Fußmatte ist eine schwierige Sache wegen der Position. Eigentlich müsste jeder Mitarbeiter ein Tracker haben. 
            </p>
            <!--q10-->
            <p>
              <b>Was wird mit bisherigem System gemessen?</b>
            </p>
            <p>
              <b>Brüllke:</b> Wie viele Kunden da sind, täglich und monatlich. Wird über Kamera gemessen. Wie viel Kunden noch rein dürfen wird auf einem 
              Bildschirm angezeigt. Problem: Teilweise wurde die Tür erfasst als Person, weil es eine schwingende Tür ist.
            </p>
          </div>
          <div class="col-1"></div>
          <div class="col-5">
            <img class="main-section-image" src="../../assets/interviewee1.jpg">
          </div>
        </div>
      </div>
      <!--main section 2 end-->

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
