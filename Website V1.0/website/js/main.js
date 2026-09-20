/* ========== Theme ========== */
function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeButton(saved);

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeButton(next);
    });
  }
}

function updateThemeButton(theme) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const icon = btn.querySelector("i");
  const span = btn.querySelector("span");
  if (theme === "dark") {
    icon.className = "fas fa-moon";
    span.textContent = "Dark";
  } else {
    icon.className = "fas fa-sun";
    span.textContent = "Light";
  }
}

/* ========== Settings Panel ========== */
function initSettings() {
  const panel = document.getElementById("settings-panel");
  const toggle = document.getElementById("settings-toggle");
  if (!panel || !toggle) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target)) {
      panel.classList.remove("open");
    }
  });
}

/* ========== Music ========== */
function initMusic() {
  const audio = document.getElementById("bg-music");
  const select = document.getElementById("music-select");
  const volume = document.getElementById("volume-slider");
  if (!audio) return;

  // Restore volume
  const savedVol = localStorage.getItem("volume");
  if (savedVol !== null) {
    audio.volume = parseFloat(savedVol);
    if (volume) volume.value = savedVol;
  } else {
    audio.volume = 0.15;
  }

  // Restore track
  const savedTrack = localStorage.getItem("music") || "none";
  if (select) select.value = savedTrack;

  if (volume) {
    volume.addEventListener("input", () => {
      audio.volume = volume.value;
      localStorage.setItem("volume", volume.value);
    });
  }

  if (select) {
    select.addEventListener("change", () => {
      const val = select.value;
      localStorage.setItem("music", val);
      if (val === "none") {
        audio.pause();
        return;
      }
      // Note: replace with real files in assets/music/
      // For demo we only have placeholder – user must add mp3 files
      audio.src = `assets/music/${val}.mp3`;
      audio.load();
      audio.play().catch(() => {
        // Autoplay blocked – user needs to interact first
        console.log("Music will start after user interaction.");
      });
    });
  }

  // Try to resume if previously playing
  if (savedTrack && savedTrack !== "none") {
    audio.src = `assets/music/${savedTrack}.mp3`;
    audio.load();
    // Don't auto-play on load (browser policy) – user can select again
  }
}

/* ========== Mobile Menu ========== */
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

/* ========== Rules Tabs ========== */
function initRulesTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      buttons.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      const el = document.getElementById(target);
      if (el) el.classList.add("active");
    });
  });
}

/* ========== Search ========== */
const searchIndex = [
  { page: "Home", url: "index.html", title: "Welcome", text: "Welcome to BeCityStudio Oakride State Roleplay rules updates downloads" },
  { page: "Rules", url: "pages/rules.html", title: "In-Game Rules", text: "No cheating no hacking no griefing respect other players fair play" },
  { page: "Rules", url: "pages/rules.html", title: "Social / Discord Rules", text: "Be respectful no spam no NSFW no advertising follow Discord ToS" },
  { page: "Rules", url: "pages/rules.html", title: "Punishments", text: "Warnings mutes temporary bans permanent bans severity levels" },
  { page: "Download", url: "pages/download.html", title: "Oakride State Roleplay", text: "Download V0.0.1 Alpha Test game Oakride State Roleplay latest version not yet available" },
  { page: "Credits", url: "pages/credits.html", title: "Leadership", text: "Enifoxis Owner MMario44 Co-Owner Liam Director" },
  { page: "Credits", url: "pages/credits.html", title: "Dev Team", text: "TGIMB Developer" },
  { page: "Credits", url: "pages/credits.html", title: "Head of", text: "Brett Rain Playlist" },
  { page: "Credits", url: "pages/credits.html", title: "Moderation", text: "Lsgadmin Senior Admin" },
  { page: "Social", url: "pages/social.html", title: "Discord", text: "Join our Discord server community chat voice" },
  { page: "Social", url: "pages/social.html", title: "YouTube", text: "YouTube channel videos trailers tutorials" },
  { page: "Social", url: "pages/social.html", title: "TikTok", text: "TikTok short clips highlights behind the scenes" },
  { page: "Social", url: "pages/social.html", title: "Instagram", text: "Instagram photos stories community moments" },
  { page: "Updates", url: "pages/updates.html", title: "Summer Update", text: "Cars radial menu main menu phone new health player needs" },
  { page: "Updates", url: "pages/updates.html", title: "Showcase", text: "Running sprinting crouching phone use basic functions" },
  { page: "Updates", url: "pages/updates.html", title: "V0.0.1 Alpha", text: "First version alpha test Oakride State Roleplay" },
  { page: "News", url: "pages/news.html", title: "Website Release", text: "Official BeCityStudio website is now live" },
  { page: "News", url: "pages/news.html", title: "Staff Applications Closed", text: "Staff team applications are currently closed" },
  { page: "Privacy", url: "pages/privacy.html", title: "Privacy Policy", text: "Data protection cookies personal information GDPR" },
  { page: "Imprint", url: "pages/imprint.html", title: "Imprint", text: "Legal information contact address responsible person" }
];

function initSearch() {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  if (!input || !results) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = "";
    if (q.length < 2) return;

    const matches = searchIndex.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.text.toLowerCase().includes(q) ||
      item.page.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      results.innerHTML = `<p style="color:var(--text-secondary);text-align:center;">No results found.</p>`;
      return;
    }

    matches.forEach(m => {
      const div = document.createElement("div");
      div.className = "search-result";
      div.innerHTML = `
        <div class="page-name">${m.page}</div>
        <strong>${highlight(m.title, q)}</strong>
        <div class="snippet">${highlight(m.text.slice(0, 120), q)}…</div>
      `;
      div.addEventListener("click", () => {
        window.location.href = m.url;
      });
      results.appendChild(div);
    });
  });
}

function highlight(text, q) {
  const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

/* ========== Init all ========== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSettings();
  initMusic();
  initMobileMenu();
  initRulesTabs();
  initSearch();
});
