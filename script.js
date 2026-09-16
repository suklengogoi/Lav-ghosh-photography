/* =========================================================
   Lav Ghosh Photography: script.js
   No frameworks. Handles header, menu, hero film,
   portfolio folders (gallery) and the photo viewer.
   ========================================================= */

document.documentElement.classList.add("js");

/* ---------- Portfolio data ----------
   Each photo: [file name, width, height, description]
   Full size lives in assets/photos/, grid size in assets/thumbs/.
   To add a photo: export it as webp into both folders and add a line here. */
const PHOTOS = {
  bride: [
    ["bride-01.webp", 1600, 2000, "Bride in red and gold seated before a floral backdrop"],
    ["bride-02.webp", 1600, 2000, "Bride holding a betel leaf pair over her face"],
    ["bride-03.webp", 2000, 1333, "Bride at the mandap holding betel leaves"],
    ["bride-04.webp", 1600, 2000, "Close portrait of a bride in warm red light"],
    ["bride-05.webp", 1600, 2000, "Bride in a mekhela sador seated in a leather armchair"],
    ["bride-06.webp", 1600, 2000, "Bride in a red and white saree framed by a round window"],
    ["bride-07.webp", 2000, 1333, "Bride with mehendi hands in a lilac outfit"],
    ["bride-08.webp", 1600, 2000, "Bride in a pink sador standing beneath a tree"],
    ["bride-09.webp", 1600, 2000, "Bride in gold jewellery against a dark wall"],
    ["bride-10.webp", 1600, 2000, "Bride standing beneath a pendant lamp in a warm corridor"],
    ["bride-11.webp", 1600, 2000, "Smiling bride in half profile"],
    ["bride-12.webp", 2000, 1331, "Bride lit by a single beam of light in black and white"],
    ["bride-13.webp", 1600, 2000, "Bride adjusting her ring in dappled light"],
    ["bride-14.webp", 1600, 2000, "Bride twirling her saree in a garden"],
  ],
  prewedding: [
    ["prewedding-01.webp", 1600, 2000, "Couple forehead to forehead at sunset"],
    ["prewedding-02.webp", 2000, 1330, "Couple on a riverside with pigeons in flight and a bridge behind"],
    ["prewedding-03.webp", 1600, 2000, "Couple laughing beside a wooden cabin in golden light"],
    ["prewedding-04.webp", 2000, 1331, "Couple walking along a lakeshore at dusk"],
    ["prewedding-05.webp", 2000, 1333, "Couple standing in a pine forest clearing"],
    ["prewedding-06.webp", 1600, 2000, "Couple leaning out of a train door"],
    ["prewedding-07.webp", 1600, 2000, "Couple under a clear umbrella in light rain"],
    ["prewedding-08.webp", 2000, 1331, "Couple in a tea garden under a cloudy sky"],
    ["prewedding-09.webp", 1600, 2000, "Couple in uniform and saree sharing a smile"],
    ["prewedding-10.webp", 1600, 2000, "Couple sitting in a boat on the river"],
    ["prewedding-11.webp", 2000, 1331, "Couple on a hillside with a flowing black gown"],
    ["prewedding-12.webp", 2000, 1330, "Couple walking hand in hand among tall trees"],
    ["prewedding-13.webp", 1600, 2000, "Couple holding hands beside a tree trunk"],
    ["prewedding-14.webp", 1600, 2000, "Couple embracing on a green hillside"],
    ["prewedding-15.webp", 2000, 1333, "Couple posed on a forest trail"],
    ["prewedding-16.webp", 2000, 1125, "Couple peeking out from either side of a tree"],
    ["prewedding-17.webp", 1600, 2000, "Hands and rose petals, close up"],
    ["prewedding-18.webp", 1600, 2000, "Couple in uniform and saree, playful moment"],
    ["prewedding-19.webp", 1600, 2000, "Couple small beneath a tall tree in a green field"],
  ],
  couple: [
    ["couple-01.webp", 1600, 2000, "Bride and groom in red and gold under chandeliers"],
    ["couple-02.webp", 1500, 2000, "Couple walking a garden path framed by leaves"],
    ["couple-03.webp", 1600, 2000, "Couple in teal and ivory in soft evening light"],
    ["couple-04.webp", 1500, 2000, "Couple in traditional attire before a white temple"],
    ["couple-05.webp", 1500, 2000, "Couple walking hand in hand through greenery"],
    ["couple-06.webp", 1600, 2000, "Couple walking away down a leafy path"],
    ["couple-07.webp", 2000, 1333, "Couple in a hotel corridor with motion blur"],
  ],
  candid: [
    ["candid-01.webp", 1600, 2000, "Groom helping the bride during a ritual"],
    ["candid-02.webp", 2000, 1600, "Bride and groom sharing a glance during the ceremony"],
    ["candid-03.webp", 2000, 1331, "Couple dancing through green colour smoke"],
    ["candid-04.webp", 1600, 2000, "Couple laughing beneath a floral arch"],
    ["candid-05.webp", 2000, 1333, "Ritual moment with the bride in black and white"],
    ["candid-06.webp", 2000, 1392, "Ring exchange under flowers"],
    ["candid-07.webp", 2000, 1331, "Families applauding the couple at the ring ceremony"],
  ],
};

