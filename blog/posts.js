/* =======================================================================
   BLOG & TIPS — hier voeg je berichten toe.

   Elk bericht is een blok tussen { } met deze velden:

     date:  "JJJJ-MM-DD"            (verplicht — de pagina sorteert hierop)
     type:  "blog"  of  "tip"
     title: "Titel van het bericht"
     body:  `<p>Je tekst. Gebruik <p>...</p> per alinea.</p>`

   Alleen voor een tip (type: "tip") kun je ook toevoegen:
     app:    "Naam van de app"
     link:   "https://..."           (naar de app of website)

   Om een bericht toe te voegen: kopieer een heel blok (inclusief de komma),
   plak het erbij en pas de velden aan. De nieuwste verschijnt vanzelf bovenaan.

   AUTOMATISCH PUBLICEREN: een bericht met een datum in de TOEKOMST is nog
   verborgen en verschijnt vanzelf zodra die datum is bereikt. Zo kun je alle
   berichten nu klaarzetten (bijv. elke maandag een datum) en één keer pushen.
   ======================================================================= */

var POSTS = [

  {
    date: "2026-11-02",
    type: "tip",
    app: "AltTab",
    link: "https://alt-tab-macos.netlify.app",
    title: "AltTab: wisselen tussen vensters zoals op Windows",
    body: `<p>Wie veel stukken tegelijk open heeft — een dagvaarding, het procesdossier, een browser met rechtspraak.nl — kent het ongemak van ⌘-Tab op de Mac: die wisselt tussen apps, niet tussen losse vensters. Heb je drie Word-documenten open, dan kom je er met ⌘-Tab niet gericht uit.</p>
<p>AltTab lost dat op. Met ⌥-Tab krijg je, net als op Windows, een overzicht met miniaturen van álle open vensters en spring je direct naar het juiste. Je ziet in één oogopslag wat waar staat, in plaats van blind te raden. AltTab is gratis, open source en in een paar tikken ingesteld; je kunt zelf de sneltoets en de weergave aanpassen. Samen met DockDoor (zie die tip) maakt het schakelen tussen documenten op de Mac eindelijk net zo vlot als velen van Windows gewend zijn. Voor wie de hele dag tussen stukken werkt, scheelt het verrassend veel tijd.</p>`
  },

  {
    date: "2026-10-26",
    type: "blog",
    title: "Waarom een Mac voor de juridische praktijk?",
    body: `<p>Ik krijg geregeld de vraag waarom ik mijn praktijk op een <a href="https://www.apple.com/mac/">Mac</a> voer. Het eerlijke antwoord is een combinatie van rust, stabiliteit en samenhang. Een Mac werkt jarenlang vlot, krijgt lang updates en hangt veel minder vaak vast op precies het verkeerde moment — bijvoorbeeld vlak voor een deadline of ter zitting.</p>
<p>Belangrijker nog is het ecosysteem: wat je op je Mac doet, vind je terug op je iPhone en iPad. Een document dat binnenkomt op je telefoon werk je 's avonds af op je Mac; je aantekeningen, agenda en contacten lopen overal synchroon. En de aandacht die Apple aan privacy en beveiliging besteedt, sluit goed aan bij het beroepsgeheim. Daar komt bij dat er — zoals deze blog laat zien — een rijk aanbod is van kleine, doordachte apps die juist op de Mac het verschil maken. Geen enkel systeem is perfect, maar voor mijn manier van werken is de Mac de prettigste basis.</p>`
  },

  {
    date: "2026-10-19",
    type: "blog",
    title: "Waarom ik Apple Kaarten gebruik in plaats van Google Maps",
    body: `<p>Voor het opzoeken van een adres of de reistijd naar een zitting greep ik vroeger automatisch naar Google Maps. Inmiddels gebruik ik standaard <a href="https://www.apple.com/maps/">Apple Kaarten</a>, en de belangrijkste reden is privacy. Apple koppelt je zoekopdrachten niet aan een persoonlijk profiel en bewaart je precieze locatie niet één-op-één. Voor wie beroepshalve met vertrouwelijke zaken bezig is, voelt dat juister.</p>
<p>Inhoudelijk is het verschil klein geworden: kaartmateriaal, routes en reistijden zijn ruim voldoende voor dagelijks gebruik, en de integratie met de rest van de Mac en iPhone is naadloos. Niet voor niets bouwt mijn eigen app Afstanden op dezelfde Apple-kaarttechnologie. Google Maps blijft sterker in zeer uitgebreide bedrijfsinformatie en reviews — maar voor het werk van een advocaat weegt de privacy van Apple Kaarten wat mij betreft zwaarder.</p>`
  },

  {
    date: "2026-10-12",
    type: "tip",
    app: "GoodNotes",
    link: "https://www.goodnotes.com",
    title: "GoodNotes: met de hand aantekeningen maken op je dossier",
    body: `<p>Wie het prettig vindt om met de hand aantekeningen te maken, maar het papier wil loslaten, zit met GoodNotes goed — vooral in combinatie met een iPad en een Apple Pencil. Je importeert een pdf van een processtuk of dossier en schrijft, markeert en tekent er met de hand overheen, alsof je op papier werkt.</p>
<p>Ter zitting is dat ideaal: je hebt je hele dossier digitaal bij je, doorzoekbaar, en je handgeschreven notities staan meteen bij het juiste stuk. Geschreven tekst is bovendien doorzoekbaar, en alles synchroniseert naar je andere apparaten. Voor advocaten die graag schrijven maar af willen van stapels papier, is het de meest natuurlijke overstap naar digitaal werken — zonder het gevoel kwijt te raken dat een pen je geeft.</p>`
  },

  {
    date: "2026-10-05",
    type: "tip",
    app: "macOS Tekstvervanging",
    link: "https://support.apple.com/guide/mac-help/replace-text-punctuation-documents-mac-mh35735/mac",
    title: "Gratis ingebouwd: Tekstvervanging in macOS",
    body: `<p>Voor je een app installeert: macOS heeft zelf een handige tekstvervanging aan boord. Via Systeeminstellingen → Toetsenbord → Tekstvervanging stel je afkortingen in die automatisch worden uitgeschreven. Typ je <em>mvg</em>, dan maakt je Mac er 'Met vriendelijke groet' van; <em>tel</em> wordt je telefoonnummer.</p>
<p>Het werkt in de meeste Apple-programma's en synchroniseert via iCloud naar je iPhone en iPad, zodat je afkortingen overal hetzelfde zijn. Voor wie net begint is dit de makkelijkste manier om tijd te winnen met vaste teksten, zonder extra software. Loop je tegen de grenzen aan — opmaak, langere fragmenten, meer logica — dan is een app als aText de volgende stap (zie die tip). Maar verbaas je hoe ver je komt met deze gratis functie die al op je Mac staat.</p>`
  },

  {
    date: "2026-09-28",
    type: "tip",
    app: "Swish",
    link: "https://highlyopinionated.co/swish/",
    title: "Swish: vensters ordenen met trackpad-gebaren",
    body: `<p>Swish laat je vensters beheren met simpele veegbewegingen op je trackpad. Veeg met twee vingers over de titelbalk van een venster naar links, en het neemt netjes de linkerhelft van je scherm in; naar boven voor schermvullend; naar beneden om te minimaliseren. Je hoeft geen knopjes meer te zoeken.</p>
<p>Voor juridisch werk is het verdelen van je scherm goud waard: het procesdossier links, je conceptstuk rechts, en je hoeft niet meer eindeloos te schakelen. Eenmaal in de vingers gaat het sneller dan welke knop of sneltoets dan ook. Swish is een eenmalige aankoop, en het verandert merkbaar hoe vlot je met meerdere documenten tegelijk werkt — wat voor advocaten eerder regel dan uitzondering is.</p>`
  },

  {
    date: "2026-09-21",
    type: "tip",
    app: "OnlyOffice",
    link: "https://www.onlyoffice.com",
    title: "OnlyOffice: een gratis pakket dat met Word-bestanden overweg kan",
    body: `<p>Niet iedereen wil of kan een abonnement op Microsoft Office. OnlyOffice is een gratis kantoorpakket dat opvalt door één ding dat er voor juristen echt toe doet: het gaat goed om met Word-bestanden (.docx) en houdt de opmaak netjes intact. Juist bij processtukken met kopjes, nummering en voetnoten is dat cruciaal.</p>
<p>Je hebt teksten, rekenbladen en presentaties in één programma, met een vertrouwde indeling. Voor wie incidenteel een document opent of opstelt is het een prima volwaardig alternatief; werk je in een groot kantoor met een vaste Office-omgeving, dan ligt aansluiten daarbij meer voor de hand. Maar als zelfstandige of klein kantoor scheelt het een terugkerende abonnementspost, zonder dat je inlevert op uitwisselbaarheid met de rest van de juridische wereld.</p>`
  },

  {
    date: "2026-09-14",
    type: "tip",
    app: "New File Menu",
    link: "https://apps.apple.com/us/app/new-file-menu/id1064959555",
    title: "New File Menu: een nieuw bestand maken met rechtermuisklik",
    body: `<p>Op de Mac is iets simpels verrassend omslachtig: even een leeg tekstbestand of Word-document aanmaken in de map waar je al bent. Je moet eerst het programma openen, dan opslaan, dan de juiste map opzoeken. New File Menu voegt aan het rechtermuisklik-menu in Finder een optie toe om direct een nieuw bestand te maken — een leeg tekstbestand, Word, Excel, een nieuwe map vanuit je selectie, en meer.</p>
<p>Klein, maar je merkt meteen hoe vaak je het nodig had. Vooral als je per dossier snel een notitie of werkbestand wilt aanmaken op precies de juiste plek, scheelt het telkens een handvol klikken. Een typisch voorbeeld van een hulpmiddel dat één ergernis wegneemt en daarna gewoon stil zijn werk doet.</p>`
  },

  {
    date: "2026-09-07",
    type: "tip",
    app: "IINA",
    link: "https://iina.io",
    title: "IINA: de mediaspeler voor al je dossiervideo's",
    body: `<p>In steeds meer zaken zit beeldmateriaal: camerabeelden, een geluidsopname, een filmpje uit een telefoon. De standaard QuickTime-speler van de Mac kan veel formaten niet afspelen, waardoor je vastloopt op precies het bestand dat je nodig hebt. IINA speelt vrijwel alles af, is gratis en open source en voelt aan als een echte Mac-app.</p>
<p>Voor juridisch werk zijn vooral de details handig: je kunt beeld voor beeld door een fragment stappen, de snelheid vertragen, nauwkeurig naar een tijdstip springen en een schermafbeelding maken van een specifiek moment. Zo verwijs je in een processtuk naar het juiste tijdstempel zonder gedoe. Als je regelmatig met videomateriaal uit dossiers werkt, is IINA onmisbaar.</p>`
  },

  {
    date: "2026-08-31",
    type: "tip",
    app: "Folder Quick Look",
    link: "https://apps.apple.com/app/id6753110395",
    title: "Folder Quick Look: zie de inhoud van een map met de spatiebalk",
    body: `<p>De spatiebalk-voorvertoning (Quick Look) van de Mac is heerlijk: selecteer een bestand in Finder, druk op de spatiebalk en je ziet meteen een grote voorvertoning — zonder het programma te openen. Eén ding kon Quick Look van zichzelf níét: de inhoud van een map laten zien. Folder Quick Look lost dat op.</p>
<p>Met deze gratis app druk je ook op een map (of een zip-bestand) op de spatiebalk en zie je meteen wat erin zit: een nette lijst met de bestanden, die je kunt sorteren en doorbladeren. Voor wie met dossiermappen vol losse pdf's werkt, scheelt dat veel openklikken — je controleert in één oogopslag of je de juiste map te pakken hebt. Klein, gratis en precies zo'n hulpmiddel dat een oude Mac-ergernis wegneemt.</p>`
  },

  {
    date: "2026-08-24",
    type: "tip",
    app: "Folder Peek",
    link: "https://sindresorhus.com/folder-peek",
    title: "Folder Peek: je belangrijkste mappen in de menubalk",
    body: `<p>Sommige mappen open je de hele dag door: 'Lopende zaken', je map met modellen en standaardbrieven, of de downloadmap waar binnenkomende stukken landen. Folder Peek zet zulke mappen in je menubalk, zodat je de inhoud met één klik bekijkt en een bestand opent zonder eerst een Finder-venster te zoeken.</p>
<p>Het is een klein hulpmiddel, maar het haalt de tussenstap weg tussen 'ik wil dat bestand' en 'ik heb het open'. Je bepaalt zelf welke mappen je toevoegt. Voor wie met een vaste mappenstructuur per dossier werkt, is het een prettige snelkoppeling die je werk net wat soepeler maakt.</p>`
  },

  {
    date: "2026-08-17",
    type: "tip",
    app: "DockDoor",
    link: "https://dockdoor.net",
    title: "DockDoor: vensters bekijken vanuit het Dock, net als op Windows",
    body: `<p>Op Windows zie je miniaturen van open vensters als je met de muis over een programma in de taakbalk gaat. Op de Mac ontbreekt dat. DockDoor voegt het toe: beweeg je cursor over een icoon in het Dock, en je ziet voorbeelden van alle open vensters van die app, waarna je direct naar het juiste springt.</p>
<p>Wie tegelijk in meerdere documenten van hetzelfde programma werkt — drie Word-bestanden, vier pdf's — vindt zo veel sneller het juiste venster terug, zonder eerst alles te hoeven openklikken. DockDoor is gratis en open source. Samen met AltTab (zie die tip) maakt het schakelen tussen vensters op de Mac eindelijk net zo vlot als veel mensen van Windows gewend zijn.</p>`
  },

  {
    date: "2026-08-10",
    type: "tip",
    app: "DaisyDisk",
    link: "https://daisydiskapp.com",
    title: "DaisyDisk: zie in één oogopslag waar je schijf vol mee zit",
    body: `<p>Op een gegeven moment is je schijf vol, en macOS vertelt je niet duidelijk waardoor. DaisyDisk scant je schijf en toont het resultaat als een kleurrijke ringgrafiek: je ziet meteen welke mappen en bestanden de meeste ruimte innemen en kunt vanuit het overzicht direct opruimen.</p>
<p>Voor juristen lopen die grote slokoppen vaak op door dossiers vol gescande pdf's, foto's en — vooral — videobestanden uit strafdossiers, die al snel vele gigabytes beslaan. In plaats van blind te zoeken zie je precies waar de ruimte zit. Wees wel voorzichtig met wat je weggooit: verwijder alleen kopieën, nooit het originele dossier. DaisyDisk is betaald, maar het bespaart je de frustratie van een vastlopende, volle Mac.</p>`
  },

  {
    date: "2026-08-03",
    type: "tip",
    app: "Cotypist",
    link: "https://cotypist.app",
    title: "Cotypist: tekstsuggesties terwijl je typt — op je Mac",
    body: `<p>Wie op de telefoon gewend is aan woordvoorspelling, mist dat soms op de Mac. Cotypist brengt dat naar je bureaublad: terwijl je typt verschijnt een grijze suggestie voor de rest van je zin, die je met de Tab-toets overneemt. Het werkt in de meeste programma's waarin je tekst invoert.</p>
<p>Voor lange brieven en processtukken kan dat het tempo flink opvoeren, zeker bij terugkerende formuleringen. Belangrijk voor advocaten: Cotypist draait lokaal op je Mac en gebruikt geen cloud, dus je tekst blijft op je eigen apparaat. Het is even wennen — de suggesties zijn niet altijd raak — maar je leert al snel wanneer je ze overneemt en wanneer je gewoon doortypt. Een aanrader voor wie veel schrijft en het laatste beetje snelheid wil pakken.</p>`
  },

  {
    date: "2026-07-27",
    type: "tip",
    app: "MacWhisper",
    link: "https://macwhisper.net",
    title: "MacWhisper: audio lokaal uitschrijven, zonder de cloud",
    body: `<p>MacWhisper zet audio om in tekst met het Whisper-model van OpenAI — maar dan volledig op je eigen Mac. Je sleept een geluidsbestand erin en krijgt een transcriptie terug: handig voor een ingesproken memo, een opname van een (eigen) bespreking of een geluidsfragment uit een dossier.</p>
<p>Het grote voordeel voor advocaten is dat de verwerking lokaal gebeurt: de audio hoeft je apparaat niet te verlaten, wat met het oog op het beroepsgeheim een wezenlijk verschil maakt ten opzichte van online transcriptiediensten. Houd je wel aan de spelregels rond het opnemen van gesprekken — een transcriptie maken kan pas als de opname zelf rechtmatig is. Voor het snel doorzoekbaar maken van lange audio is het een verrassend krachtig hulpmiddel.</p>`
  },

  {
    date: "2026-07-20",
    type: "blog",
    title: "AI-assistenten in de praktijk: nuttig, mits zorgvuldig",
    body: `<p>Hulpmiddelen als <a href="https://claude.ai">Claude</a> en <a href="https://chatgpt.com">ChatGPT</a> kunnen in de juridische praktijk veel werk uit handen nemen: een lange uitspraak samenvatten, een eerste opzet voor een brief maken, ingewikkelde tekst toegankelijker formuleren of even sparren over een redenering. Mits je ze inzet als assistent en niet als orakel, schelen ze echt tijd.</p>
<p>Maar er zijn grenzen die voor advocaten zwaarder wegen dan voor anderen. Het beroepsgeheim staat voorop: voer geen herleidbare cliëntgegevens in zonder te weten waar die terechtkomen en of ze gebruikt worden om modellen te trainen. Werk waar mogelijk met geanonimiseerde input of met een zakelijke variant met duidelijke privacywaarborgen. En controleer altijd zelf: deze systemen kunnen overtuigend klinkende onjuistheden produceren, inclusief verwijzingen naar rechtspraak die niet bestaat. Gebruik ze om sneller een concept te krijgen — de verantwoordelijkheid voor de inhoud blijft bij jou.</p>`
  },

  {
    date: "2026-07-13",
    type: "tip",
    app: "PDF Expert",
    link: "https://pdfexpert.com",
    title: "PDF Expert: pdf's bewerken zoals het hoort",
    body: `<p>Het halve juridische werk speelt zich af in pdf-bestanden, en de standaard Voorvertoning van macOS schiet daarbij vaak tekort. PDF Expert is sneller en completer: je voegt pagina's samen of splitst ze, vult formulieren in, plaatst een handtekening, markeert passages en zet aantekeningen in de kantlijn. Ook tekst in een bestaande pdf aanpassen of zwartlakken (redigeren) gaat soepel.</p>
<p>Vooral dat redigeren is voor advocaten belangrijk: gegevens die je écht wilt verwijderen moeten weg zijn, niet slechts visueel afgedekt. Controleer daarom altijd of de onderliggende tekst daadwerkelijk verdwenen is. PDF Expert is betaald, maar als je dagelijks met dossiers werkt, verdient het zich snel terug in tijd en ergernis. Een goede pdf-app is misschien wel het belangrijkste stuk gereedschap op je Mac.</p>`
  },

  {
    date: "2026-07-06",
    type: "tip",
    app: "OwlOCR",
    link: "https://owlocr.com",
    title: "OwlOCR: tekst uit scans en foto's halen",
    body: `<p>Veel stukken komen binnen als scan of foto: een ingescand proces-verbaal, een schermafdruk, een gefotografeerde brief. De tekst daarin kun je niet selecteren of doorzoeken. OwlOCR herkent die tekst (OCR) en zet haar om in selecteerbare, kopieerbare tekst — vaak met één sneltoets over een deel van je scherm.</p>
<p>Handig om snel een passage uit een scan over te nemen in een processtuk, of om een ondoorzoekbaar dossier alsnog doorzoekbaar te maken. Let als advocaat wel op het beroepsgeheim: controleer of de herkenning lokaal op je Mac gebeurt en niet via een server, voordat je er cliëntstukken doorheen haalt. macOS kan overigens zélf ook tekst uit afbeeldingen lichten (de functie 'Live Tekst'), maar een aparte OCR-app is sneller en nauwkeuriger bij grotere documenten.</p>`
  },

  {
    date: "2026-06-29",
    type: "tip",
    app: "aText",
    link: "https://www.trankynam.com/atext/",
    title: "aText: typ standaardteksten met een paar letters",
    body: `<p>Als advocaat typ je dezelfde zinnen eindeloos opnieuw: je adresgegevens, een vaste slotformule, de aanhef aan een rechtbank, je rekeningnummer met vermelding van het dossiernummer. aText laat je daar korte afkortingen voor instellen. Typ je bijvoorbeeld <em>;slot</em>, dan verschijnt meteen je volledige ondertekening.</p>
<p>Het werkt in vrijwel elk programma — je tekstverwerker, je mail, je declaratiesysteem — en je kunt fragmenten ordenen per categorie. Voor wie veel correspondentie produceert, scheelt dat dagelijks tientallen handelingen en voorkomt het slordige fouten in vaste teksten. macOS heeft hier ook een ingebouwde variant voor (zie de tip over Tekstvervanging), maar aText is uitgebreider: het ondersteunt opmaak, afbeeldingen en hoofdletter-logica. Let op: bewaar geen wachtwoorden of gevoelige cliëntgegevens in dit soort fragmenten.</p>`
  },

  {
    date: "2026-06-22",
    type: "tip",
    app: "Ice",
    link: "https://icemenubar.app",
    title: "Ice (en Vanilla): rust in je menubalk",
    body: `<p>Hoe meer apps je gebruikt, hoe voller de menubalk bovenin je scherm raakt — met als gevolg dat je de iconen die je écht nodig hebt niet meer terugvindt. Ice brengt daar rust in. Je verbergt iconen die je zelden gebruikt achter een scheidingslijn en haalt ze met één klik weer tevoorschijn. Wat altijd zichtbaar moet blijven — bijvoorbeeld je agenda of Verhinderdata — houd je vooraan.</p>
<p>Ice is gratis en open source en in een paar minuten ingesteld. De bekendere voorloper Vanilla doet in de kern hetzelfde, maar Ice wordt actief onderhouden en biedt inmiddels meer mogelijkheden. Een kleine ingreep, maar je werkt er elke dag prettiger door — zeker op een laptop, waar de ruimte in de menubalk beperkt is.</p>`
  },

  {
    date: "2026-06-19",
    type: "blog",
    title: "Welkom",
    body: `<p>Op deze pagina deel ik nieuws over mijn eigen apps én tips over andere apps die nuttig kunnen zijn in de juridische praktijk.</p>
<p>Heb je een tip voor een app die ik moet bekijken? Laat het weten via <a href="mailto:support@appsvooradvocaten.nl">support@appsvooradvocaten.nl</a>.</p>`
  }

];
