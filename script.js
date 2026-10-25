/* =========================================================
   Dzexpress — Product Consultation Website
   Vanilla JavaScript: catalog rendering, search, filters,
   sorting, product details modal, mobile nav, contact form.
   ========================================================= */

/* ---------- Product data ---------- */
// Real product photos sourced from Pexels (license-free).
const PRODUCTS = [
  {
    id: 1,
    name: "UltraBook Pro 14",
    category: "laptops",
    price: 185000,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/12200696/pexels-photo-12200696.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "Lightweight 14-inch laptop with all-day battery life.",
    description:
      "The UltraBook Pro 14 combines a sleek aluminum chassis with a vivid 14-inch Full HD display. Powered by a latest-generation processor, 16GB of RAM and a fast 512GB SSD, it handles everyday work, multitasking and light creative tasks with ease. Battery lasts up to 12 hours on a single charge.",
  },
  {
    id: 2,
    name: "Aero Laptop 15.6",
    category: "laptops",
    price: 142000,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "15.6-inch laptop for productivity and entertainment.",
    description:
      "Aero Laptop 15.6 offers a large anti-glare display, comfortable full-size keyboard and reliable everyday performance. Ideal for students and professionals who need a balanced machine for office work, browsing and media consumption.",
  },
  {
    id: 3,
    name: "SoundWave Wireless Headphones",
    category: "headphones",
    price: 28000,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "Over-ear wireless headphones with active noise cancelling.",
    description:
      "SoundWave Wireless Headphones deliver rich, balanced sound with effective active noise cancellation. Soft memory-foam ear cushions and a lightweight headband keep them comfortable for hours. Bluetooth 5.3 keeps the connection stable, and a single charge provides up to 30 hours of playback.",
  },
  {
    id: 4,
    name: "Studio Monitor Headphones",
    category: "headphones",
    price: 19500,
    currency: "DZD",
    available: false,
    image:
      "https://images.pexels.com/photos/9058878/pexels-photo-9058878.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "Closed-back studio headphones for accurate monitoring.",
    description:
      "Studio Monitor Headphones are tuned for a flat, detailed response so you can hear your mix honestly. The closed-back design isolates external noise, while the detachable cable and replaceable ear pads extend the product's life.",
  },
  {
    id: 5,
    name: "Tactile Mechanical Keyboard",
    category: "keyboards",
    price: 16500,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/8219211/pexels-photo-8219211.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "Full-size mechanical keyboard with tactile switches.",
    description:
      "Tactile Mechanical Keyboard features hot-swappable switches, a solid aluminum frame and per-key RGB lighting. The tactile switches give a satisfying bump without being loud, making it great for both typing and gaming at home or in the office.",
  },
  {
    id: 6,
    name: "Compact RGB Keyboard",
    category: "keyboards",
    price: 12000,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/18311171/pexels-photo-18311171.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "Tenkeyless RGB keyboard that saves desk space.",
    description:
      "Compact RGB Keyboard drops the numpad to free up desk space for your mouse. Durable PBT keycaps, adjustable feet and a detachable USB-C cable round out a tidy, portable design that fits easily in a backpack.",
  },
  {
    id: 7,
    name: "Precision Wireless Mouse",
    category: "mice",
    price: 8500,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/9058886/pexels-photo-9058886.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "Ergonomic wireless mouse with silent clicks.",
    description:
      "Precision Wireless Mouse fits comfortably in the hand and offers silent clicks that won't disturb people around you. A high-accuracy optical sensor tracks on most surfaces, and the USB receiver stores neatly inside the body for travel.",
  },
  {
    id: 8,
    name: "Gaming Mouse G-Spark",
    category: "mice",
    price: 11000,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/12877898/pexels-photo-12877898.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "High-DPI gaming mouse with programmable buttons.",
    description:
      "G-Spark is built for fast-paced games with a 16,000 DPI sensor, six programmable buttons and a braided cable. Weight tuning lets you balance the mouse to your preference, and RGB lighting can be customized through companion software.",
  },
  {
    id: 9,
    name: "VisionView 27 Monitor",
    category: "monitors",
    price: 68000,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "27-inch QHD IPS monitor with crisp color.",
    description:
      "VisionView 27 delivers a 2560x1440 QHD resolution on an IPS panel for wide viewing angles and accurate color. A 144Hz refresh rate and 1ms response time keep motion smooth, while the adjustable stand lets you set the perfect height and tilt.",
  },
  {
    id: 10,
    name: "UltraWide 34 Monitor",
    category: "monitors",
    price: 125000,
    currency: "DZD",
    available: false,
    image:
      "https://images.pexels.com/photos/29283981/pexels-photo-29283981.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "34-inch curved ultrawide for immersive work and play.",
    description:
      "UltraWide 34 wraps your field of view with a 21:9 curved panel, giving you the screen area of two monitors side by side. Great for spreadsheets, timelines, immersive games and movies. Built-in Picture-by-Picture lets you connect two devices at once.",
  },
  {
    id: 11,
    name: "ClearSight HD Webcam",
    category: "accessories",
    price: 7300,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/11855189/pexels-photo-11855189.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "1080p webcam with auto focus and low-light correction.",
    description:
      "ClearSight HD Webcam records smooth 1080p video with automatic focus and light correction so you look your best in any room. A privacy shutter blocks the lens when not in use, and the universal clip fits laptops and desktop monitors.",
  },
  {
    id: 12,
    name: "Pulse 10 Bluetooth Speaker",
    category: "accessories",
    price: 9800,
    currency: "DZD",
    available: true,
    image:
      "https://images.pexels.com/photos/29581125/pexels-photo-29581125.jpeg?auto=compress&cs=tinysrgb&w=900",
    short: "Portable Bluetooth speaker with deep bass and 20h battery.",
    description:
      "Pulse 10 packs room-filling sound and punchy bass into a splash-resistant body. Pair two speakers for stereo, take calls with the built-in microphone, and enjoy up to 20 hours of music per charge.",
  },
];