const FOLDERS = {
  bride: {
    title: "Bride",
    desc: "Bridal portraits, jewellery and the quiet moments before the ceremony."
  },
  prewedding: {
    title: "Pre-wedding",
    desc: "Pre-wedding shoots at scenic places, from Kolkata and Darjeeling to Meghalaya and Arunachal Pradesh."
  },
  couple: {
    title: "Couple",
    desc: "Portraits of the two of you, on the wedding day and around it."
  },
  candid: {
    title: "Candid",
    desc: "Rituals, laughter and family, photographed as they happen."
  }
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Year ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- Photo counts on folders ---------- */
$$("[data-count]").forEach(el => {
  el.textContent = PHOTOS[el.dataset.count].length;
});

/* ---------- Header: solid after the hero ---------- */
const header = $("#siteHeader");
const onScroll = () => {
  header.classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.6);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const menuToggle = $("#menuToggle");
const menuPanel = $("#menuPanel");
const menuLabel = $(".sr-only", menuToggle);
const isMenuOpen = () => menuToggle.getAttribute("aria-expanded") === "true";

function setMenu(open, { returnFocus = true } = {}) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuLabel.textContent = open ? "Close menu" : "Open menu";
  menuPanel.hidden = !open;
  document.body.classList.toggle("is-locked", open);
  header.classList.toggle("is-solid", open || window.scrollY > window.innerHeight * 0.6);

  // Keep keyboard and screen reader users inside the open menu
  $("#main").inert = open;
  $(".site-footer").inert = open;
  $(".quickbar").inert = open;

  if (open) {
    const first = $("a", menuPanel);
    if (first) first.focus({ preventScroll: true });
  } else if (returnFocus) {
    menuToggle.focus({ preventScroll: true });
  }
}

menuToggle.addEventListener("click", () => setMenu(!isMenuOpen()));

$$("a", menuPanel).forEach(a => {
  a.addEventListener("click", () => setMenu(false, { returnFocus: false }));
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && isMenuOpen()) setMenu(false);
});

// If the screen grows to the desktop layout while the menu is open, close it
window.matchMedia("(min-width: 861px)").addEventListener("change", e => {
  if (e.matches && isMenuOpen()) setMenu(false, { returnFocus: false });
});

/* ---------- Hero film ----------
   The video sources are written in index.html, so the film autoplays even
   without this script. This part only adds: the mobile poster, the
   pause/play button, a fallback when a phone blocks autoplay, and pausing
   when the hero is off screen. */
const heroVideo = $("#heroVideo");
const heroPause = $("#heroPause");

