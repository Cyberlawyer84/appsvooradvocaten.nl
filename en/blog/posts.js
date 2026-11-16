/* =======================================================================
   BLOG & TIPS — add your posts here.

   Each post is a block between { } with these fields:

     date:  "YYYY-MM-DD"            (required — the page sorts on this)
     type:  "blog"  or  "tip"
     title: "Title of the post"
     body:  `<p>Your text. Use <p>...</p> per paragraph.</p>`

   Only for a tip (type: "tip") you can also add:
     app:    "Name of the app"
     link:   "https://..."           (to the app or website)

   To add a post: copy a whole block (including the comma), paste it in and
   edit the fields. The newest one automatically appears at the top.

   AUTOMATIC PUBLISHING: a post with a date in the FUTURE is still hidden
   and appears automatically as soon as that date is reached. This way you
   can queue up all posts now (e.g. a date every Monday) and push once.
   ======================================================================= */

var POSTS = [

  {
    date: "2027-01-04",
    type: "tip",
    app: "Soulver",
    icon: "/blog/icons/soulver.png",
    link: "https://soulver.app",
    title: "Soulver: a notepad that does the maths with you",
    body: `<p>Sometimes you just want to work something out quickly without setting up a spreadsheet: a sum of items, an interest amount, a split of costs. <a href="https://soulver.app">Soulver</a> is a notepad in which you simply calculate in words. You type "fee 2,500 + 21% VAT" or "350 per hour × 6.5 hours", and the answer appears right next to your line. Your calculation stays readable, so you can adjust it later and follow how you arrived at an amount.</p>
<p>That works far more pleasantly than a bare calculator, where one typo costs you the overview. You can give intermediate results a name and keep calculating with them ("subtotal", "VAT"), combine amounts with percentages, and even work with dates and currencies. For legal practice it's handy when checking a fee, splitting costs, working out statutory interest or a simple deadline calculation. Soulver is a paid app, but it's one you'll probably open more often than you expect beforehand — like a smart notepad that thinks along with you instead of just handing you an answer.</p>`
  },

  {
    date: "2026-12-28",
    type: "tip",
    app: "Maccy",
    icon: "/blog/icons/maccy.png",
    link: "https://maccy.app",
    title: "Maccy: your clipboard history within reach",
    body: `<p>How often do you copy something, paste something else over it, and lose that first thing? <a href="https://maccy.app">Maccy</a> remembers your clipboard history, so you can always go back to what you copied earlier. One shortcut, and you see a list of your latest clippings — text, links, a case number, an IBAN — from which you pick the right one directly.</p>
<p>It sounds small, but in practice it helps throughout the day. When drafting a document you often copy several things in a row: a quotation, a citation, an address. With Maccy you don't have to keep jumping back and forth to fetch each item separately — you paste them in the order that suits you. You can search your history and pin frequently used fragments. Maccy is free, open source and easy on system resources; it runs invisibly in your menu bar. Good to know: your clipboard can contain sensitive data, so you can set how long the history is kept and exclude certain items. A simple tool that, once in use, feels indispensable.</p>`
  },

  {
    date: "2026-12-21",
    type: "tip",
    app: "Shottr",
    icon: "/blog/icons/shottr.png",
    link: "https://shottr.cc",
    title: "Shottr: take screenshots, annotate them and OCR",
    body: `<p>Taking a screenshot on a Mac is easy, but actually doing something with it — adding an arrow, highlighting a passage, wiping out sensitive data — is cumbersome with the built-in tools. <a href="https://shottr.cc">Shottr</a> makes that lightning-fast. You take a screenshot and can draw on it right away: arrows, boxes, text, numbering, and a blur tool to make names or amounts unreadable before you share anything.</p>
<p>Two features stand out for legal work. The built-in text recognition (OCR) lets you copy text out of an image or scan — handy when you quickly want to take a passage from a photographed document. And with the measuring tool you can point precisely, for example in a floor plan or drawing. Shottr is light, lightning-fast and — a nice detail — free for personal use. Everything happens locally on your Mac; nothing goes to a server. For anyone who regularly has to capture, annotate and safely share part of their screen, this is a small tool you'll use surprisingly often.</p>`
  },

  {
    date: "2026-12-14",
    type: "tip",
    app: "Raycast",
    icon: "/blog/icons/raycast.png",
    link: "https://www.raycast.com",
    title: "Raycast: run your whole Mac from a single bar",
    body: `<p><a href="https://www.raycast.com">Raycast</a> replaces the built-in Spotlight search bar with a lightning-fast command bar that can do much more. With one shortcut you call it up and type what you want: open an app, find a file, do a calculation, check your calendar, paste a text snippet or move a window — without taking your hands off the keyboard.</p>
<p>Where it really saves time is the sum of small things. Instead of clicking through folders and menus with your mouse, you type a few letters and you're there. You can set up fixed text blocks (snippets) for sentences you type over and over, consult a clipboard history, and use extensions to link to the services you use. For a busy practice in which you switch between documents, email and calendar all day, Raycast keeps you in a calm, keyboard-driven flow. The basics are free and set up in a few minutes; you don't have to learn everything at once, but can discover step by step which commands pay off most for you. Once you're used to it, you won't want to go back to clicking.</p>`
  },

  {
    date: "2026-12-07",
    type: "tip",
    app: "Cryptomator",
    icon: "/blog/icons/cryptomator.png",
    link: "https://cryptomator.org",
    title: "Cryptomator: confidential documents encrypted in the cloud",
    body: `<p>Many lawyers keep documents in the cloud — iCloud, Dropbox, OneDrive — for the convenience of access anywhere. But simply putting confidential files with a cloud service feels uncomfortable. <a href="https://cryptomator.org">Cryptomator</a> solves that: it encrypts your files before they leave your device, so the cloud service only sees unreadable gibberish. You just work with a normal folder (a "vault"), and Cryptomator handles the encryption in the background.</p>
<p>The key stays with you, protected by a password you choose yourself; no one else — not even the cloud service — can get in. That fits precisely with professional confidentiality and the demands you place on data protection. Cryptomator is free and open source, which means its workings are verifiable and not dependent on the promises of a single company. It works on your Mac, but also on Windows, iPhone and Android, so you can open your vault anywhere. Setting it up takes minutes: create a vault, choose a password, put files in. For anyone who wants to use the cloud without giving up confidentiality, this is a reassuring, low-threshold solution.</p>`
  },

  {
    date: "2026-11-30",
    type: "tip",
    app: "Timing",
    icon: "/blog/icons/timing.png",
    link: "https://timingapp.com",
    title: "Timing: billable hours without timers you forget",
    body: `<p>Tracking billable hours is a necessary evil: you're so absorbed in a case that you forget to start the timer, and reconstructing it afterwards becomes guesswork. <a href="https://timingapp.com">Timing</a> turns that around. The app automatically records in the background what you spend your time on — which documents, apps and websites you use and for how long — without you having to start or stop a timer yourself.</p>
<p>At the end of the day or week you see a clear overview and drag those blocks onto the right case or client. Because the measurement is based on facts rather than your memory, you miss far fewer hours — and that adds up. You can set up projects and rates and export a tidy report for your administration. Everything stays locally on your Mac; Timing doesn't send your activity to an external server, which matters for confidential work. It's a paid app, but for anyone who works on an hourly basis, accurate time tracking quickly pays for itself. No more timers you forget — just work, and afterwards book what you actually did.</p>`
  },

  {
    date: "2026-11-23",
    type: "tip",
    app: "Hazel",
    icon: "/blog/icons/hazel.png",
    link: "https://www.noodlesoft.com",
    title: "Hazel: a Downloads folder that cleans up after itself",
    body: `<p>Your Downloads folder is probably a mess: receipts, pleadings, scans and screenshots piling up until you can't find anything. <a href="https://www.noodlesoft.com">Hazel</a> tidies that up for you automatically. You set simple rules — "if a file is called 'invoice', move it to the Administration folder" or "if there's a case number in the name, put it in the right case folder" — and Hazel runs them in the background the moment a file arrives.</p>
<p>The nice part is that you need no programming knowledge at all: you build the rules with drop-down menus. You can have files renamed to a fixed pattern (for example date + description), sorted by type, old files archived, or the trash emptied periodically. For anyone who works with a fixed folder structure per case, that's worth gold: you download a document, and moments later it's sitting in the right place, neatly renamed. It saves you small actions every week that add up considerably. Hazel runs quietly in the background and needs almost no attention after setup — exactly what you want from a tidying helper.</p>`
  },

  {
    date: "2026-11-16",
    type: "tip",
    app: "DEVONthink",
    icon: "/blog/icons/devonthink.png",
    link: "https://www.devontechnologies.com/apps/devonthink",
    title: "DEVONthink: all your case documents in one searchable database",
    body: `<p>Anyone who practices law for years accumulates mountains of digital documents: pleadings, case law, correspondence, scans. <a href="https://www.devontechnologies.com/apps/devonthink">DEVONthink</a> is a powerful document database that keeps all of it in one place, makes it searchable and organises it intelligently. You drag files in — PDFs, emails, web pages, notes — and the app keeps everything tidy in folders and groups, with a lightning-fast search that also looks inside the text of your documents.</p>
<p>Two things are especially useful for legal work. First, the built-in OCR: scanned documents become searchable automatically, so later you can search for a name or case number instead of digging through folder after folder. Second, the smart groups, which bring related documents together — handy when a file consists of dozens of separate documents. Everything stays locally on your Mac (with optional encrypted syncing), which fits nicely with professional confidentiality. DEVONthink isn't the cheapest or the simplest app, and you need to take some time to set it up. But anyone who seriously manages a lot of documents gets a digital archive in return that grows with your practice.</p>`
  },

  {
    date: "2026-11-09",
    type: "tip",
    app: "TaskTab",
    icon: "/blog/icons/tasktab.png",
    link: "https://fiplab.com/apps/task-tab-for-mac",
    title: "TaskTab: your to-do list within reach in the menu bar",
    body: `<p>A lawyer juggles loose to-dos all day long: a deadline that's running, a client who needs a call back, a document that still has to go out. TaskTab keeps that list within reach from your menu bar — one click or a shortcut, and you add something or check it off, without opening a separate program or interrupting your work.</p>
<p>It's deliberately simple: add tasks, check them off, reorder them, and optionally a counter in the menu bar showing how many are still open. Your tasks sync via iCloud to your other Macs, so your list is the same everywhere. Not a complicated project system with folders and labels, but just enough to get through the day. For anyone who wants to keep the loose ends of a busy practice tidy without setting up a heavy task manager, this is a calming, lightweight solution that's always one glance away.</p>`
  },

  {
    date: "2026-11-02",
    type: "tip",
    app: "AltTab",
    icon: "/blog/icons/alttab.png",
    link: "https://alt-tab-macos.netlify.app",
    title: "AltTab: switch between windows like on Windows",
    body: `<p>Anyone who keeps lots of documents open at once — a writ of summons, the case file, a browser with case law — knows the annoyance of ⌘-Tab on the Mac: it switches between apps, not between individual windows. If you have three Word documents open, ⌘-Tab won't get you to the right one directly.</p>
<p>AltTab solves that. With ⌥-Tab you get, just like on Windows, an overview with thumbnails of all your open windows and you jump straight to the right one. You see at a glance what's where, instead of guessing blindly. AltTab is free, open source and set up in a few taps; you can adjust the shortcut and the display yourself. Together with DockDoor (see that tip), it finally makes switching between documents on the Mac just as smooth as many are used to from Windows. For anyone who works between documents all day, it saves a surprising amount of time.</p>`
  },

  {
    date: "2026-10-26",
    type: "blog",
    icon: "/blog/icons/apple.png",
    title: "Why a Mac for legal practice?",
    body: `<p>I regularly get asked why I run my practice on a <a href="https://www.apple.com/mac/">Mac</a>. The honest answer is a combination of calm, security and coherence. A Mac keeps running smoothly for years, gets updates for a long time and hangs far less often at exactly the wrong moment — right before a deadline or in court.</p>
<p>For a lawyer, security carries a lot of weight. macOS is built from the ground up with security as its starting point: apps run isolated from each other, the disk is encrypted by default and Apple makes its money from hardware rather than from your data. That attention to privacy fits seamlessly with professional confidentiality.</p>
<p>Just as important is how pleasant the system is to use. Apple pays enormous attention to detail and ease of use — not as decoration, but because, in the words of Steve Jobs, "design is how it works". Features that fall into place on their own save you small frustrations every day. And the ecosystem completes it: what comes in on your iPhone you finish off in the evening on your Mac, with your notes, calendar and contacts in sync everywhere.</p>
<p>There's a new development on top of this: many of the most interesting AI applications now appear Mac-first, often running on Apple's own chips and locally on your device — exactly what you want when working with confidential documents. Together with the rich selection of small, thoughtful apps this blog highlights, that makes the Mac the most pleasant and secure foundation for the way I work. No system is perfect, but for legal practice this comes closest as far as I'm concerned.</p>`
  },

  {
    date: "2026-10-19",
    type: "blog",
    icon: "/blog/icons/maps.png",
    title: "Why I use Apple Maps instead of Google Maps",
    body: `<p>To look up an address or the travel time to a hearing I used to reach automatically for Google Maps. These days I use <a href="https://www.apple.com/maps/">Apple Maps</a> by default, and the main reason is privacy. Apple doesn't link your searches to a personal profile and doesn't keep your precise location one-to-one. For anyone who deals with confidential matters professionally, that feels more appropriate.</p>
<p>In substance the difference has become small: the map material, routes and travel times are more than enough for daily use, and the integration with the rest of the Mac and iPhone is seamless. It's no coincidence that my own apps Afstanden and RitLog are built on the same Apple mapping technology. Google Maps remains stronger in very extensive business information and reviews — but for a lawyer's work the privacy of Apple Maps weighs more heavily as far as I'm concerned.</p>`
  },

  {
    date: "2026-10-12",
    type: "tip",
    app: "GoodNotes",
    icon: "/blog/icons/goodnotes.png",
    link: "https://www.goodnotes.com",
    title: "GoodNotes: handwrite notes on your case file",
    body: `<p>Anyone who likes taking notes by hand but wants to let go of paper will find GoodNotes a good fit — especially in combination with an iPad and an Apple Pencil. You import a PDF of a legal document or case file and write, highlight and draw over it by hand, just as if you were working on paper.</p>
<p>In court that's ideal: you have your entire case file with you digitally, searchable, and your handwritten notes sit right next to the relevant document. Written text is moreover searchable, and everything syncs to your other devices. For lawyers who like to write but want to get rid of stacks of paper, it's the most natural move to working digitally — without losing the feeling a pen gives you.</p>`
  },

  {
    date: "2026-10-05",
    type: "tip",
    app: "macOS Text Replacement",
    nodisc: true,
    icon: "/blog/icons/tekstvervanging.png",
    link: "https://support.apple.com/guide/mac-help/replace-text-punctuation-documents-mac-mh35735/mac",
    title: "Free and built in: Text Replacement in macOS",
    body: `<p>Before you install an app: macOS has a handy text replacement feature of its own on board. Via System Settings → Keyboard → Text Replacements you set up abbreviations that are automatically written out. Type <em>br</em> and your Mac turns it into 'Kind regards'; <em>tel</em> becomes your phone number.</p>
<p>It works in most Apple programs and syncs via iCloud to your iPhone and iPad, so your abbreviations are the same everywhere. For anyone just getting started this is the easiest way to save time on standard text, without extra software. If you run into its limits — formatting, longer snippets, more logic — then an app like aText is the next step (see that tip). But be amazed at how far you get with this free feature that's already on your Mac.</p>`
  },

  {
    date: "2026-09-28",
    type: "tip",
    app: "Swish",
    icon: "/blog/icons/swish.png",
    link: "https://highlyopinionated.co/swish/",
    title: "Swish: arrange windows with trackpad gestures",
    body: `<p>Swish lets you manage windows with simple swipe gestures on your trackpad. Swipe two fingers across a window's title bar to the left, and it neatly takes the left half of your screen; up for full screen; down to minimize. You no longer have to hunt for buttons.</p>
<p>For legal work, splitting your screen is worth gold: the case file on the left, your draft document on the right, and you no longer have to switch endlessly. Once it's in your fingers it goes faster than any button or shortcut. Swish is a one-time purchase, and it noticeably changes how smoothly you work with several documents at once — which for lawyers is more the rule than the exception.</p>`
  },

  {
    date: "2026-09-21",
    type: "tip",
    app: "OnlyOffice",
    icon: "/blog/icons/onlyoffice.png",
    link: "https://www.onlyoffice.com",
    title: "OnlyOffice: a free suite that handles Word files",
    body: `<p>OnlyOffice is a free office suite that stands out for one thing that really matters to legal professionals: it handles Word files (.docx) well and keeps the formatting neatly intact. Precisely with legal documents full of headings, numbering and footnotes, that's crucial.</p>
<p>You have text, spreadsheets and presentations in one program, with a familiar layout. For anyone who occasionally opens or drafts a document it's a perfectly full-fledged alternative; if you work in a large firm with a fixed Office environment, falling in line with that makes more sense. But as a sole practitioner or small firm it saves a recurring subscription cost, without giving up compatibility with the rest of the legal world.</p>
<p>There's also a more principled side. We talk more and more about digital sovereignty, but in practice most of us reach automatically for Microsoft. Digital autonomy starts with yourself: by deliberately choosing an alternative, even when it takes some getting used to. OnlyOffice is a low-threshold way to take that step without putting your work at risk.</p>`
  },

  {
    date: "2026-09-14",
    type: "tip",
    app: "New File Menu",
    icon: "/blog/icons/newfilemenu.png",
    link: "https://apps.apple.com/nl/app/new-file-menu/id1064959555?mt=12",
    title: "New File Menu: create a new file with a right-click",
    body: `<p>On the Mac, something simple is surprisingly cumbersome: quickly creating an empty text file or Word document in the folder you're already in. You first have to open the program, then save, then find the right folder. New File Menu adds an option to the right-click menu in Finder to create a new file directly — an empty text file, Word, Excel, a new folder from your selection, and more.</p>
<p>Small, but you immediately notice how often you needed it. Especially when you want to quickly create a note or working file per case in exactly the right place, it saves a handful of clicks every time. A typical example of a tool that removes one annoyance and then just quietly does its work.</p>`
  },

  {
    date: "2026-09-07",
    type: "tip",
    app: "IINA",
    icon: "/blog/icons/iina.png",
    link: "https://iina.io",
    title: "IINA: the media player for all your case videos",
    body: `<p>More and more cases involve visual material: camera footage, an audio recording, a clip from a phone. The Mac's standard QuickTime player can't play many formats, leaving you stuck on exactly the file you need. IINA plays virtually everything, is free and open source and feels like a genuine Mac app.</p>
<p>For legal work the details are especially handy: you can step through a clip frame by frame, slow down the speed, jump precisely to a moment and take a screenshot of a specific instant. That way you can refer to the right timestamp in a legal document without hassle. If you regularly work with video material from case files, IINA is indispensable.</p>`
  },

  {
    date: "2026-08-31",
    type: "tip",
    app: "Folder Quick Look",
    icon: "/blog/icons/folderquicklook.png",
    link: "https://apps.apple.com/nl/app/folder-quick-look/id6753110395?mt=12",
    title: "Folder Quick Look: see a folder's contents with the space bar",
    body: `<p>The Mac's space-bar preview (Quick Look) is wonderful: select a file in Finder, press the space bar and you instantly see a large preview — without opening the program. One thing Quick Look couldn't do on its own: show a folder's contents. Folder Quick Look solves that.</p>
<p>With this free app you can also press the space bar on a folder (or a zip file) and immediately see what's inside: a neat list of the files, which you can sort and browse through. For anyone working with case folders full of loose PDFs, that saves a lot of clicking to open — you check at a glance whether you've got the right folder. Small, free and exactly the kind of tool that removes an old Mac annoyance.</p>`
  },

  {
    date: "2026-08-24",
    type: "tip",
    app: "Folder Peek",
    icon: "/blog/icons/folderpeek.png",
    link: "https://sindresorhus.com/folder-peek",
    title: "Folder Peek: your most important folders in the menu bar",
    body: `<p>Some folders you open all day long: 'Active cases', your folder with templates and standard letters, or the download folder where incoming documents land. Folder Peek puts such folders in your menu bar, so you view the contents with one click and open a file without first hunting for a Finder window.</p>
<p>You decide yourself which folders you add. For anyone working with a fixed folder structure per case, it's a pleasant shortcut that makes your work just that bit smoother.</p>`
  },

  {
    date: "2026-08-17",
    type: "tip",
    app: "DockDoor",
    icon: "/blog/icons/dockdoor.png",
    link: "https://dockdoor.net",
    title: "DockDoor: preview windows from the Dock, just like on Windows",
    body: `<p>On Windows you see thumbnails of open windows when you hover the mouse over a program in the taskbar. On the Mac that's missing. DockDoor adds it: move your cursor over an icon in the Dock, and you see previews of all that app's open windows, after which you jump straight to the right one.</p>
<p>Anyone working in several documents of the same program at once — three Word files, four PDFs — finds the right window back much faster this way, without first having to click everything open. DockDoor is free and open source. Together with AltTab (see that tip), it finally makes switching between windows on the Mac just as smooth as many people are used to from Windows.</p>`
  },

  {
    date: "2026-08-10",
    type: "tip",
    app: "DaisyDisk",
    icon: "/blog/icons/daisydisk.png",
    link: "https://daisydiskapp.com",
    title: "DaisyDisk: see at a glance what's filling up your disk",
    body: `<p>At some point your disk is full, and macOS doesn't clearly tell you what's causing it. DaisyDisk scans your disk and shows the result as a colorful ring chart: you immediately see which folders and files take up the most space and can clean up straight from the overview.</p>
<p>For legal professionals those big space-hogs often build up from case files full of scanned PDFs, photos and — above all — video files from criminal case files, which quickly take up many gigabytes. Instead of searching blindly you see exactly where the space is. Do be careful with what you throw away: only delete copies, never the original case file. DaisyDisk is paid, but it saves you the frustration of a sluggish, full Mac.</p>`
  },

  {
    date: "2026-08-03",
    type: "tip",
    app: "Cotypist",
    icon: "/blog/icons/cotypist.png",
    link: "https://cotypist.app",
    title: "Cotypist: text suggestions as you type — on your Mac",
    body: `<p>Anyone used to word prediction on their phone sometimes misses it on the Mac. Cotypist brings that to your desktop: as you type, a gray suggestion appears for the rest of your sentence, which you accept with the Tab key. It works in most programs where you enter text.</p>
<p>For long letters and legal documents that can really speed up the pace, especially with recurring phrasings. Important for lawyers: Cotypist runs locally on your Mac and uses no cloud, so your text stays on your own device. It takes some getting used to — the suggestions aren't always spot on — but you quickly learn when to accept them and when to just keep typing. A recommendation for anyone who writes a lot and wants to grab that last bit of speed.</p>`
  },

  {
    date: "2026-07-27",
    type: "tip",
    app: "MacWhisper",
    icon: "/blog/icons/macwhisper.png",
    link: "https://goodsnooze.gumroad.com/l/macwhisper",
    title: "MacWhisper: transcribe audio locally, without the cloud",
    body: `<p>MacWhisper converts audio into text with OpenAI's Whisper model — but entirely on your own Mac. You drag an audio file in and get a transcription back: handy for a spoken memo, a recording of a (your own) meeting or an audio clip from a case file.</p>
<p>The big advantage for lawyers is that the processing happens locally: the audio doesn't have to leave your device, which makes a real difference with an eye to professional confidentiality compared to online transcription services. What's more, impressively the app can recognize different voices and match the right text to the right speaker in the transcription — so you see at a glance who said what. For quickly making long audio searchable, it's a surprisingly powerful tool.</p>`
  },

  {
    date: "2026-07-13",
    type: "tip",
    app: "PDF Expert",
    icon: "/blog/icons/pdfexpert.png",
    link: "https://pdfexpert.com",
    title: "PDF Expert: edit PDFs the way it should be",
    body: `<p>Half of legal work takes place in PDF files, and the standard Preview in macOS often falls short there. PDF Expert is faster and more complete: you merge pages or split them, fill in forms, add a signature, highlight passages and put notes in the margin. Editing text in an existing PDF or blacking it out (redacting) also goes smoothly.</p>
<p>That redacting in particular is important for lawyers: data you really want to remove has to be gone, not merely visually covered up. So always check whether the underlying text has actually disappeared. PDF Expert is paid, but if you work with case files daily it quickly pays for itself in time and annoyance. A good PDF app is perhaps the single most important piece of tooling on your Mac.</p>`
  },

  {
    date: "2026-07-06",
    type: "tip",
    app: "OwlOCR",
    icon: "/blog/icons/owlocr.png",
    link: "https://owlocr.com",
    title: "OwlOCR: extract text from scans and photos",
    body: `<p>Many documents come in as a scan or photo: a scanned police report, a screenshot, a photographed letter. You can't select or search the text in them. OwlOCR recognizes that text (OCR) and turns it into selectable, copyable text — often with a single shortcut over part of your screen.</p>
<p>Handy for quickly taking a passage from a scan into a legal document, or for making a non-searchable case file searchable after all. And nice for lawyers: OwlOCR recognizes the text locally on your Mac — via Apple's built-in text recognition — so your documents don't leave the device. With an eye to professional confidentiality, that's an important difference from online OCR services that send your documents to a server. macOS can incidentally also lift text out of images itself (the 'Live Text' feature), but a dedicated OCR app is faster and more accurate with larger documents.</p>`
  },

  {
    date: "2026-06-29",
    type: "tip",
    app: "aText",
    icon: "/blog/icons/atext.png",
    link: "https://www.trankynam.com/atext/",
    title: "aText: type standard text with a few letters",
    body: `<p>As a lawyer you type the same sentences over and over: your address details, a fixed closing formula, the salutation to a court, your account number with a reference to the case number. aText lets you set up short abbreviations for those. Type <em>;close</em>, for example, and your full signature appears instantly.</p>
<p>It works in virtually every program — your word processor, your mail, your billing system — and you can organize snippets by category. For anyone producing a lot of correspondence, that saves dozens of actions daily and prevents sloppy mistakes in standard text. macOS has a built-in variant for this too (see the tip about Text Replacement), but aText is more extensive: it supports formatting, images and capitalization logic. Note: don't store passwords or sensitive client data in snippets like these.</p>
<p>Prefer something else? Well-known alternatives are <a href="https://textexpander.com/">TextExpander</a> (powerful, subscription-based), <a href="https://ergonis.com/en/typinator/">Typinator</a> (one-time purchase) and the free, open-source <a href="https://espanso.org/">espanso</a>. At their core they do the same thing — pick what suits your way of working and your budget.</p>`
  },

  {
    date: "2026-06-22",
    type: "tip",
    app: "Ice",
    icon: "/blog/icons/ice.png",
    link: "https://icemenubar.app",
    title: "Ice (and Vanilla): calm in your menu bar",
    body: `<p>The more apps you use, the more crowded the menu bar at the top of your screen gets — with the result that you can no longer find the icons you really need. Ice brings calm to that. You hide icons you rarely use behind a divider and bring them back with one click. What always has to stay visible — your calendar or Verhinderdata, for example — you keep up front.</p>
<p>Ice is free and open source and set up in a few minutes. The better-known predecessor Vanilla does essentially the same thing, but Ice is actively maintained and now offers more possibilities. A small intervention, but you work more pleasantly because of it every day — especially on a laptop, where menu-bar space is limited.</p>`
  },

  {
    date: "2026-06-19",
    type: "blog",
    title: "Welcome",
    body: `<p>On this page I share news about my own apps as well as tips about other apps that can be useful in legal practice.</p>
<p>Do you have a tip for an app I should look at? Let me know via <a href="mailto:support@appsvooradvocaten.nl">support@appsvooradvocaten.nl</a>.</p>`
  }

];
