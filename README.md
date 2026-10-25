# Dzexpress — Product Consultation Website

A modern, responsive e-commerce **product catalog** where visitors can browse,
search, filter, sort, and view details of electronic products (laptops,
headphones, keyboards, mice, monitors, and accessories).

> This website is for **product consultation only**. There is no shopping cart,
> checkout, payment, or order placement.

---

## Tech Stack

- **HTML5** — page structure (`index.html`)
- **CSS3** — styling and responsive layout (`style.css`)
- **Vanilla JavaScript** — product data, search, filters, sorting, modal, and
  form validation (`script.js`)
- **Vite** — a lightweight development server and build tool (already included
  in `package.json`)

No frameworks are used (no React, Vue, Angular, Bootstrap, or Tailwind).

---

## What You Need

1. **Visual Studio Code** — download from https://code.visualstudio.com
2. **Node.js** (version 18 or newer) — download from https://nodejs.org
   - To check if Node is installed, open a terminal and run:
     ```bash
     node --version
     ```
   - You should see something like `v18.x.x` or higher.

That's all. No databases or accounts are required — all product data lives in
`script.js`.

---

## How to Run the Project in VS Code

### Step 1 — Open the project folder

1. Launch VS Code.
2. Go to **File → Open Folder…** and select the project folder (the one that
   contains `index.html`, `package.json`, `style.css`, and `script.js`).

### Step 2 — Open the integrated terminal

In VS Code, go to **Terminal → New Terminal** (or press `` Ctrl + ` ``).

### Step 3 — Install dependencies (first time only)

In the terminal, run:

```bash
npm install
```

This downloads Vite (the dev server) into a `node_modules` folder. You only
need to do this once.

### Step 4 — Start the development server

```bash
npm run dev
```

You will see output like:

```
  VITE vX.X  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

### Step 5 — Open the website in your browser

Hold **Ctrl** (or **Cmd** on macOS) and click the `http://localhost:5173/`
link in the terminal, or copy it into your browser.

The site reloads automatically whenever you save a file.

### Step 6 — Stop the server

In the terminal, press **Ctrl + C**.

---

## Optional: Build for Production

To create an optimized, static version of the site in a `dist/` folder:

```bash
npm run build
```

To preview the built site locally:

```bash
npm run preview
```

---

## Can I open `index.html` directly without a server?

You can double-click `index.html` to open it, but it is **not recommended**.
Because the project uses JavaScript modules (`type="module"`), some browsers
block them when loading files directly from disk (`file://`). Using the Vite
dev server (`npm run dev`) avoids this issue entirely.

If you must open it without a server, use the built version:

```bash
npm run build
npm run preview
```

---

## Features

- **Header** with brand, navigation (Home, Products, About, Contact), and a
  search field. Includes a responsive mobile menu.
- **Hero section** with a heading and an "Explore Products" button that
  scrolls smoothly to the catalog.
- **Product catalog** generated dynamically from a JavaScript array of
  products. Each card shows the image, name, category, price in Algerian
  dinars (DZD), short description, stock status, and a "View Details" button.
- **Search** by product name or description.
- **Filter** by category.
- **Sort** by price (low to high / high to low) or alphabetically (A–Z / Z–A).
- **Result count** showing how many products match.
- **Reset filters** button.
- **Friendly empty state** when no products match.
- **Product details modal** with a large image, full description, price, and
  availability. Closes with the × button, the **Escape** key, or by clicking
  outside the modal.
- **About section** describing the project.
- **Contact section** with a frontend-validated demonstration form. A message
  explains that a backend is required to actually deliver messages.
- **Footer** with the brand name, navigation links, and a copyright notice.
- **Graceful image fallback** — if a product photo fails to load, a
  placeholder is shown instead of a broken image icon.
- **Accessibility** — descriptive `alt` text, keyboard support, visible focus
  states, and respect for reduced-motion preferences.

---

## Verifying the Features

After starting the dev server, check the following:

1. **Explore Products button** — click it; the page should scroll down to the
   product catalog.
2. **Search** — type a word (for example "laptop" or "mouse") in the search
   box. The grid should update live.
3. **Category filter** — choose a category from the dropdown. Only products in
   that category should appear.
4. **Sort** — change the "Sort by" dropdown. Products should reorder by price
   or name.
5. **Reset filters** — click "Reset filters". All products should reappear.
6. **View Details** — click "View Details" on any card. A modal should open
   with a larger image and full description. Close it with the × button, the
   Escape key, or by clicking the dark area outside the modal.
7. **No results** — type something that does not match any product (for
   example "zzz"). You should see a friendly "No products found" message.
8. **Contact form** — try submitting the form empty. You should see validation
   errors. Fill it in correctly and submit to see the demo success message.
9. **Mobile view** — resize the browser window narrow. The navigation should
   turn into a hamburger menu.

---

## Project Structure

```
.
├── index.html        # Page structure (header, hero, catalog, about, contact, footer, modal)
├── style.css         # All styling, colors, layout, responsive rules, modal styles
├── script.js         # Product data, rendering, search, filters, sorting, modal, form validation
├── package.json      # Project metadata and scripts (dev, build, preview)
└── public/
    └── vite.svg      # Default Vite favicon
```

---

## Notes

- Product images are loaded from Pexels (license-free stock photos) via direct
  URLs. An internet connection is required for the images to load. If a photo
  cannot load, an inline placeholder is shown.
- Prices are in Algerian dinars (DZD) and are sample values for demonstration.
- The contact form is a **demonstration only**. It validates input on the
  frontend and shows a success message, but it does not send anything. A
  backend service would be required to actually deliver messages.

---

## License

This project was built for educational and demonstration purposes.
