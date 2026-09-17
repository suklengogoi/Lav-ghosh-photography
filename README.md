# Lav Ghosh Photography

Website for Lav Ghosh Photography, a wedding photography and cinematography studio in Barpeta Road, Assam.

Static site: `index.html`, `style.css` and `script.js`. No frameworks and no build step. Hosted on GitHub Pages.

## Folder structure

```
index.html          page content
style.css           all styles
script.js           menu, hero film, portfolio folders, photo viewer
assets/
  favicon.svg
  photos/           full-size photos (webp, 2000px long edge)
  thumbs/           grid-size copies of the same photos (webp, 900px)
  video/            hero film: .mp4 (main) and .webm (backup)
                    hero-film-wide.*  1920x1080 for laptops and landscape tablets
                    hero-film-tall.*  720x1280 for phones and portrait tablets
```

## Adding a portfolio photo

1. Export the photo as `.webp` twice: about 2000px on the long edge into `assets/photos/`, and about 900px into `assets/thumbs/`. Use the same file name for both, for example `bride-15.webp`.
2. Open `script.js` and add one line to the right folder in `PHOTOS`:
   `["bride-15.webp", 1600, 2000, "Short description of the photo"],`
   The two numbers are the width and height of the full-size file.

The photo count on the folder updates automatically.

## Moving frames strip

The strip of sliding photos under the About section is built from the portfolio list. To change which photos appear, edit `REEL_PICKS` in `script.js`. Each entry is `[folder, photo number]`, for example `["bride", 2]` for `bride-02.webp`.

Tapping a strip photo opens just that photo (visitors can swipe through its folder); closing it returns to the strip, which eases back into motion. Speed and easing time are set by `REEL_SPEED` and `REEL_EASE_MS` in `script.js`.

## Publishing on GitHub Pages

1. Push this folder to the repository `Lav-ghosh-photography`.
2. Go to Settings, then Pages, and set the source to the `main` branch, root folder.
3. The site will be live at `https://suklengogoi.github.io/Lav-ghosh-photography/`.

If the repository name or domain is different, update the `og:url`, `og:image` and `canonical` addresses at the top of `index.html`.

## Contact details used on the site

- WhatsApp and phone: 70021 41589
- Instagram: https://www.instagram.com/portraitsbylavghosh/
- Facebook: https://www.facebook.com/share/1JBXtwMJHP/
- Map: https://maps.app.goo.gl/2yn5K17pZN2jZXrm6

## Updating files later

- The hero film sources are written directly in `index.html`, so the film plays even if `script.js` fails to load.
- If you replace a video, give it a new file name and update the `<source>` lines in `index.html`. Reusing an old name can leave visitors with a cached, broken copy.
- After changing `style.css` or `script.js`, raise the `?v=` number where they are linked at the top and bottom of `index.html`.
