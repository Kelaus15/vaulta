# Vaulta 5.0 — Landing GitHub Pages

Questa cartella contiene solo la landing page pubblicabile su GitHub Pages.

## File da caricare nel repository GitHub Pages

Carica il contenuto di questa cartella, non la cartella `software`.

- `index.html`
- `styles.css`
- `script.js`
- `.nojekyll`
- `favicon.ico`
- `assets/`

## Cartelle asset

- `assets/hero/` contiene l'immagine hero approvata.
- `assets/logo/` contiene logo e favicon.
- `assets/screenshots/` contiene gli screenshot approvati.
- `assets/social/` contiene l'immagine Open Graph.

## Nota Open Graph

Nel file `index.html` il valore `og:image` è relativo:

```html
<meta property="og:image" content="assets/social/og-image.jpg" />
```

Quando il sito sarà online, per le anteprime social perfette conviene sostituirlo con l'URL assoluto della pagina GitHub Pages.