/* ---------- Helpers ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// Format a price as Algerian dinars with thousands separators.
function formatPrice(value, currency = "DZD") {
  return `${value.toLocaleString("en-US")} ${currency}`;
}

// Escape user-entered text so it can never be rendered as HTML.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Title-case a category slug for display ("computer mice" -> "Computer Mice").
const CATEGORY_LABELS = {
  laptops: "Laptops",
  headphones: "Headphones",
  keyboards: "Keyboards",
  mice: "Mice",
  monitors: "Monitors",
  accessories: "Accessories",
};

function categoryLabel(slug) {
  return CATEGORY_LABELS[slug] || slug;
}

/* ---------- DOM references ---------- */
const grid = $("#productGrid");
const emptyState = $("#emptyState");
const resultCount = $("#resultCount");
const filterCategory = $("#filterCategory");
const sortBy = $("#sortBy");
const resetBtn = $("#resetFilters");
const emptyReset = $("#emptyReset");
const catalogSearch = $("#catalogSearch");
const headerSearchInput = $("#headerSearchInput");

const modalOverlay = $("#modalOverlay");
const modal = $("#modal");
const modalBody = $("#modalBody");
const modalClose = $("#modalClose");
let lastFocusedEl = null;

const navToggle = $("#navToggle");
const mainNav = $("#mainNav");
const headerSearchForm = $("#headerSearch");

const contactForm = $("#contactForm");
const formStatus = $("#formStatus");
const yearEl = $("#year");

/* ---------- State ---------- */
let state = {
  query: "",
  category: "all",
  sort: "default",
};

/* ---------- Category dropdown ---------- */
function populateCategories() {
  const cats = [...new Set(PRODUCTS.map((p) => p.category))].sort();
  cats.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = categoryLabel(cat);
    filterCategory.appendChild(opt);
  });
}

