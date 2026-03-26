/* ═══════════════════════════════════════════════
   ZAM ZAM JEWELLERS — shop.js
   All client data + shop page interactivity
═══════════════════════════════════════════════ */

/* ── URL HELPERS ── */
function getParam(n) { return new URLSearchParams(window.location.search).get(n) || ''; }

/* ── CLIENT BRANDS ── */
const BRANDS = ['All', 'Signity', 'Emerald', 'Jadau', 'Diamond', 'Kalkateya', 'Lazer', 'Turkish', 'Rajkoot', 'Embose'];

/* ── CATEGORY DATA ── */
const CATEGORIES = {
  ladies: {
    gold: [
      { id: 'rings', icon: '💍', name: "Rings", count: 48 },
      { id: 'earrings', icon: '✨', name: "Earrings", count: 62 },
      { id: 'pendants', icon: '💎', name: "Pendants", count: 35 },
      { id: 'bangles', icon: '⭕', name: "Bangles", count: 55 },
      { id: 'chains', icon: '🔗', name: "Chains", count: 42 },
      { id: 'jhumki', icon: '🌸', name: "Jhumki", count: 38 },
      { id: 'jhala', icon: '🌺', name: "Jhala", count: 22 },
      { id: 'bracelets', icon: '🍃', name: "Bracelets", count: 30 },
      { id: 'tika', icon: '👑', name: "Tika", count: 25 },
      { id: 'jhumar', icon: '🎀', name: "Jhumar", count: 18 },
      { id: 'nath', icon: '💠', name: "Nath", count: 20 },
      { id: 'set', icon: '🏆', name: "Set", count: 45 },
      { id: 'bali', icon: '🔘', name: "Bali", count: 32 },
      { id: 'pendant-set', icon: '📿', name: "Pendant Set", count: 28 },
      { id: 'nose-ring', icon: '⭕', name: "Nose Ring", count: 15 },
      { id: 'nosepin', icon: '💫', name: "Nosepin", count: 18 },
    ],
    silver: [
      { id: 'rings', icon: '💍', name: "Rings", count: 35 },
      { id: 'earrings', icon: '✨', name: "Earrings", count: 48 },
      { id: 'bangles', icon: '⭕', name: "Bangles", count: 40 },
      { id: 'chains', icon: '🔗', name: "Chains", count: 30 },
      { id: 'nath', icon: '💠', name: "Nath", count: 15 },
      { id: 'bracelets', icon: '🍃', name: "Bracelets", count: 22 },
      { id: 'pendants', icon: '💎', name: "Pendants", count: 25 },
      { id: 'bali', icon: '🔘', name: "Bali", count: 20 },
      { id: 'set', icon: '🏆', name: "Set", count: 18 },
      { id: 'nosepin', icon: '💫', name: "Nosepin", count: 12 },
    ],
    diamond: [
      { id: 'rings', icon: '💍', name: "Rings", count: 28 },
      { id: 'earrings', icon: '✨', name: "Earrings", count: 35 },
      { id: 'pendants', icon: '💎', name: "Pendants", count: 22 },
      { id: 'bangles', icon: '⭕', name: "Bangles", count: 18 },
      { id: 'set', icon: '🏆', name: "Set", count: 15 },
      { id: 'bracelets', icon: '🍃', name: "Bracelets", count: 12 },
      { id: 'nath', icon: '💠', name: "Nath", count: 8 },
      { id: 'pendant-set', icon: '📿', name: "Pendant Set", count: 14 },
    ],
  },
  gents: {
    gold: [
      { id: 'rings', icon: '💍', name: "Ring", count: 35 },
      { id: 'chains', icon: '🔗', name: "Chain", count: 42 },
      { id: 'bracelets', icon: '🍃', name: "Bracelets", count: 28 },
    ],
    silver: [
      { id: 'rings', icon: '💍', name: "Ring", count: 22 },
      { id: 'chains', icon: '🔗', name: "Chain", count: 30 },
      { id: 'bracelets', icon: '🍃', name: "Bracelets", count: 18 },
    ],
    diamond: [
      { id: 'rings', icon: '💍', name: "Ring", count: 15 },
      { id: 'chains', icon: '🔗', name: "Chain", count: 18 },
      { id: 'bracelets', icon: '🍃', name: "Bracelets", count: 10 },
    ],
  },
  kids: {
    gold: [
      { id: 'chains', icon: '🔗', name: "Chain", count: 25 },
      { id: 'bracelets', icon: '🍃', name: "Bracelet", count: 20 },
      { id: 'rings', icon: '💍', name: "Ring", count: 18 },
      { id: 'bali', icon: '🔘', name: "Bali", count: 15 },
      { id: 'earrings', icon: '✨', name: "Ear Rings", count: 22 },
      { id: 'bangles', icon: '⭕', name: "Bangles", count: 30 },
    ],
    silver: [
      { id: 'chains', icon: '🔗', name: "Chain", count: 20 },
      { id: 'rings', icon: '💍', name: "Rings", count: 15 },
      { id: 'bracelets', icon: '🍃', name: "Bracelet", count: 12 },
    ],
    diamond: [
      { id: 'rings', icon: '💍', name: "Ring", count: 10 },
      { id: 'earrings', icon: '✨', name: "Ear Rings", count: 12 },
      { id: 'bracelets', icon: '🍃', name: "Bracelet", count: 8 },
    ],
  },
};