(function setupHero() {
  if (window.matchMedia("(max-aspect-ratio: 4/5)").matches) {
    heroVideo.poster = heroVideo.dataset.posterTall;
  }

  // Autoplay needs "muted" as a property too on some phones
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;

  if (reduceMotion) {
    heroVideo.removeAttribute("autoplay");
    heroVideo.pause();
    heroPause.hidden = true;
    return; // still poster only
  }

  let userPaused = false;

  const showButton = playing => {
    heroPause.textContent = playing ? "Pause film" : "Play film";
    heroPause.setAttribute("aria-pressed", String(!playing));
  };

  const tryPlay = () => {
    if (userPaused || !heroVideo.paused) return;
    const attempt = heroVideo.play();
    if (attempt && attempt.catch) {
      attempt.catch(err => {
        if (err && err.name === "NotAllowedError") {
          // Autoplay blocked (for example iPhone Low Power Mode): show the play button
          document.body.classList.add("hero-blocked");
          showButton(false);
        }
      });
    }
  };

  heroVideo.addEventListener("playing", () => {
    document.body.classList.remove("hero-blocked");
    showButton(true);
  });
  heroVideo.addEventListener("pause", () => showButton(false));
  heroVideo.addEventListener("loadeddata", tryPlay);

  // If every source fails (all files missing or unplayable), keep the poster
  const sources = $$("source", heroVideo);
  const lastSource = sources[sources.length - 1];
  if (lastSource) {
    lastSource.addEventListener("error", () => {
      heroPause.hidden = true;
      console.warn("Hero film: no playable video file found in assets/video/");
    });
  }

  // Power-saving modes block autoplay until the visitor touches the page
  const unlockEvents = ["touchend", "pointerdown", "click", "keydown"];
  const unlock = e => {
    if (heroPause.contains(e.target)) return; // the button handles its own tap
    tryPlay();
    unlockEvents.forEach(ev => document.removeEventListener(ev, unlock, true));
  };
  unlockEvents.forEach(ev => document.addEventListener(ev, unlock, { capture: true, passive: true }));

  heroPause.addEventListener("click", e => {
    e.stopPropagation();
    if (heroVideo.paused) {
      userPaused = false;
      document.body.classList.remove("hero-user-paused");
      tryPlay();
    } else {
      userPaused = true;
      document.body.classList.add("hero-user-paused"); // keep the button visible on phones
      heroVideo.pause();
    }
  });

  // In case autoplay already failed before this script ran
  if (heroVideo.readyState >= 2) tryPlay();

  // Save battery: pause when the hero is off screen, resume when it's back
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) tryPlay();
      else if (!heroVideo.paused) heroVideo.pause();
    }).observe(heroVideo);
  }
})();

window.addEventListener("load", () => document.body.classList.add("is-loaded"));
// Fallback in case load is slow
setTimeout(() => document.body.classList.add("is-loaded"), 1200);

/* ---------- Gallery (folder view) ---------- */
const gallery = $("#gallery");
const galleryGrid = $("#galleryGrid");
let currentFolder = null;
let lastFolderButton = null;

function buildGrid(key) {
  galleryGrid.innerHTML = "";
  PHOTOS[key].forEach(([file, w, h, alt], i) => {
    const btn = document.createElement("button");
    btn.className = "gallery__item";
    btn.type = "button";
    btn.setAttribute("aria-label", `View photo ${i + 1}: ${alt}`);

    const img = document.createElement("img");
    img.src = `assets/thumbs/${file}`;
    img.alt = alt;
    img.width = w;
    img.height = h;
    img.loading = i < 6 ? "eager" : "lazy";
    img.decoding = "async";
    if (img.complete) img.classList.add("is-ready");
    else img.addEventListener("load", () => img.classList.add("is-ready"), { once: true });

    btn.appendChild(img);
    btn.addEventListener("click", () => openLightbox(i));
    galleryGrid.appendChild(btn);
  });
}

function openGallery(key, { push = true } = {}) {
  if (!PHOTOS[key]) return;
  currentFolder = key;
  $("#galleryTitle").textContent = FOLDERS[key].title;
  $("#galleryDesc").textContent = FOLDERS[key].desc;
  $("#galleryCount").textContent = `${PHOTOS[key].length} photographs`;
  buildGrid(key);

  if (!gallery.open) gallery.showModal();
  gallery.scrollTop = 0;
  document.body.classList.add("is-locked");
  if (push) history.pushState({ folder: key }, "", `#${key}`);
}

