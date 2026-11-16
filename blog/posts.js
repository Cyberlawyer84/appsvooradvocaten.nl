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
    date: "2027-01-04",
    type: "tip",
    app: "Soulver",
    icon: "icons/soulver.png",
    link: "https://soulver.app",
    title: "Soulver: een kladblok dat met je meerekent",
    body: `<p>Soms wil je even snel iets uitrekenen zonder een spreadsheet op te tuigen: een optelsom van posten, een rentebedrag, een verdeling van kosten. <a href="https://soulver.app">Soulver</a> is een kladblok waarin je gewoon in woorden rekent. Je typt "declaratie 2.500 + 21% btw" of "350 per uur × 6,5 uur", en het antwoord verschijnt direct naast je regel. Je rekensom blijft leesbaar staan, zodat je 'm later kunt aanpassen en kunt volgen hoe je tot een bedrag kwam.</p>
<p>Dat werkt veel prettiger dan een kale rekenmachine, waarop één tikfout je het overzicht kost. Je kunt tussenresultaten een naam geven en daarmee verder rekenen ("subtotaal", "btw"), bedragen met percentages combineren en zelfs met datums en valuta werken. Voor de praktijk is het handig bij het narekenen van een declaratie, het verdelen van kosten, het uitrekenen van wettelijke rente of een simpele termijnberekening. Soulver is een betaalde app, maar het is er eentje die je waarschijnlijk vaker opent dan je vooraf denkt — als een slim kladblok dat met je meedenkt in plaats van alleen een uitkomst te geven.</p>`
  },

  {
    date: "2026-12-28",
    type: "tip",
    app: "Maccy",
    icon: "icons/maccy.png",
    link: "https://maccy.app",
    title: "Maccy: je klembordgeschiedenis binnen handbereik",
    body: `<p>Hoe vaak kopieer je iets, plak je er iets anders overheen, en ben je dat eerste kwijt? <a href="https://maccy.app">Maccy</a> onthoudt je klembordgeschiedenis, zodat je altijd terug kunt naar wat je eerder kopieerde. Eén sneltoets, en je ziet een lijstje van je laatste knipsels — tekst, links, een zaaknummer, een IBAN — waaruit je direct het juiste kiest.</p>
<p>Het klinkt klein, maar in de praktijk scheelt het de hele dag door. Bij het opstellen van een stuk kopieer je vaak meerdere dingen achter elkaar: een citaat, een vindplaats, een adres. Met Maccy hoef je niet steeds heen en weer te springen om elk item apart op te halen — je plakt ze in de volgorde die jou uitkomt. Je kunt zoeken in je geschiedenis en veelgebruikte fragmenten vastzetten. Maccy is gratis, open source en spaarzaam met systeembronnen; het draait onzichtbaar in je menubalk. Goed om te weten: je klembord kan gevoelige gegevens bevatten, dus je kunt instellen hoe lang de geschiedenis bewaard blijft en bepaalde items uitsluiten. Een eenvoudige tool die, eenmaal in gebruik, onmisbaar aanvoelt.</p>`
  },

  {
    date: "2026-12-21",
    type: "tip",
    app: "Shottr",
    icon: "icons/shottr.png",
    link: "https://shottr.cc",
    title: "Shottr: schermafbeeldingen maken, annoteren én OCR",
    body: `<p>Een schermafbeelding maken doe je op de Mac zo, maar er iets mee dóén — een pijl zetten, een passage markeren, gevoelige gegevens wegvegen — is met de ingebouwde tools omslachtig. <a href="https://shottr.cc">Shottr</a> maakt dat razendsnel. Je maakt een schermafbeelding en kunt er meteen in tekenen: pijlen, kaders, tekst, nummering, en een blur-gereedschap om namen of bedragen onleesbaar te maken voordat je iets deelt.</p>
<p>Twee functies springen eruit voor juridisch werk. De ingebouwde tekstherkenning (OCR) laat je tekst uit een afbeelding of scan kopiëren — handig als je snel een passage uit een gefotografeerd stuk wilt overnemen. En met de meetfunctie kun je exact aanwijzen, bijvoorbeeld in een plattegrond of tekening. Shottr is licht, pijlsnel en — fijn detail — gratis voor persoonlijk gebruik. Alles gebeurt lokaal op je Mac; er gaat niets naar een server. Voor wie regelmatig een stuk van het scherm moet vastleggen, annoteren en veilig delen, is dit een klein gereedschap dat je verrassend vaak zult gebruiken.</p>`
  },

  {
    date: "2026-12-14",
    type: "tip",
    app: "Raycast",
    icon: "icons/raycast.png",
    link: "https://www.raycast.com",
    title: "Raycast: je hele Mac bedienen vanaf één balk",
    body: `<p><a href="https://www.raycast.com">Raycast</a> vervangt de ingebouwde Spotlight-zoekbalk door een razendsnelle commandobalk die veel meer kan. Met één sneltoets roep je 'm op en typ je wat je wilt: een app openen, een bestand zoeken, een berekening maken, je agenda checken, een tekstfragment plakken of een venster verplaatsen — zonder je handen van het toetsenbord te halen.</p>
<p>Waar het echt tijd bespaart, is de optelsom van kleine dingen. In plaats van met de muis door mappen en menu's te klikken, typ je een paar letters en ben je er. Je kunt vaste tekstblokken (snippets) instellen voor zinnen die je steeds opnieuw typt, een klembordgeschiedenis raadplegen, en met uitbreidingen koppelingen maken naar diensten die je gebruikt. Voor een drukke praktijk waarin je de hele dag schakelt tussen stukken, e-mail en agenda, houdt Raycast je in een rustige, toetsenbord-gedreven flow. De basis is gratis en in een paar minuten ingericht; je hoeft niet alles tegelijk te leren, maar kunt stap voor stap ontdekken welke commando's jou het meeste opleveren. Eenmaal gewend, wil je niet meer terug naar klikken.</p>`
  },

  {
    date: "2026-12-07",
    type: "tip",
    app: "Cryptomator",
    icon: "icons/cryptomator.png",
    link: "https://cryptomator.org",
    title: "Cryptomator: vertrouwelijke stukken versleuteld in de cloud",
    body: `<p>Veel advocaten bewaren stukken in de cloud — iCloud, Dropbox, OneDrive — voor het gemak van overal toegang. Maar vertrouwelijke dossiers zomaar bij een clouddienst neerzetten, voelt ongemakkelijk. <a href="https://cryptomator.org">Cryptomator</a> lost dat op: het versleutelt je bestanden vóórdat ze de deur uit gaan, zodat de clouddienst alleen onleesbare brij ziet. Jij werkt gewoon met een normale map (een "kluis"), en Cryptomator regelt de versleuteling op de achtergrond.</p>
<p>De sleutel ligt bij jou, beschermd met een wachtwoord dat je zelf kiest; niemand anders — ook de clouddienst niet — kan erbij. Dat sluit precies aan bij het beroepsgeheim en de eisen die je aan gegevensbescherming stelt. Cryptomator is gratis en open source, wat betekent dat de werking controleerbaar is en niet afhankelijk van de beloftes van één bedrijf. Het werkt op je Mac, maar ook op Windows, iPhone en Android, dus je opent je kluis overal. Het instellen is een kwestie van minuten: kluis aanmaken, wachtwoord kiezen, bestanden erin zetten. Voor wie de cloud wil gebruiken zonder zijn vertrouwelijkheid op te geven, is dit een geruststellende, laagdrempelige oplossing.</p>`
  },

  {
    date: "2026-11-30",
    type: "tip",
    app: "Timing",
    icon: "icons/timing.png",
    link: "https://timingapp.com",
    title: "Timing: declarabele uren zonder timers die je vergeet",
    body: `<p>Declarabele uren bijhouden is een noodzakelijk kwaad: je bent zo verdiept in een zaak dat je vergeet de teller te starten, en achteraf reconstrueren wordt giswerk. <a href="https://timingapp.com">Timing</a> draait dat om. De app registreert automatisch op de achtergrond waar je je tijd aan besteedt — welke documenten, apps en websites je gebruikt en hoe lang — zonder dat je zelf een timer hoeft te starten of stoppen.</p>
<p>Aan het eind van de dag of week zie je een helder overzicht en sleep je die blokken naar de juiste zaak of klant. Omdat de meting op feiten berust in plaats van op je geheugen, mis je veel minder uren — en dat tikt aan. Je kunt projecten en tarieven instellen en een nette rapportage exporteren voor je administratie. Alles blijft lokaal op je Mac; Timing stuurt je activiteit niet naar een externe server, wat voor vertrouwelijk werk belangrijk is. Het is een betaalde app, maar voor wie op uurbasis werkt, verdient nauwkeurige tijdregistratie zichzelf snel terug. Geen timers meer die je vergeet — gewoon werken, en achteraf bijboeken wat je werkelijk hebt gedaan.</p>`
  },

  {
    date: "2026-11-23",
    type: "tip",
    app: "Hazel",
    icon: "icons/hazel.png",
    link: "https://www.noodlesoft.com",
    title: "Hazel: je downloadmap die zichzelf opruimt",
    body: `<p>Je downloadmap is waarschijnlijk een chaos: bonnetjes, processtukken, scans en screenshots die zich opstapelen tot je er niets meer in terugvindt. <a href="https://www.noodlesoft.com">Hazel</a> ruimt dat automatisch voor je op. Je stelt eenvoudige regels in — "als een bestand 'factuur' heet, verplaats het naar map Administratie" of "als er een zaaknummer in de naam staat, zet het in de juiste dossiermap" — en Hazel voert ze op de achtergrond uit zodra er een bestand binnenkomt.</p>
<p>Het mooie is dat je geen enkele programmeerkennis nodig hebt: je bouwt de regels met keuzemenu's. Je kunt bestanden laten hernoemen volgens een vast patroon (bijvoorbeeld datum + omschrijving), sorteren op type, oude bestanden archiveren of de prullenbak periodiek legen. Voor wie met een vaste mappenstructuur per dossier werkt, is dat goud waard: je downloadt een stuk, en het staat even later vanzelf op de juiste plek, netjes hernoemd. Je bespaart er elke week kleine handelingen mee die samen flink oplopen. Hazel draait stil op de achtergrond en vraagt na het instellen vrijwel geen aandacht meer — precies wat je wilt van een opruimhulp.</p>`
  },

  {
    date: "2026-11-16",
    type: "tip",
    app: "DEVONthink",
    icon: "icons/devonthink.png",
    link: "https://www.devontechnologies.com/apps/devonthink",
    title: "DEVONthink: al je dossierstukken in één doorzoekbare database",
    body: `<p>Wie jaren praktijk voert, verzamelt bergen digitale stukken: processtukken, jurisprudentie, correspondentie, scans. <a href="https://www.devontechnologies.com/apps/devonthink">DEVONthink</a> is een krachtige documentdatabase die al dat materiaal op één plek bewaart, doorzoekbaar maakt en slim ordent. Je sleept bestanden erin — PDF's, e-mails, webpagina's, notities — en de app houdt alles overzichtelijk in mappen en groepen, met een razendsnelle zoekfunctie die ook ín de tekst van je documenten kijkt.</p>
<p>Voor de juridische praktijk zijn twee dingen bijzonder nuttig. Ten eerste de ingebouwde OCR: gescande stukken worden automatisch doorzoekbaar, zodat je later op een naam of zaaknummer kunt zoeken in plaats van map voor map te spitten. Ten tweede de slimme groepen, die verwante documenten bij elkaar brengen — handig als een dossier uit tientallen losse stukken bestaat. Alles staat lokaal op je Mac (met optionele versleutelde synchronisatie), wat prettig aansluit bij het beroepsgeheim. DEVONthink is niet de goedkoopste of de simpelste app, en je moet even de tijd nemen om 'm in te richten. Maar wie serieus veel stukken beheert, krijgt er een digitaal archief voor terug dat meegroeit met je praktijk.</p>`
  },

  {
    date: "2026-11-09",
    type: "tip",
    app: "TaskTab",
    icon: "icons/tasktab.png",
    link: "https://fiplab.com/apps/task-tab-for-mac",
    title: "TaskTab: je takenlijst binnen handbereik in de menubalk",
    body: `<p>Een advocaat jongleert de hele dag met losse to-do's: een termijn die loopt, een cliënt die teruggebeld moet worden, een stuk dat nog de deur uit moet. TaskTab houdt die lijst binnen handbereik vanuit je menubalk — één klik of een sneltoets, en je voegt iets toe of vinkt iets af, zonder een apart programma te openen of je werk te onderbreken.</p>
<p>Het is bewust simpel: taken toevoegen, afvinken, herordenen, en desgewenst een teller in de menubalk die laat zien hoeveel er nog openstaan. Je taken synchroniseren via iCloud naar je andere Macs, zodat je lijst overal hetzelfde is. Geen ingewikkeld projectsysteem met mappen en labels, maar precies genoeg om door de dag te komen. Voor wie de losse eindjes van een drukke praktijk overzichtelijk wil houden zonder een zwaar takenpakket op te tuigen, is dit een rustgevende, lichte oplossing die altijd één blik weg is.</p>`
  },

  {
    date: "2026-11-02",
    type: "tip",
    app: "AltTab",
    icon: "icons/alttab.png",
    link: "https://alt-tab-macos.netlify.app",
    title: "AltTab: wisselen tussen vensters zoals op Windows",
    body: `<p>Wie veel stukken tegelijk open heeft — een dagvaarding, het procesdossier, een browser met rechtspraak.nl — kent het ongemak van ⌘-Tab op de Mac: die wisselt tussen apps, niet tussen losse vensters. Heb je drie Word-documenten open, dan kom je er met ⌘-Tab niet gericht uit.</p>
<p>AltTab lost dat op. Met ⌥-Tab krijg je, net als op Windows, een overzicht met miniaturen van álle open vensters en spring je direct naar het juiste. Je ziet in één oogopslag wat waar staat, in plaats van blind te raden. AltTab is gratis, open source en in een paar tikken ingesteld; je kunt zelf de sneltoets en de weergave aanpassen. Samen met DockDoor (zie die tip) maakt het schakelen tussen documenten op de Mac eindelijk net zo vlot als velen van Windows gewend zijn. Voor wie de hele dag tussen stukken werkt, scheelt het verrassend veel tijd.</p>`
  },

  {
    date: "2026-10-26",
    type: "blog",
    icon: "icons/apple.png",
    title: "Waarom een Mac voor de juridische praktijk?",
    body: `<p>Ik krijg geregeld de vraag waarom ik mijn praktijk op een <a href="https://www.apple.com/mac/">Mac</a> voer. Het eerlijke antwoord is een combinatie van rust, veiligheid en samenhang. Een Mac werkt jarenlang vlot, krijgt lang updates en hangt veel minder vaak vast op precies het verkeerde moment — vlak voor een deadline of ter zitting.</p>
<p>Voor een advocaat weegt veiligheid zwaar. macOS is van de grond af opgebouwd met beveiliging als uitgangspunt: apps draaien afgeschermd van elkaar, de schijf is standaard versleuteld en Apple verdient zijn geld met hardware in plaats van met jouw gegevens. Die aandacht voor privacy sluit naadloos aan bij het beroepsgeheim.</p>
<p>Minstens zo belangrijk is hoe prettig het systeem werkt. Apple besteedt enorme aandacht aan detail en bedieningsgemak — niet als opsmuk, maar omdat, in de woorden van Steve Jobs, "design is how it works". Functies die vanzelf op hun plek vallen, schelen je elke dag kleine frustraties. En het ecosysteem maakt het af: wat binnenkomt op je iPhone werk je 's avonds af op je Mac, met je aantekeningen, agenda en contacten overal synchroon.</p>
<p>Daar komt een nieuwe ontwikkeling bij: veel van de interessantste AI-toepassingen verschijnen tegenwoordig Mac-first, vaak draaiend op de eigen chips van Apple en lokaal op je apparaat — precies wat je wilt als je met vertrouwelijke stukken werkt. Samen met het rijke aanbod aan kleine, doordachte apps dat deze blog laat zien, maakt dat de Mac voor mijn manier van werken de prettigste én veiligste basis. Geen enkel systeem is perfect, maar voor de juridische praktijk komt dit wat mij betreft het dichtst in de buurt.</p>`
  },

  {
    date: "2026-10-19",
    type: "blog",
    icon: "icons/maps.png",
    title: "Waarom ik Apple Kaarten gebruik in plaats van Google Maps",
    body: `<p>Voor het opzoeken van een adres of de reistijd naar een zitting greep ik vroeger automatisch naar Google Maps. Inmiddels gebruik ik standaard <a href="https://www.apple.com/maps/">Apple Kaarten</a>, en de belangrijkste reden is privacy. Apple koppelt je zoekopdrachten niet aan een persoonlijk profiel en bewaart je precieze locatie niet één-op-één. Voor wie beroepshalve met vertrouwelijke zaken bezig is, voelt dat juister.</p>
<p>Inhoudelijk is het verschil klein geworden: kaartmateriaal, routes en reistijden zijn ruim voldoende voor dagelijks gebruik, en de integratie met de rest van de Mac en iPhone is naadloos. Niet voor niets bouwen mijn eigen apps Afstanden en RitLog op dezelfde Apple-kaarttechnologie. Google Maps blijft sterker in zeer uitgebreide bedrijfsinformatie en reviews — maar voor het werk van een advocaat weegt de privacy van Apple Kaarten wat mij betreft zwaarder.</p>`
  },

  {
    date: "2026-10-12",
    type: "tip",
    app: "GoodNotes",
    icon: "icons/goodnotes.png",
    link: "https://www.goodnotes.com",
    title: "GoodNotes: met de hand aantekeningen maken op je dossier",
    body: `<p>Wie het prettig vindt om met de hand aantekeningen te maken, maar het papier wil loslaten, zit met GoodNotes goed — vooral in combinatie met een iPad en een Apple Pencil. Je importeert een pdf van een processtuk of dossier en schrijft, markeert en tekent er met de hand overheen, alsof je op papier werkt.</p>
<p>Ter zitting is dat ideaal: je hebt je hele dossier digitaal bij je, doorzoekbaar, en je handgeschreven notities staan meteen bij het juiste stuk. Geschreven tekst is bovendien doorzoekbaar, en alles synchroniseert naar je andere apparaten. Voor advocaten die graag schrijven maar af willen van stapels papier, is het de meest natuurlijke overstap naar digitaal werken — zonder het gevoel kwijt te raken dat een pen je geeft.</p>`
  },

  {
    date: "2026-10-05",
    type: "tip",
    app: "macOS Tekstvervanging",
    nodisc: true,
    icon: "icons/tekstvervanging.png",
    link: "https://support.apple.com/guide/mac-help/replace-text-punctuation-documents-mac-mh35735/mac",
    title: "Gratis ingebouwd: Tekstvervanging in macOS",
    body: `<p>Voor je een app installeert: macOS heeft zelf een handige tekstvervanging aan boord. Via Systeeminstellingen → Toetsenbord → Tekstvervanging stel je afkortingen in die automatisch worden uitgeschreven. Typ je <em>mvg</em>, dan maakt je Mac er 'Met vriendelijke groet' van; <em>tel</em> wordt je telefoonnummer.</p>
<p>Het werkt in de meeste Apple-programma's en synchroniseert via iCloud naar je iPhone en iPad, zodat je afkortingen overal hetzelfde zijn. Voor wie net begint is dit de makkelijkste manier om tijd te winnen met vaste teksten, zonder extra software. Loop je tegen de grenzen aan — opmaak, langere fragmenten, meer logica — dan is een app als aText de volgende stap (zie die tip). Maar verbaas je hoe ver je komt met deze gratis functie die al op je Mac staat.</p>`
  },

  {
    date: "2026-09-28",
    type: "tip",
    app: "Swish",
    icon: "icons/swish.png",
    link: "https://highlyopinionated.co/swish/",
    title: "Swish: vensters ordenen met trackpad-gebaren",
    body: `<p>Swish laat je vensters beheren met simpele veegbewegingen op je trackpad. Veeg met twee vingers over de titelbalk van een venster naar links, en het neemt netjes de linkerhelft van je scherm in; naar boven voor schermvullend; naar beneden om te minimaliseren. Je hoeft geen knopjes meer te zoeken.</p>
<p>Voor juridisch werk is het verdelen van je scherm goud waard: het procesdossier links, je conceptstuk rechts, en je hoeft niet meer eindeloos te schakelen. Eenmaal in de vingers gaat het sneller dan welke knop of sneltoets dan ook. Swish is een eenmalige aankoop, en het verandert merkbaar hoe vlot je met meerdere documenten tegelijk werkt — wat voor advocaten eerder regel dan uitzondering is.</p>`
  },

  {
    date: "2026-09-21",
    type: "tip",
    app: "OnlyOffice",
    icon: "icons/onlyoffice.png",
    link: "https://www.onlyoffice.com",
    title: "OnlyOffice: een gratis pakket dat met Word-bestanden overweg kan",
    body: `<p>OnlyOffice is een gratis kantoorpakket dat opvalt door één ding dat er voor juristen echt toe doet: het gaat goed om met Word-bestanden (.docx) en houdt de opmaak netjes intact. Juist bij processtukken met kopjes, nummering en voetnoten is dat cruciaal.</p>
<p>Je hebt teksten, rekenbladen en presentaties in één programma, met een vertrouwde indeling. Voor wie incidenteel een document opent of opstelt is het een prima volwaardig alternatief; werk je in een groot kantoor met een vaste Office-omgeving, dan ligt aansluiten daarbij meer voor de hand. Maar als zelfstandige of klein kantoor scheelt het een terugkerende abonnementspost, zonder dat je inlevert op uitwisselbaarheid met de rest van de juridische wereld.</p>
<p>Er is ook een principiëlere kant. We spreken steeds vaker over digitale soevereiniteit, maar in de praktijk grijpen de meesten van ons automatisch terug naar Microsoft. Digitale autonomie begint bij jezelf: door bewust voor een alternatief te kiezen, ook als dat even wennen is. OnlyOffice is een laagdrempelige manier om die stap te zetten zonder je werk op het spel te zetten.</p>`
  },

  {
    date: "2026-09-14",
    type: "tip",
    app: "New File Menu",
    icon: "icons/newfilemenu.png",
    link: "https://apps.apple.com/nl/app/new-file-menu/id1064959555?mt=12",
    title: "New File Menu: een nieuw bestand maken met rechtermuisklik",
    body: `<p>Op de Mac is iets simpels verrassend omslachtig: even een leeg tekstbestand of Word-document aanmaken in de map waar je al bent. Je moet eerst het programma openen, dan opslaan, dan de juiste map opzoeken. New File Menu voegt aan het rechtermuisklik-menu in Finder een optie toe om direct een nieuw bestand te maken — een leeg tekstbestand, Word, Excel, een nieuwe map vanuit je selectie, en meer.</p>
<p>Klein, maar je merkt meteen hoe vaak je het nodig had. Vooral als je per dossier snel een notitie of werkbestand wilt aanmaken op precies de juiste plek, scheelt het telkens een handvol klikken. Een typisch voorbeeld van een hulpmiddel dat één ergernis wegneemt en daarna gewoon stil zijn werk doet.</p>`
  },

  {
    date: "2026-09-07",
    type: "tip",
    app: "IINA",
    icon: "icons/iina.png",
    link: "https://iina.io",
    title: "IINA: de mediaspeler voor al je dossiervideo's",
    body: `<p>In steeds meer zaken zit beeldmateriaal: camerabeelden, een geluidsopname, een filmpje uit een telefoon. De standaard QuickTime-speler van de Mac kan veel formaten niet afspelen, waardoor je vastloopt op precies het bestand dat je nodig hebt. IINA speelt vrijwel alles af, is gratis en open source en voelt aan als een echte Mac-app.</p>
<p>Voor juridisch werk zijn vooral de details handig: je kunt beeld voor beeld door een fragment stappen, de snelheid vertragen, nauwkeurig naar een tijdstip springen en een schermafbeelding maken van een specifiek moment. Zo verwijs je in een processtuk naar het juiste tijdstempel zonder gedoe. Als je regelmatig met videomateriaal uit dossiers werkt, is IINA onmisbaar.</p>`
  },

  {
    date: "2026-08-31",
    type: "tip",
    app: "Folder Quick Look",
    icon: "icons/folderquicklook.png",
    link: "https://apps.apple.com/nl/app/folder-quick-look/id6753110395?mt=12",
    title: "Folder Quick Look: zie de inhoud van een map met de spatiebalk",
    body: `<p>De spatiebalk-voorvertoning (Quick Look) van de Mac is heerlijk: selecteer een bestand in Finder, druk op de spatiebalk en je ziet meteen een grote voorvertoning — zonder het programma te openen. Eén ding kon Quick Look van zichzelf níét: de inhoud van een map laten zien. Folder Quick Look lost dat op.</p>
<p>Met deze gratis app druk je ook op een map (of een zip-bestand) op de spatiebalk en zie je meteen wat erin zit: een nette lijst met de bestanden, die je kunt sorteren en doorbladeren. Voor wie met dossiermappen vol losse pdf's werkt, scheelt dat veel openklikken — je controleert in één oogopslag of je de juiste map te pakken hebt. Klein, gratis en precies zo'n hulpmiddel dat een oude Mac-ergernis wegneemt.</p>`
  },

  {
    date: "2026-08-24",
    type: "tip",
    app: "Folder Peek",
    icon: "icons/folderpeek.png",
    link: "https://sindresorhus.com/folder-peek",
    title: "Folder Peek: je belangrijkste mappen in de menubalk",
    body: `<p>Sommige mappen open je de hele dag door: 'Lopende zaken', je map met modellen en standaardbrieven, of de downloadmap waar binnenkomende stukken landen. Folder Peek zet zulke mappen in je menubalk, zodat je de inhoud met één klik bekijkt en een bestand opent zonder eerst een Finder-venster te zoeken.</p>
<p>Je bepaalt zelf welke mappen je toevoegt. Voor wie met een vaste mappenstructuur per dossier werkt, is het een prettige snelkoppeling die je werk net wat soepeler maakt.</p>`
  },

  {
    date: "2026-08-17",
    type: "tip",
    app: "DockDoor",
    icon: "icons/dockdoor.png",
    link: "https://dockdoor.net",
    title: "DockDoor: vensters bekijken vanuit het Dock, net als op Windows",
    body: `<p>Op Windows zie je miniaturen van open vensters als je met de muis over een programma in de taakbalk gaat. Op de Mac ontbreekt dat. DockDoor voegt het toe: beweeg je cursor over een icoon in het Dock, en je ziet voorbeelden van alle open vensters van die app, waarna je direct naar het juiste springt.</p>
<p>Wie tegelijk in meerdere documenten van hetzelfde programma werkt — drie Word-bestanden, vier pdf's — vindt zo veel sneller het juiste venster terug, zonder eerst alles te hoeven openklikken. DockDoor is gratis en open source. Samen met AltTab (zie die tip) maakt het schakelen tussen vensters op de Mac eindelijk net zo vlot als veel mensen van Windows gewend zijn.</p>`
  },

  {
    date: "2026-08-10",
    type: "tip",
    app: "DaisyDisk",
    icon: "icons/daisydisk.png",
    link: "https://daisydiskapp.com",
    title: "DaisyDisk: zie in één oogopslag waar je schijf vol mee zit",
    body: `<p>Op een gegeven moment is je schijf vol, en macOS vertelt je niet duidelijk waardoor. DaisyDisk scant je schijf en toont het resultaat als een kleurrijke ringgrafiek: je ziet meteen welke mappen en bestanden de meeste ruimte innemen en kunt vanuit het overzicht direct opruimen.</p>
<p>Voor juristen lopen die grote slokoppen vaak op door dossiers vol gescande pdf's, foto's en — vooral — videobestanden uit strafdossiers, die al snel vele gigabytes beslaan. In plaats van blind te zoeken zie je precies waar de ruimte zit. Wees wel voorzichtig met wat je weggooit: verwijder alleen kopieën, nooit het originele dossier. DaisyDisk is betaald, maar het bespaart je de frustratie van een vastlopende, volle Mac.</p>`
  },

  {
    date: "2026-08-03",
    type: "tip",
    app: "Cotypist",
    icon: "icons/cotypist.png",
    link: "https://cotypist.app",
    title: "Cotypist: tekstsuggesties terwijl je typt — op je Mac",
    body: `<p>Wie op de telefoon gewend is aan woordvoorspelling, mist dat soms op de Mac. Cotypist brengt dat naar je bureaublad: terwijl je typt verschijnt een grijze suggestie voor de rest van je zin, die je met de Tab-toets overneemt. Het werkt in de meeste programma's waarin je tekst invoert.</p>
<p>Voor lange brieven en processtukken kan dat het tempo flink opvoeren, zeker bij terugkerende formuleringen. Belangrijk voor advocaten: Cotypist draait lokaal op je Mac en gebruikt geen cloud, dus je tekst blijft op je eigen apparaat. Het is even wennen — de suggesties zijn niet altijd raak — maar je leert al snel wanneer je ze overneemt en wanneer je gewoon doortypt. Een aanrader voor wie veel schrijft en het laatste beetje snelheid wil pakken.</p>`
  },

  {
    date: "2026-07-27",
    type: "tip",
    app: "MacWhisper",
    icon: "icons/macwhisper.png",
    link: "https://goodsnooze.gumroad.com/l/macwhisper",
    title: "MacWhisper: audio lokaal uitschrijven, zonder de cloud",
    body: `<p>MacWhisper zet audio om in tekst met het Whisper-model van OpenAI — maar dan volledig op je eigen Mac. Je sleept een geluidsbestand erin en krijgt een transcriptie terug: handig voor een ingesproken memo, een opname van een (eigen) bespreking of een geluidsfragment uit een dossier.</p>
<p>Het grote voordeel voor advocaten is dat de verwerking lokaal gebeurt: de audio hoeft je apparaat niet te verlaten, wat met het oog op het beroepsgeheim een wezenlijk verschil maakt ten opzichte van online transcriptiediensten. Knap is bovendien dat de app verschillende stemmen kan herkennen en in de transcriptie de juiste tekst aan de juiste spreker koppelt — zodat je in één oogopslag ziet wie wat zei. Voor het snel doorzoekbaar maken van lange audio is het een verrassend krachtig hulpmiddel.</p>`
  },

  {
    date: "2026-07-13",
    type: "tip",
    app: "PDF Expert",
    icon: "icons/pdfexpert.png",
    link: "https://pdfexpert.com",
    title: "PDF Expert: pdf's bewerken zoals het hoort",
    body: `<p>Het halve juridische werk speelt zich af in pdf-bestanden, en de standaard Voorvertoning van macOS schiet daarbij vaak tekort. PDF Expert is sneller en completer: je voegt pagina's samen of splitst ze, vult formulieren in, plaatst een handtekening, markeert passages en zet aantekeningen in de kantlijn. Ook tekst in een bestaande pdf aanpassen of zwartlakken (redigeren) gaat soepel.</p>
<p>Vooral dat redigeren is voor advocaten belangrijk: gegevens die je écht wilt verwijderen moeten weg zijn, niet slechts visueel afgedekt. Controleer daarom altijd of de onderliggende tekst daadwerkelijk verdwenen is. PDF Expert is betaald, maar als je dagelijks met dossiers werkt, verdient het zich snel terug in tijd en ergernis. Een goede pdf-app is misschien wel het belangrijkste stuk gereedschap op je Mac.</p>`
  },

  {
    date: "2026-07-06",
    type: "tip",
    app: "OwlOCR",
    icon: "icons/owlocr.png",
    link: "https://owlocr.com",
    title: "OwlOCR: tekst uit scans en foto's halen",
    body: `<p>Veel stukken komen binnen als scan of foto: een ingescand proces-verbaal, een schermafdruk, een gefotografeerde brief. De tekst daarin kun je niet selecteren of doorzoeken. OwlOCR herkent die tekst (OCR) en zet haar om in selecteerbare, kopieerbare tekst — vaak met één sneltoets over een deel van je scherm.</p>
<p>Handig om snel een passage uit een scan over te nemen in een processtuk, of om een ondoorzoekbaar dossier alsnog doorzoekbaar te maken. En prettig voor advocaten: OwlOCR herkent de tekst lokaal op je Mac — via de ingebouwde tekstherkenning van Apple — zodat je stukken het apparaat niet verlaten. Met het oog op het beroepsgeheim is dat een belangrijk verschil met online OCR-diensten die je documenten naar een server sturen. macOS kan overigens zélf ook tekst uit afbeeldingen lichten (de functie 'Live Tekst'), maar een aparte OCR-app is sneller en nauwkeuriger bij grotere documenten.</p>`
  },

  {
    date: "2026-06-29",
    type: "tip",
    app: "aText",
    icon: "icons/atext.png",
    link: "https://www.trankynam.com/atext/",
    title: "aText: typ standaardteksten met een paar letters",
    body: `<p>Als advocaat typ je dezelfde zinnen eindeloos opnieuw: je adresgegevens, een vaste slotformule, de aanhef aan een rechtbank, je rekeningnummer met vermelding van het dossiernummer. aText laat je daar korte afkortingen voor instellen. Typ je bijvoorbeeld <em>;slot</em>, dan verschijnt meteen je volledige ondertekening.</p>
<p>Het werkt in vrijwel elk programma — je tekstverwerker, je mail, je declaratiesysteem — en je kunt fragmenten ordenen per categorie. Voor wie veel correspondentie produceert, scheelt dat dagelijks tientallen handelingen en voorkomt het slordige fouten in vaste teksten. macOS heeft hier ook een ingebouwde variant voor (zie de tip over Tekstvervanging), maar aText is uitgebreider: het ondersteunt opmaak, afbeeldingen en hoofdletter-logica. Let op: bewaar geen wachtwoorden of gevoelige cliëntgegevens in dit soort fragmenten.</p>
<p>Liever iets anders? Bekende alternatieven zijn <a href="https://textexpander.com/">TextExpander</a> (krachtig, op abonnement), <a href="https://ergonis.com/en/typinator/">Typinator</a> (eenmalige aankoop) en het gratis, open-source <a href="https://espanso.org/">espanso</a>. Ze doen in de kern hetzelfde — kies wat bij je werkwijze en budget past.</p>`
  },

  {
    date: "2026-06-22",
    type: "tip",
    app: "Ice",
    icon: "icons/ice.png",
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
