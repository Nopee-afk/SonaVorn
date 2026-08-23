# Sona Vorn Portfolio — Simple Chatbot Version

This is the easy GitHub Pages version. It keeps the teal, moss and warm-gold visual theme, animated role text, rain background and football photo. It also includes a normal JavaScript portfolio chatbot on the left.

The chatbot:

- shows “Need help? Ask me!” automatically
- answers prepared questions about Sona
- does not use ChatGPT, an API key, a server or a database
- works on GitHub Pages

Files:

- `index.html`
- `rain.js`
- `Football.JPG`
- `assets/` (put `Sona-Vorn-CV.pdf` here later)

Open `index.html` in a browser.

To change chatbot answers later, open `index.html` and search for:

`function getPortfolioAnswer(question)`

The answers are grouped underneath that line.

The rain animation requires internet access because p5.js is loaded from jsDelivr.