/* ── PRODUCT NAME TEMPLATES ── */
const PNAMES = {
  'rings': ['Classic Solitaire Ring', 'Twisted Rope Ring', 'Floral Kundan Ring', 'Stone Cluster Ring', 'Heart Design Ring', 'Eternity Band', 'Antique Polki Ring', 'Filigree Ring', 'Cocktail Ring', 'Minimalist Ring', 'Designer Ring', 'Royal Jadau Ring'],
  'earrings': ['Chandelier Jhumka', 'Diamond Drop Earrings', 'Chandbali Pair', 'Gold Hoop Rings', 'Polki Tassel Drops', 'Long Kundan Drops', 'Pearl Stud Set', 'Twisted Gold Hoops', 'Stone Cluster Studs', 'Floral Jhumka', 'Ear Cuff Set', 'Diamond Studs'],
  'pendants': ['Diamond Pendant', 'Om Gold Pendant', 'Heart Pendant', 'Ganesha Pendant', 'Flower Pendant', 'Evil Eye Pendant', 'Stone Drop Pendant', 'Lotus Pendant', 'Hamsa Pendant', 'Infinity Pendant', 'Moon Star Pendant', 'Classic Pendant'],
  'bangles': ['Classic Smooth Kada', 'Antique Floral Set', 'Filigree Thin Bangles', 'Bridal Bangle Set', 'Designer Stone Bangle', 'Diamond Kada', 'Enamel Bangle', 'Meenakari Bangle', 'Twisted Bangle', 'Daily Wear Set', 'Polki Bangle', 'Royal Kundan Bangle'],
  'chains': ['Singapore Chain', 'Box Link Chain', 'Figaro Chain', 'Rope Chain', 'Cable Chain', 'Wheat Chain', 'Venetian Chain', 'Snake Chain', 'Flat Curb Chain', 'Fancy Chain', 'Designer Chain', 'Classic Chain'],
  'jhumki': ['Classic Jhumki', 'Stone Jhumki', 'Kundan Jhumki', 'Polki Jhumki', 'Pearl Jhumki', 'Antique Jhumki', 'Designer Jhumki', 'Floral Jhumki', 'Royal Jhumki', 'Filigree Jhumki', 'Temple Jhumki', 'Bridal Jhumki'],
  'jhala': ['Classic Jhala', 'Stone Jhala', 'Kundan Jhala', 'Polki Jhala', 'Pearl Jhala', 'Antique Jhala', 'Designer Jhala', 'Floral Jhala', 'Royal Jhala', 'Filigree Jhala', 'Temple Jhala', 'Bridal Jhala'],
  'bracelets': ['Classic Bracelet', 'Stone Bracelet', 'Kundan Bracelet', 'Diamond Bracelet', 'Pearl Bracelet', 'Antique Bracelet', 'Designer Bracelet', 'Floral Bracelet', 'Royal Bracelet', 'Filigree Bracelet', 'Tennis Bracelet', 'Charm Bracelet'],
  'tika': ['Classic Maang Tikka', 'Diamond Matha Patti', 'Stone Passa', 'Bridal Tikka', 'Jhoomar Tikka', 'Chain Tikka', 'Kundan Tikka', 'Floral Tikka', 'Multi-Strand Tikka', 'Polki Tikka', 'Side Passa', 'Minimal Tikka'],
  'jhumar': ['Classic Jhumar', 'Stone Jhumar', 'Kundan Jhumar', 'Pearl Jhumar', 'Bridal Jhumar', 'Designer Jhumar', 'Polki Jhumar', 'Antique Jhumar', 'Royal Jhumar', 'Meenakari Jhumar', 'Temple Jhumar', 'Filigree Jhumar'],
  'nath': ['Classic Nath', 'Diamond Nath', 'Stone Nath', 'Kundan Nath', 'Polki Nath', 'Bridal Nath', 'Phool Nath', 'Pearl Nath', 'Antique Nath', 'Meenakari Nath', 'Designer Nath', 'Royal Nath'],
  'set': ['Full Kundan Set', 'Polki Bridal Set', 'Diamond Haar Set', 'Temple Set', 'Meenakari Set', 'Antique Gold Set', 'Jadau Set', 'Royal Set', 'Rani Haar Set', 'Choker Set', 'Stone Set', 'Filigree Set'],
  'bali': ['Classic Bali', 'Stone Bali', 'Kundan Bali', 'Diamond Bali', 'Pearl Bali', 'Polki Bali', 'Antique Bali', 'Designer Bali', 'Royal Bali', 'Filigree Bali', 'Meenakari Bali', 'Temple Bali'],
  'pendant-set': ['Classic Pendant Set', 'Diamond Pendant Set', 'Stone Pendant Set', 'Kundan Pendant Set', 'Polki Set', 'Bridal Pendant Set', 'Pearl Set', 'Antique Set', 'Designer Set', 'Royal Set', 'Filigree Set', 'Temple Set'],
  'nose-ring': ['Classic Nose Ring', 'Stone Nose Ring', 'Kundan Nath', 'Loop Ring', 'Bridal Nath', 'Polki Ring', 'Pearl Ring', 'Diamond Ring', 'Antique Ring', 'Designer Ring', 'Royal Nath', 'Temple Ring'],
  'nosepin': ['Classic Nosepin', 'Diamond Stud', 'Stone Nosepin', 'Gold Stud', 'Screw Pin', 'L-Shape Pin', 'Flower Nosepin', 'Pearl Pin', 'Polki Pin', 'CZ Nosepin', 'Plain Stud', 'Designer Pin'],
};