function closeGallery({ fromHistory = false } = {}) {
  if (!gallery.open) return;
  if (!fromHistory && history.state && history.state.folder) {
    history.back(); // popstate will finish closing
    return;
  }
  if (lightbox.open) lightbox.close();
  gallery.close(); // cleanup happens in the "close" listener below
}

gallery.addEventListener("close", () => {
  document.body.classList.remove("is-locked");
  currentFolder = null;
  if (lastFolderButton) lastFolderButton.focus();
  // If the browser closed the dialog by itself, keep history in sync
  if (history.state && history.state.folder) history.back();
});

$$(".folder").forEach(btn => {
  btn.addEventListener("click", () => {
    lastFolderButton = btn;
    openGallery(btn.dataset.folder);
  });
});

$("#galleryClose").addEventListener("click", () => closeGallery());

// Esc on the gallery: route through history so the back button stays in sync
gallery.addEventListener("cancel", e => {
  e.preventDefault();
  closeGallery();
});

window.addEventListener("popstate", e => {
  // Back pressed while a photo opened from the moving strip is showing
  if (lightbox.open && lbMode === "single" && !(e.state && e.state.photo)) {
    lightbox.close();
    return;
  }
  const key = e.state && e.state.folder;
  if (key) openGallery(key, { push: false });
  else closeGallery({ fromHistory: true });
});

// Open a folder directly from a link like  .../#bride
if (FOLDERS[location.hash.slice(1)]) {
  const key = location.hash.slice(1);
  history.replaceState(null, "", location.pathname);
  lastFolderButton = $(`.folder[data-folder="${key}"]`);
  openGallery(key);
}

/* ---------- Photo viewer (lightbox) ----------
   Two ways in:
   - "gallery": from a folder; closing returns to the folder grid.
   - "single":  from the moving strip; closing returns straight to the page. */
const lightbox = $("#lightbox");
const lbImg = $("#lbImg");
const lbCount = $("#lbCount");
let lbIndex = 0;
let lbList = [];
let lbLabel = "";
let lbMode = "gallery";
let lbReturnTo = null;

// Remember whether the visitor is using a keyboard (for focus handling)
let usingKeyboard = false;
document.addEventListener("keydown", e => { if (e.key === "Tab") usingKeyboard = true; }, true);
document.addEventListener("pointerdown", () => { usingKeyboard = false; }, true);

function showPhoto(i) {
  lbIndex = (i + lbList.length) % lbList.length;
  const [file, , , alt] = lbList[lbIndex];

  lbImg.classList.add("is-loading");
  const next = new Image();
  next.onload = () => {
    lbImg.src = next.src;
    lbImg.alt = alt;
    lbImg.classList.remove("is-loading");
  };
  next.src = `assets/photos/${file}`;
  lbCount.textContent = `${lbLabel}${lbIndex + 1} / ${lbList.length}`;

  // Preload neighbours
  [lbIndex + 1, lbIndex - 1].forEach(n => {
    const [f] = lbList[(n + lbList.length) % lbList.length];
    new Image().src = `assets/photos/${f}`;
  });
}

// From a folder grid
function openLightbox(i) {
  lbMode = "gallery";
  lbList = PHOTOS[currentFolder];
  lbLabel = "";
  lbReturnTo = null;
  lbImg.removeAttribute("src");
  showPhoto(i);
  lightbox.showModal();
}

// From the moving strip: just the photo, no folder behind it
function openSinglePhoto(key, i, fromEl) {
  lbMode = "single";
  lbList = PHOTOS[key];
  lbLabel = `${FOLDERS[key].title} · `;
  lbReturnTo = fromEl;
  lbImg.removeAttribute("src");
  showPhoto(i);
  lightbox.showModal();
  document.body.classList.add("is-locked");
  history.pushState({ photo: true }, "", location.href); // phone Back closes the photo
  document.dispatchEvent(new CustomEvent("viewer:change", { detail: true }));
}

