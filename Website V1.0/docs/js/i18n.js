/* Simple i18n – English default, German optional */
const translations = {
  en: {
    logo: "BeCityStudio",
    nav_home: "Home",
    nav_rules: "Rules",
    nav_download: "Download",
    nav_credits: "Credits",
    nav_social: "Social",
    nav_updates: "Updates",
    nav_news: "News",
    nav_search: "Search",
    hero_title: "Welcome to BeCityStudio",
    hero_subtitle: "Home of Oakride State Roleplay – rules, updates, downloads and more.",
    btn_rules: "View Rules",
    btn_download: "Download Files",
    features_title: "What You'll Find Here",
    feat_rules: "Rules & Guidelines",
    feat_rules_desc: "In-game rules, Discord / social rules and clear consequences.",
    feat_download: "Easy Downloads",
    feat_download_desc: "Download important files as ZIP packages with one click.",
    feat_credits: "Our Team",
    feat_credits_desc: "Meet the Leadership, Dev Team, Heads and Moderators.",
    feat_news: "News & Updates",
    feat_news_desc: "Stay up to date with the latest announcements and changelogs.",
    footer_privacy: "Privacy Policy",
    footer_imprint: "Imprint",
    // Rules page
    rules_title: "Community Rules",
    rules_subtitle: "Please read and follow these guidelines carefully.",
    tab_ingame: "In-Game Rules",
    tab_social: "Social / Discord Rules",
    tab_punish: "Punishments",
    // Download
    download_title: "Downloads",
    download_subtitle: "Get the latest files and resources.",
    download_btn: "Download ZIP",
    // Credits
    credits_title: "Credits & Team",
    credits_subtitle: "The people who make this community possible.",
    leadership: "Leadership",
    devteam: "Dev Team",
    headof: "Head of",
    moderation: "Moderation",
    // Social
    social_title: "Social Media",
    social_subtitle: "Connect with us on your favorite platforms.",
    // Updates
    updates_title: "Updates & Changelog",
    updates_subtitle: "Latest changes and improvements.",
    // News
    news_title: "News Channel",
    news_subtitle: "Important announcements and community news.",
    // Search
    search_title: "Search",
    search_subtitle: "Find pages and content quickly.",
    search_placeholder: "Type to search…",
    // Legal
    privacy_title: "Privacy Policy",
    imprint_title: "Imprint"
  },
  de: {
    logo: "BeCityStudio",
    nav_home: "Startseite",
    nav_rules: "Regeln",
    nav_download: "Download",
    nav_credits: "Credits",
    nav_social: "Social",
    nav_updates: "Updates",
    nav_news: "News",
    nav_search: "Suche",
    hero_title: "Willkommen bei BeCityStudio",
    hero_subtitle: "Zuhause von Oakride State Roleplay – Regeln, Updates, Downloads und mehr.",
    btn_rules: "Regeln ansehen",
    btn_download: "Dateien herunterladen",
    features_title: "Was du hier findest",
    feat_rules: "Regeln & Richtlinien",
    feat_rules_desc: "Ingame-Regeln, Discord-/Social-Regeln und klare Konsequenzen.",
    feat_download: "Einfache Downloads",
    feat_download_desc: "Lade wichtige Dateien als ZIP-Paket mit einem Klick herunter.",
    feat_credits: "Unser Team",
    feat_credits_desc: "Triff Leadership, Dev Team, Heads und Moderatoren.",
    feat_news: "News & Updates",
    feat_news_desc: "Bleibe auf dem Laufenden mit den neuesten Ankündigungen und Changelogs.",
    footer_privacy: "Datenschutz",
    footer_imprint: "Impressum",
    rules_title: "Community Regeln",
    rules_subtitle: "Bitte lies und befolge diese Richtlinien sorgfältig.",
    tab_ingame: "Ingame Regeln",
    tab_social: "Social / Discord Regeln",
    tab_punish: "Strafen",
    download_title: "Downloads",
    download_subtitle: "Hole dir die neuesten Dateien und Ressourcen.",
    download_btn: "ZIP herunterladen",
    credits_title: "Credits & Team",
    credits_subtitle: "Die Menschen, die diese Community möglich machen.",
    leadership: "Leadership",
    devteam: "Dev Team",
    headof: "Head of",
    moderation: "Moderation",
    social_title: "Social Media",
    social_subtitle: "Verbinde dich mit uns auf deinen Lieblingsplattformen.",
    updates_title: "Updates & Changelog",
    updates_subtitle: "Neueste Änderungen und Verbesserungen.",
    news_title: "News Channel",
    news_subtitle: "Wichtige Ankündigungen und Community-News.",
    search_title: "Suche",
    search_subtitle: "Finde Seiten und Inhalte schnell.",
    search_placeholder: "Tippe zum Suchen…",
    privacy_title: "Datenschutzerklärung",
    imprint_title: "Impressum"
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}

// Init language
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "en";
  const select = document.getElementById("lang-select");
  if (select) {
    select.value = saved;
    select.addEventListener("change", () => setLanguage(select.value));
  }
  setLanguage(saved);
});