/* ── PRICE RANGES ── */
const PRICE_RANGES = {
  gold: [18000, 24000, 32000, 38000, 45000, 55000, 68000, 82000, 95000, 120000, 145000, 180000],
  silver: [1800, 2400, 3200, 4500, 6000, 7500, 9500, 12000, 14500, 17000, 20000, 24000],
  diamond: [28000, 38000, 52000, 68000, 88000, 115000, 148000, 195000, 250000, 320000, 420000, 550000],
};
const WEIGHTS = {
  gold: ['3.2g', '4.1g', '5.5g', '6.8g', '8.2g', '9.5g', '11.0g', '13.5g', '15.8g', '18.2g', '22.0g', '28.5g'],
  silver: ['8.5g', '12.0g', '15.5g', '18.2g', '22.0g', '26.5g', '30.0g', '35.0g', '40.5g', '48.0g', '55.0g', '65.0g'],
  diamond: ['0.25ct', '0.3ct', '0.4ct', '0.5ct', '0.6ct', '0.75ct', '0.9ct', '1.1ct', '1.3ct', '1.5ct', '1.8ct', '2.2ct'],
};
const BADGES = ['New', 'Sale', 'Bestseller', 'Limited'];
const BCLS = { New: 'badge-new', Sale: 'badge-sale', Bestseller: 'badge-bestseller', Limited: 'badge-limited' };
const BGCLS = { gold: 'bg-gold', silver: 'bg-silver', diamond: 'bg-diamond' };
const GNAMES = { ladies: 'Ladies', gents: 'Gents', kids: 'Kids' };
const MNAMES = { gold: 'Gold', silver: 'Silver', diamond: 'Diamond' };

