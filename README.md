# INSIST.

Sito istituzionale statico in HTML5, CSS3 e JavaScript vanilla, senza framework,
dipendenze npm o compilazione. Le quattro pagine sono realizzate e approvate.

## Repository e pubblicazione

- Organizzazione GitHub: `insist-company`.
- Repository: `insist-company.github.io`.
- Remote: https://github.com/insist-company/insist-company.github.io.git
- Dominio definitivo: https://insist-company.github.io/
- Cartella locale: `/Users/danieledc/insist-website` (il nome locale è conservato).
- Branch di sviluppo: `sviluppo-sito`.
- GitHub Pages: pubblicazione da `main`, cartella `/ (root)`.

I percorsi delle pagine e degli asset sono relativi e funzionano alla radice
del dominio. Il lavoro di sviluppo rimane locale finché non viene autorizzata
la fase successiva; la revisione tecnica non esegue commit, push, merge o deploy
e non modifica la configurazione GitHub Pages.

## Struttura

- `index.html`: Home con Hero, Applicazioni, Servizi creativi, Esperienze e Contatti.
- `applicazioni/index.html`: portfolio applicazioni, attualmente STIPE.
- `servizi/index.html`: contenuti e comunicazione, video e multimedia, web e progetti digitali.
- `esperienze/index.html`: quattro progetti personali indipendenti.
- `assets/css/style.css`: font locale, palette e layout responsive.
- `assets/js/navigation.js`: menu mobile, con stato ARIA e chiusura tramite Escape.
  Senza JavaScript i collegamenti di navigazione restano disponibili.
- `assets/fonts/Rubik-Variable.ttf`: Rubik locale, usato nei pesi 400 e 700.
- `assets/fonts/OFL.txt`: licenza SIL Open Font License del font.
- `assets/images/insist/`: riferimento originale INSIST., non mostrato nella pagina.
- `assets/images/stipe/`: copia WebP dell’icona STIPE.
- `assets/images/esperienze/`: originali ricevuti e copie WebP delle quattro copertine.

Gli originali dei sei asset sono conservati, compresi quelli inizialmente
consegnati nella cartella `esperienze/`. Le pagine usano copie WebP ottimizzate,
senza deformare le immagini. I file `.gitkeep` esistenti sono conservati.
Gli originali non sono scaricati dal browser durante la normale navigazione.
I metadati macOS `.DS_Store` sono esclusi da Git tramite `.gitignore`,
senza eliminare i file locali.

## Anteprima locale

Dalla cartella del repository, con Python 3 disponibile:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Aprire http://127.0.0.1:8000/ e interrompere il server con Ctrl+C.
Le pagine interne sono raggiungibili a `/applicazioni/`, `/servizi/` e `/esperienze/`.

## Font e identità

Rubik proviene dal repository ufficiale Google Fonts:
https://github.com/google/fonts/tree/main/ofl/rubik
Il font e la licenza sono distribuiti localmente, senza servizi font esterni.
Il logotipo è testo `INSIST.` in Rubik Bold 700, senza sfondo, nero o bianco
secondo la superficie. Il PNG con fondo bianco rimane soltanto un riferimento.

## Contatti, contenuti e completamenti

WhatsApp usa il numero fornito per il progetto: https://wa.me/393455824448.
“Mandaci un’email” resta inattivo finché non sarà disponibile l’indirizzo verificato.
Non ci sono indirizzi email inventati né collegamenti mailto fittizi.
STIPE è già disponibile sull’App Store; la pagina Applicazioni rimanda alla scheda
App Store e al sito ufficiale, senza duplicarne supporto e privacy.
Le esperienze sono progetti personali, non lavori commissionati da clienti;
“Sono Onofrio da sop’a Zanghe” è ancora attivo.

Favicon e anteprima social sono in `assets/images/insist/`: sorgenti SVG
a tracciati e PNG, ricavati da Rubik Bold locale. L’immagine social condivisa
è `social-preview.png` (1200 × 630). Le quattro pagine includono Open Graph
e Twitter Card con URL assoluti del dominio definitivo. La favicon abbreviata «I.» è approvata e collegata alle quattro pagine:
`favicon-i.svg`, con alternative PNG a 16/32 px. La versione completa
«INSIST.» è conservata come variante non attiva.
Non sono presenti analytics, tracciamento, animazioni o dipendenze di terze parti.
