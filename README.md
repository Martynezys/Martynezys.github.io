# martynezys.github.io

Personal portfolio of **Martin Maruna**, Applied Electronics student at VŠB – Technical University of Ostrava.
Live at <https://martynezys.github.io/>.

Plain static HTML + CSS + a few lines of JavaScript (theme toggle). No framework, no build step: GitHub Pages serves the files as they are.

```
index.html                     homepage
projects/power-board/          power board case study
404.html                       not-found page
assets/css/style.css           all styles (light + dark tokens at the top)
assets/js/theme.js             light/dark toggle
assets/fonts/                  IBM Plex Sans + Mono (self-hosted, SIL OFL)
assets/img/                    images (WebP), favicon, social preview
```

## Updating
- **"Now" section:** edit the list in `index.html` and bump the "Updated" date.
- **New project:** copy an `<article class="card">` block in `index.html`. Status chip classes: `progress`, `running`, `planned`, or no class (neutral).
- **Preview locally:** `python -m http.server 8000` in this folder, then open http://localhost:8000.
- **TODOs:** LinkedIn and CV links are commented out in the Contact section of `index.html`. The project repo link is commented out at the end of the case study.