/* ── STATE ── */
let currentGender = 'ladies';
let currentMetal = 'gold';
let currentType = '';
let currentBrand = 'All';

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  currentGender = getParam('gender') || 'ladies';
  currentMetal = getParam('metal') || 'gold';
  currentType = getParam('type') || '';

  updatePageTitle();
  buildBreadcrumb();
  renderMetalTabs();
  renderSidebar();
  renderBrandFilter();

  if (!currentType) {
    const cats = getCats();
    if (cats.length) { currentType = cats[0].id; }
  }
  setActiveSidebar(currentType);
  renderProducts();
});

/* ── HELPERS ── */
function getCats() {
  return (CATEGORIES[currentGender] && CATEGORIES[currentGender][currentMetal]) || [];
}

function updatePageTitle() {
  const gn = GNAMES[currentGender] || currentGender;
  const mn = MNAMES[currentMetal] || currentMetal;
  const el = document.getElementById('pageTitle');
  if (el) el.textContent = `${gn} ${mn} Jewellery`;
  const se = document.getElementById('pageSubtitle');
  if (se) se.textContent = `Shop premium ${mn} jewellery for ${gn}`;
}

function buildBreadcrumb() {
  const el = document.getElementById('breadcrumb');
  if (!el) return;
  const gn = GNAMES[currentGender] || currentGender;
  const mn = MNAMES[currentMetal] || currentMetal;
  el.innerHTML = `
    <a href="index.html">Home</a><span class="bc-sep">›</span>
    <a href="collections.html">Collections</a><span class="bc-sep">›</span>
    <a href="category.html?gender=${currentGender}">${gn}</a><span class="bc-sep">›</span>
    <span class="bc-current">${mn}</span>`;
}

/* ── METAL TABS ── */
function renderMetalTabs() {
  const tabs = document.getElementById('shopMetalTabs');
  if (!tabs) return;
  const metals = [
    { id: 'gold', icon: '🏆', label: 'Gold' },
    { id: 'silver', icon: '🪙', label: 'Silver' },
    { id: 'diamond', icon: '💎', label: 'Diamond' },
  ];
  tabs.innerHTML = metals.map(m => `
    <button class="shop-metal-tab shop-metal-tab-${m.id} ${m.id === currentMetal ? 'active' : ''}"
            onclick="switchMetal('${m.id}')">
      <span class="stab-icon">${m.icon}</span> ${m.label}
    </button>`).join('');
}

function switchMetal(metal) {
  currentMetal = metal;
  currentBrand = 'All';
  updatePageTitle();
  buildBreadcrumb();
  renderMetalTabs();
  renderSidebar();
  renderBrandFilter();
  const cats = getCats();
  currentType = cats.length ? cats[0].id : '';
  setActiveSidebar(currentType);
  renderProducts();
  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('metal', metal);
  url.searchParams.set('type', currentType);
  window.history.replaceState({}, '', url);
}

/* ── SIDEBAR ── */
function renderSidebar() {
  const sb = document.getElementById('shopSidebar');
  if (!sb) return;
  const cats = getCats();
  const mn = MNAMES[currentMetal] || currentMetal;
  sb.innerHTML = `
    <div class="sidebar-title">${mn} Jewellery</div>
    ${cats.map(c => `
      <a class="sidebar-item" data-type="${c.id}" onclick="selectCategory('${c.id}'); return false;" href="#">
        <span class="si-icon">${c.icon}</span>
        <span class="si-name">${c.name}</span>
        <span class="si-count">${c.count}</span>
      </a>`).join('')}`;
}

function setActiveSidebar(typeId) {
  document.querySelectorAll('.sidebar-item').forEach(el => {
    el.classList.toggle('active', el.dataset.type === typeId);
  });
}

