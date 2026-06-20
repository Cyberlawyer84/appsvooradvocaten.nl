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
   ======================================================================= */

var POSTS = [

  {
    date: "2026-06-19",
    type: "blog",
    title: "Welkom",
    body: `<p>Op deze pagina deel ik nieuws over mijn eigen apps én tips over andere apps die nuttig kunnen zijn in de juridische praktijk.</p>
<p>Heb je een tip voor een app die ik moet bekijken? Laat het weten via <a href="mailto:support@appsvooradvocaten.nl">support@appsvooradvocaten.nl</a>.</p>`
  }

];