/* ---------- Filtering + sorting ---------- */
function getVisibleProducts() {
  const q = state.query.trim().toLowerCase();

  let list = PRODUCTS.filter((p) => {
    const matchesCategory =
      state.category === "all" || p.category === state.category;
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.short.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  switch (state.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      list.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return list;
}

/* ---------- Rendering ---------- */
function availabilityLabel(available) {
  return available ? "In stock" : "Out of stock";
}

function createCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.setAttribute("aria-label", product.name);

  const statusClass = product.available ? "status-in" : "status-out";

  card.innerHTML = `
    <div class="card-media">
      <span class="card-category-tag">${escapeHtml(categoryLabel(product.category))}</span>
      <img
        src="${product.image}"
        alt="${escapeHtml(product.name)} — ${escapeHtml(categoryLabel(product.category))}"
        loading="lazy"
        onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><rect width=%22400%22 height=%22400%22 fill=%22%23e2e8f0%22/><text x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2220%22 fill=%22%2364748b%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Image unavailable</text></svg>';"
      />
    </div>
    <div class="card-body">
      <h3 class="card-title">${escapeHtml(product.name)}</h3>
      <p class="card-desc">${escapeHtml(product.short)}</p>
      <div class="card-foot">
        <span class="card-price">${formatPrice(product.price, product.currency)}</span>
        <span class="card-status ${statusClass}">${availabilityLabel(product.available)}</span>
      </div>
      <button type="button" class="card-action" data-id="${product.id}">
        View Details
      </button>
    </div>
  `;

  const btn = card.querySelector(".card-action");
  btn.addEventListener("click", () => openModal(product.id));

  return card;
}

function render() {
  const list = getVisibleProducts();

  grid.innerHTML = "";
  if (list.length === 0) {
    emptyState.hidden = false;
    resultCount.textContent = "0 products found";
  } else {
    emptyState.hidden = true;
    resultCount.textContent =
      list.length === 1 ? "1 product found" : `${list.length} products found`;
    const frag = document.createDocumentFragment();
    list.forEach((p) => frag.appendChild(createCard(p)));
    grid.appendChild(frag);
  }
}

/* ---------- Reset filters ---------- */
function resetFilters() {
  state = { query: "", category: "all", sort: "default" };
  catalogSearch.value = "";
  headerSearchInput.value = "";
  filterCategory.value = "all";
  sortBy.value = "default";
  render();
}

/* ---------- Modal ---------- */
function openModal(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  lastFocusedEl = document.activeElement;

  const statusPill = product.available
    ? '<span class="pill pill-in">In stock</span>'
    : '<span class="pill pill-out">Out of stock</span>';

  modalBody.innerHTML = `
    <div class="modal-media">
      <img
        src="${product.image}"
        alt="${escapeHtml(product.name)} — large product image"
        onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22600%22><rect width=%22600%22 height=%22600%22 fill=%22%23e2e8f0%22/><text x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2224%22 fill=%22%2364748b%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>Image unavailable</text></svg>';"
      />
    </div>
    <div class="modal-content">
      <span class="modal-eyebrow">${escapeHtml(categoryLabel(product.category))}</span>
      <h2 class="modal-title" id="modalTitle">${escapeHtml(product.name)}</h2>
      <p class="modal-desc">${escapeHtml(product.description)}</p>
      <div class="modal-price">${formatPrice(product.price, product.currency)}</div>
      <div class="modal-meta">
        <span class="pill pill-cat">${escapeHtml(categoryLabel(product.category))}</span>
        ${statusPill}
      </div>
    </div>
  `;

  modalOverlay.hidden = false;
  // Force reflow so the transition runs.
  requestAnimationFrame(() => modalOverlay.classList.add("open"));
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
  // Wait for the transition before hiding.
  setTimeout(() => {
    modalOverlay.hidden = true;
    modalBody.innerHTML = "";
  }, 200);
  if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
    lastFocusedEl.focus();
  }
}

/* ---------- Mobile nav ---------- */
function toggleNav(force) {
  const willOpen =
    typeof force === "boolean" ? force : !mainNav.classList.contains("open");
  mainNav.classList.toggle("open", willOpen);
  headerSearchForm.classList.toggle("open", willOpen);
  navToggle.setAttribute("aria-expanded", String(willOpen));
}

/* ---------- Contact form validation ---------- */
function validateContactForm() {
  let valid = true;
  const fields = [
    { el: $("#contactName"), msg: "Please enter your name." },
    {
      el: $("#contactEmail"),
      msg: "Please enter a valid email address.",
      test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    },
    { el: $("#contactMessage"), msg: "Please enter a message." },
  ];

  fields.forEach(({ el, msg, test }) => {
    const value = el.value.trim();
    const errEl = $(`[data-error-for="${el.id}"]`);
    const ok = test ? test(value) : value.length > 0;

    if (!ok) {
      el.classList.add("invalid");
      if (errEl) errEl.textContent = msg;
      valid = false;
    } else {
      el.classList.remove("invalid");
      if (errEl) errEl.textContent = "";
    }
  });

  return valid;
}

function handleContactSubmit(e) {
  e.preventDefault();
  formStatus.textContent = "";
  formStatus.classList.remove("success", "error");

  if (!validateContactForm()) {
    formStatus.textContent = "Please correct the highlighted fields.";
    formStatus.classList.add("error");
    return;
  }

  // Frontend-only: a backend is required to actually deliver the message.
  formStatus.textContent =
    "Thanks! This is a demo form — a backend is required to actually send your message.";
  formStatus.classList.add("success");
  contactForm.reset();
}

/* ---------- Event wiring ---------- */
function initEvents() {
  // Header search -> drives the catalog search + scrolls to it.
  headerSearchForm.addEventListener("submit", (e) => e.preventDefault());
  headerSearchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    catalogSearch.value = e.target.value;
    render();
  });

  // Catalog search
  catalogSearch.addEventListener("input", (e) => {
    state.query = e.target.value;
    headerSearchInput.value = e.target.value;
    render();
  });

  // Category filter
  filterCategory.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
  });

  // Sort
  sortBy.addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  // Reset
  resetBtn.addEventListener("click", resetFilters);
  emptyReset.addEventListener("click", () => {
    resetFilters();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
  });

  // Modal close interactions
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
  });

  // Mobile nav toggle
  navToggle.addEventListener("click", () => toggleNav());
  // Close mobile nav when a link is clicked.
  $$(".main-nav .nav-link").forEach((link) =>
    link.addEventListener("click", () => toggleNav(false))
  );

  // Contact form
  contactForm.addEventListener("submit", handleContactSubmit);
  // Clear field error as the user types.
  $$(".contact-form .input").forEach((el) =>
    el.addEventListener("input", () => {
      el.classList.remove("invalid");
      const errEl = $(`[data-error-for="${el.id}"]`);
      if (errEl) errEl.textContent = "";
    })
  );
}

/* ---------- Init ---------- */
function init() {
  populateCategories();
  render();
  initEvents();
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