$("#lbClose").addEventListener("click", () => lightbox.close());
$("#lbPrev").addEventListener("click", () => showPhoto(lbIndex - 1));
$("#lbNext").addEventListener("click", () => showPhoto(lbIndex + 1));

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.close(); // click on the empty area
});

lightbox.addEventListener("close", () => {
  if (lbMode === "single") {
    if (!gallery.open) document.body.classList.remove("is-locked");
    // Closed with X / Esc: drop the history entry we added
    if (history.state && history.state.photo) history.back();
    // Keyboard users go back to the frame; mouse/touch users keep no focus,
    // so nothing on the strip stays "focused" and holds it still
    if (usingKeyboard && lbReturnTo) lbReturnTo.focus({ preventScroll: true });
    else if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
    lbMode = "gallery";
    document.dispatchEvent(new CustomEvent("viewer:change", { detail: false }));
    return;
  }
  const items = $$(".gallery__item", galleryGrid);
  if (items[lbIndex]) items[lbIndex].focus({ preventScroll: true });
});

document.addEventListener("keydown", e => {
  if (!lightbox.open) return;
  if (e.key === "ArrowRight") showPhoto(lbIndex + 1);
  if (e.key === "ArrowLeft") showPhoto(lbIndex - 1);
});

// Swipe on phones
let touchX = null;
lightbox.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener("touchend", e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) showPhoto(lbIndex + (dx < 0 ? 1 : -1));
  touchX = null;
});

/* ---------- Moving frames ----------
   Picks photos from PHOTOS, draws them twice in a row and slides the row
   left forever. The second copy makes the loop seamless.
   The strip eases to a stop and eases back up instead of jumping.
   To change the photos, edit REEL_PICKS: [folder, photo number]. */
const REEL_PICKS = [
  ["bride", 2], ["prewedding", 1], ["candid", 3], ["couple", 1],
  ["prewedding", 2], ["bride", 6], ["candid", 1], ["prewedding", 6],
  ["couple", 2], ["bride", 8], ["prewedding", 10], ["candid", 5]
];
const REEL_SPEED = 45;      // pixels per second
const REEL_EASE_MS = 600;   // how long slowing down / speeding up takes

