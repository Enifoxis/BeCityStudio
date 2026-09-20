# BeCityStudio Website

Modern, animated multi-page website for a gaming / Discord community.  
**Default language: English** (with German translation available).

## Features

- **Home** – Hero section with animated background shapes
- **Rules** – Tabs for In-Game Rules, Social/Discord Rules, Punishments
- **Download** – One-click ZIP download (put your file in `assets/downloads/`)
- **Credits** – Team sections: Leadership → Dev Team → Head of → Moderation
- **Social** – Links to Discord, YouTube, X/Twitter, Instagram
- **Updates** – Changelog list (easy to edit in HTML)
- **News** – News channel / announcements
- **Search** – Live search that jumps to the correct page
- **Settings panel** (always available, small cog icon top-right):
  - Background music selection + volume
  - Dark / Light mode
  - Language switch (EN / DE)
- **Footer** – Privacy Policy & Imprint
- Responsive design + smooth fade-in animations

## How to open & edit in Visual Studio Code

1. Download / clone this folder.
2. Open the folder in VS Code (`File → Open Folder`).
3. Install the **Live Server** extension (recommended) for instant preview.
4. Right-click `index.html` → **Open with Live Server**.

## Adding your own files

| What                | Where to put it                          |
|---------------------|------------------------------------------|
| ZIP download file   | `assets/downloads/community-files.zip`   |
| Background music    | `assets/music/ambient1.mp3` and `ambient2.mp3` |
| Team photos         | `assets/images/` (then update `src` in credits.html) |

## Hosting on GitHub Pages

1. Create a new GitHub repository.
2. Upload the entire content of this folder (or push via git).
3. Go to **Settings → Pages**.
4. Source: Deploy from branch `main` (or `master`), folder `/ (root)`.
5. After a minute your site will be live at:  
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Customization tips

- Change colors: edit the CSS variables at the top of `css/style.css`.
- Add new update / news entries: copy an existing `<article>` block.
- Change social links: edit the `href` attributes in `pages/social.html`.
- Replace placeholder names & images in `pages/credits.html`.
- Fill in real legal data in `pages/imprint.html` and `pages/privacy.html`.

## File structure

```
website/
├── index.html
├── css/style.css
├── js/main.js
├── js/i18n.js
├── pages/
│   ├── rules.html
│   ├── download.html
│   ├── credits.html
│   ├── social.html
│   ├── updates.html
│   ├── news.html
│   ├── search.html
│   ├── privacy.html
│   └── imprint.html
└── assets/
    ├── downloads/
    ├── music/
    └── images/
```

Enjoy building your community site! 🚀
