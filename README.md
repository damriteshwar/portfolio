# Amriteshwar Dwivedi — Portfolio Website

A professional, interactive portfolio website built with pure HTML, CSS & JavaScript. Designed for **GitHub Pages deployment** with zero dependencies — no build tools, no frameworks required.

---

## 🎨 Design Highlights

- **Refined Editorial Dark** aesthetic with warm amber accents
- **Playfair Display** (serif display) + **Plus Jakarta Sans** (body)
- Full-width hero with real photo + animated KPI counters
- Live awards marquee strip
- Animated skill bars with custom colors per category
- Scroll-triggered reveal animations throughout
- Custom lag cursor (desktop)
- Fully responsive — mobile-first breakpoints
- Grain texture overlay for depth
- Smooth scroll & active nav tracking

---

## 📁 File Structure

```
portfolio/
├── index.html                        ← Main entry point
├── Amriteshwar_Dwivedi_Resume_v2.docx  ← Resume (download link)
├── css/
│   └── style.css                     ← All styles (~900 lines)
├── js/
│   └── main.js                       ← All interactivity
├── images/
│   └── photo.jpg                     ← Profile photo (already included)
└── README.md                         ← This file
```

---

## 🚀 Deploy to GitHub Pages (3 Steps)

### Step 1 — Create GitHub Repository
1. Visit [github.com/new](https://github.com/new)
2. Repository name: `damriteshwar.github.io` *(or any name)*
3. Set to **Public**
4. Click **Create repository**

### Step 2 — Upload Files
**Option A — Web interface (easiest):**
1. Click **"uploading an existing file"** in your new repo
2. Drag & drop the entire portfolio folder contents
3. Commit with message: `Initial portfolio commit`

**Option B — Git CLI:**
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/damriteshwar/damriteshwar.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / folder: **/ (root)**
4. Save → Wait ~3 minutes
5. Visit: `https://damriteshwar.github.io/`

---

## ✏️ How to Customize

### Update Personal Info
Search and replace in `index.html`:
- Email: `amriteshwar.dwivedi@outlook.com`
- Phone: `+91 8427556959`
- LinkedIn: `damriteshwar`
- GitHub: `damriteshwar`

### Replace Photo
Overwrite `images/photo.jpg` with your updated photo.
Recommended size: at least **600×700px**, portrait orientation.

### Add More Projects
Copy any `.proj-card` block in the Projects section and update the content.

### Adjust Skill Levels
Find `data-w="95"` on `.bi-fill` elements and change the number (0–100).

### Color Theme
In `css/style.css`, change the root variables:
```css
:root {
  --amber:  #e8a838;   /* primary accent — change this */
  --amber-2: #f5c96a;  /* lighter variant */
}
```

### Resume Download
Replace `Amriteshwar_Dwivedi_Resume_v2.docx` with your updated file (keep the same name, or update the `href` in `index.html`).

---

## 🌐 Custom Domain (Optional)

1. Buy a domain (e.g., `amriteshwerdwivedi.com`)
2. In GitHub Pages settings → **Custom domain**: enter your domain
3. Create a `CNAME` file in the repo root:
   ```
   amriteshwerdwivedi.com
   ```
4. Add DNS A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

---

## 📬 Make Contact Form Actually Send Email

The form currently shows a success message (client-side only). To wire it to a real backend:

**Formspree (free, no backend needed):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form — get your ID (e.g., `xaybcdef`)
3. In `index.html`, find `<form id="contactForm"` and add:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xaybcdef" method="POST">
   ```

---

## 📱 Browser Support

| Browser | Status |
|---------|--------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile iOS/Android | ✅ Full |

---

## 🔗 Live Links in Site

- LinkedIn: https://www.linkedin.com/in/damriteshwar/
- GitHub: https://github.com/damriteshwar
- Email: amriteshwar.dwivedi@outlook.com
- Phone: +91 8427556959

---

© 2025 Amriteshwar Dwivedi · Built for impact, driven by data