(function setupReel() {
  const reel = $("#frames");
  const viewport = $("#reelViewport");
  const track = $("#reelTrack");
  if (!reel || !track) return;

  let dragged = false; // true when the visitor swiped instead of tapping
  const picks = REEL_PICKS.filter(([key, n]) => PHOTOS[key] && PHOTOS[key][n - 1]);

  const makeFrame = ([key, n], isCopy) => {
    const [file, w, h, alt] = PHOTOS[key][n - 1];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "reel__frame";
    if (isCopy) {
      btn.setAttribute("aria-hidden", "true");
      btn.tabIndex = -1;
    } else {
      btn.setAttribute("aria-label", `Open photo: ${alt} (${FOLDERS[key].title})`);
    }
    const img = document.createElement("img");
    img.src = `assets/thumbs/${file}`;
    img.alt = isCopy ? "" : alt;
    img.width = w;
    img.height = h;
    img.decoding = "async";
    img.draggable = false;
    btn.appendChild(img);
    btn.addEventListener("click", () => {
      if (dragged) return; // a swipe is not a tap
      openSinglePhoto(key, n - 1, btn);
    });
    return btn;
  };

  const frag = document.createDocumentFragment();
  picks.forEach(p => frag.appendChild(makeFrame(p, false)));
  picks.forEach(p => frag.appendChild(makeFrame(p, true)));
  track.appendChild(frag);

  if (reduceMotion) return; // CSS turns the strip into a swipeable row

  // Older browsers without the Web Animations API keep the plain CSS animation
  if (!track.animate) {
    track.style.setProperty("--reel-duration", `${Math.round(track.scrollWidth / 2 / REEL_SPEED)}s`);
    return;
  }

  reel.classList.add("reel--js"); // switches off the CSS animation
  const durationFor = () => Math.max(10000, Math.round((track.scrollWidth / 2 / REEL_SPEED) * 1000));
  let duration = durationFor();
  const anim = track.animate(
    [{ transform: "translate3d(0, 0, 0)" }, { transform: "translate3d(-50%, 0, 0)" }],
    { duration, iterations: Infinity, easing: "linear" }
  );

  // Keep the same position (as a fraction) when the screen size changes
  const refit = () => {
    const next = durationFor();
    if (next === duration) return;
    const progress = ((anim.currentTime || 0) % duration) / duration;
    duration = next;
    anim.effect.updateTiming({ duration });
    anim.currentTime = progress * duration;
  };
  window.addEventListener("resize", refit, { passive: true });
  window.addEventListener("load", refit);

  // ---- Smooth pause / resume ----
  // Every reason to hold the strip still is tracked; it moves only when there are none.
  const holds = new Set();
  let rate = 1;
  let rampFrom = 1;
  let rampTo = 1;
  let rampStart = 0;
  let rafId = 0;

  const ease = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  const step = now => {
    const t = Math.min(1, (now - rampStart) / REEL_EASE_MS);
    rate = rampFrom + (rampTo - rampFrom) * ease(t);
    anim.playbackRate = rate;
    if (t < 1) rafId = requestAnimationFrame(step);
    else rafId = 0;
  };

  const update = ({ instant = false } = {}) => {
    const target = holds.size ? 0 : 1;
    reel.dataset.state = target ? "moving" : "paused"; // handy for testing
    if (instant) {
      cancelAnimationFrame(rafId);
      rafId = 0;
      rate = rampTo = rampFrom = target;
      anim.playbackRate = target;
      return;
    }
    if (target === rampTo && rafId) return;
    if (target === rate) { rampTo = target; return; }
    rampFrom = rate;
    rampTo = target;
    rampStart = performance.now();
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(step);
  };
  const hold = (why, on, opts) => {
    const had = holds.has(why);
    if (on) holds.add(why); else holds.delete(why);
    if (had !== on) update(opts);
  };

  // Mouse over the strip (computers only)
  viewport.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") hold("hover", true); });
  viewport.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") hold("hover", false); });

  // Press and hold with a finger; small movement still counts as a tap
  // A press longer than LONG_PRESS_MS means "hold to look", so releasing it doesn't open the photo
  const LONG_PRESS_MS = 500;
  let startX = 0;
  let pressTimer = 0;
  viewport.addEventListener("pointerdown", e => {
    startX = e.clientX;
    dragged = false;
    if (e.pointerType !== "mouse") {
      hold("press", true);
      clearTimeout(pressTimer);
      pressTimer = setTimeout(() => { dragged = true; }, LONG_PRESS_MS);
    }
  });
  viewport.addEventListener("pointermove", e => {
    if (holds.has("press") && Math.abs(e.clientX - startX) > 10) dragged = true;
  });
  // Release anywhere (the finger may lift outside the strip, or the page may scroll)
  ["pointerup", "pointercancel"].forEach(ev =>
    document.addEventListener(ev, () => {
      clearTimeout(pressTimer);
      hold("press", false);
    }, true)
  );
  // No "save image" pop-up on long press inside the strip
  viewport.addEventListener("contextmenu", e => {
    if (e.target.closest(".reel__frame")) e.preventDefault();
  });

  // Keyboard focus on a frame (not mouse or touch focus)
  viewport.addEventListener("focusin", e => {
    if (usingKeyboard && e.target.matches(".reel__frame")) hold("keyboard", true);
  });
  viewport.addEventListener("focusout", e => {
    if (!viewport.contains(e.relatedTarget)) hold("keyboard", false);
  });

  // While a photo from the strip is open, rest; ease back in when it closes
  document.addEventListener("viewer:change", e => {
    if (e.detail) {
      hold("viewer", true, { instant: true });
      hold("press", false, { instant: true });
    } else {
      hold("viewer", false);
    }
  });

  // Save battery: stop while off screen or when the tab is hidden
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      hold("offscreen", !entry.isIntersecting, { instant: true });
    }, { rootMargin: "100px 0px" }).observe(reel);
  }
  document.addEventListener("visibilitychange", () => {
    hold("hidden", document.hidden, { instant: true });
  });
})();