function selectCategory(typeId) {
  currentType = typeId;
  currentBrand = 'All';
  setActiveSidebar(typeId);
  renderBrandFilter();
  renderProducts();
  const url = new URL(window.location);
  url.searchParams.set('type', typeId);
  window.history.replaceState({}, '', url);
}

/* ── BRAND FILTER ── */
function renderBrandFilter() {
  const bf = document.getElementById('brandFilter');
  if (!bf) return;
  bf.innerHTML = `<span class="brand-filter-label">Brand:</span>` +
    BRANDS.map(b => `
      <button class="brand-btn ${b === currentBrand ? 'active' : ''}"
              onclick="filterBrand('${b}')">${b}</button>`).join('');
}

function filterBrand(brand) {
  currentBrand = brand;
  renderBrandFilter();
  applyBrandFilter();
}

function applyBrandFilter() {
  let visible = 0;
  document.querySelectorAll('.product-card').forEach(c => {
    const show = currentBrand === 'All' || c.dataset.brand === currentBrand;
    c.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  updateCount(visible);
}

/* SAME FILE — NO LOGIC CHANGED, ONLY FIXES APPLIED */

/* ── PRODUCTS ── */
async function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const cats = getCats();
  const cat = cats.find(c => c.id === currentType) || cats[0];
  if (!cat) { grid.innerHTML = emptyState(); return; }

  const catName = cat.name;
  const mn = MNAMES[currentMetal] || currentMetal;
  const headEl = document.getElementById('productsHeading');
  if (headEl) headEl.textContent = `${mn} ${catName}`;

  try {
    const url = `http://localhost:5000/api/products?gender=${currentGender}&metal=${currentMetal}&type=${currentType}`;

    const res = await fetch(url);

    // ✅ FIX 1: prevent crash on server error
    if (!res.ok) {
      throw new Error("Server Error");
    }

    const data = await res.json();

    if (!data.length) {
      grid.innerHTML = emptyState();
      updateCount(0);
      return;
    }

    grid.innerHTML = data.map((p, i) => {
      const badge = BADGES[i % BADGES.length];
      const brand = BRANDS.slice(1)[i % (BRANDS.length - 1)];

      return `
        <div class="product-card" data-brand="${brand}">
          <span class="product-badge ${BCLS[badge]}">${badge}</span>

          <div class="product-img">
            <img src="http://localhost:5000/uploads/${p.image}" 
                 style="width:100%;height:100%;object-fit:cover;border-radius:12px"/>
          </div>

          <div class="product-info">
            <div class="product-brand-tag">${brand}</div>
            <div class="product-name">${p.name}</div>

            <div class="product-bottom">
              <span class="product-weight">--</span>
              <span class="product-price">₹${p.price}</span>
            </div>

          <a href="https://wa.me/918081717022?text=${encodeURIComponent(`Hi, I want to enquire about ${p.name}`)}" target="_blank" class="product-enquire">
  Enquire Now
</a>
          </div>
        </div>
      `;
    }).join('');

    // ✅ FIX 2: safe count update
    updateCount(data.length);

    // animation SAME
    document.querySelectorAll('.product-card').forEach((c, i) => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(16px)';
      setTimeout(() => {
        c.style.transition = 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.35s ease';
        c.style.opacity = '1';
        c.style.transform = 'translateY(0)';
      }, i * 50);
    });

    if (currentBrand !== 'All') applyBrandFilter();

  } catch (err) {
    console.log(err);

    // ✅ FIX 3: better error UI
    grid.innerHTML = `
      <h2 style="color:red;text-align:center;margin-top:20px">
        Error loading products
      </h2>
    `;

    updateCount(0);
  }
}

/* ✅ FIX 4: updateCount function (missing tha pehle) */
function updateCount(count) {
  const el = document.getElementById("productsCount");
  if (el) {
    el.innerText = `${count} items found`;
  }
}
const API_URL = "http://localhost:5000/api/products";

async function loadProducts() {
  try {
    const res = await fetch(API_URL);
    const products = await res.json();

    const container = document.getElementById("products");

    container.innerHTML = products.map(p => `
      <div class="product-card">
        <img src="http://localhost:5000${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `).join("");

  } catch (err) {
    console.error("Error loading products:", err);
  }
}

loadProducts();