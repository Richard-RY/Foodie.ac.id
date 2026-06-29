const STORAGE_KEY = "foodie_uploaded_recipes_v2";

const defaultRecipes = [
  {
    id: "seblak-creamy",
    name: "Seblak Creamy",
    category: "Viral",
    icon: "🍲",
    description: "Seblak pedas gurih dengan kuah creamy yang cocok untuk pecinta makanan viral.",
    price: 18,
    time: 20,
    difficulty: 2,
    rating: 4.8,
    nutrition: 3.4,
    image: ""
  },
  {
    id: "ayam-geprek",
    name: "Ayam Geprek Sambal Bawang",
    category: "Nusantara",
    icon: "🍗",
    description: "Ayam krispi dengan sambal bawang pedas yang simpel dan mengenyangkan.",
    price: 25,
    time: 35,
    difficulty: 3,
    rating: 4.7,
    nutrition: 3.7,
    image: ""
  },
  {
    id: "nasi-goreng",
    name: "Nasi Goreng Spesial",
    category: "Nusantara",
    icon: "🍛",
    description: "Nasi goreng rumahan dengan telur, ayam, dan bumbu gurih khas Indonesia.",
    price: 20,
    time: 25,
    difficulty: 2,
    rating: 4.9,
    nutrition: 3.8,
    image: ""
  },
  {
    id: "mie-gacoan",
    name: "Mie Pedas Ala Gacoan",
    category: "Viral",
    icon: "🍜",
    description: "Mie pedas manis dengan topping ayam cincang dan pangsit renyah.",
    price: 17,
    time: 22,
    difficulty: 2,
    rating: 4.6,
    nutrition: 3.1,
    image: ""
  },
  {
    id: "dimsum-mentai",
    name: "Dimsum Mentai",
    category: "Viral",
    icon: "🥟",
    description: "Dimsum lembut dengan saus mentai creamy yang cocok untuk camilan kekinian.",
    price: 32,
    time: 45,
    difficulty: 4,
    rating: 4.8,
    nutrition: 3.5,
    image: ""
  },
  {
    id: "cromboloni",
    name: "Cromboloni Cokelat",
    category: "Dessert",
    icon: "🥐",
    description: "Pastry renyah dengan isian cokelat manis, cocok sebagai dessert viral.",
    price: 28,
    time: 55,
    difficulty: 4,
    rating: 4.5,
    nutrition: 2.8,
    image: ""
  },
  {
    id: "dessert-box",
    name: "Dessert Box Oreo",
    category: "Dessert",
    icon: "🍰",
    description: "Dessert dingin berlapis krim, oreo, dan cokelat yang mudah dibuat.",
    price: 30,
    time: 35,
    difficulty: 2,
    rating: 4.6,
    nutrition: 2.9,
    image: ""
  },
  {
    id: "smoothie-bowl",
    name: "Smoothie Bowl Buah",
    category: "Sehat",
    icon: "🥗",
    description: "Menu sehat dari buah, yogurt, dan topping granola untuk sarapan ringan.",
    price: 24,
    time: 15,
    difficulty: 1,
    rating: 4.4,
    nutrition: 4.9,
    image: ""
  },
  {
    id: "soto-ayam",
    name: "Soto Ayam Kuning",
    category: "Nusantara",
    icon: "🍵",
    description: "Soto ayam hangat dengan kuah kuning rempah dan pelengkap sederhana.",
    price: 26,
    time: 50,
    difficulty: 3,
    rating: 4.7,
    nutrition: 4.2,
    image: ""
  },
  {
    id: "capcay",
    name: "Capcay Sayur",
    category: "Sehat",
    icon: "🥦",
    description: "Tumis sayuran lengkap yang murah, cepat, dan cocok untuk menu sehat.",
    price: 19,
    time: 18,
    difficulty: 1,
    rating: 4.3,
    nutrition: 4.8,
    image: ""
  },
  {
    id: "es-kopi-susu",
    name: "Es Kopi Susu Gula Aren",
    category: "Minuman",
    icon: "🥤",
    description: "Minuman kopi susu manis creamy dengan aroma gula aren yang khas.",
    price: 16,
    time: 10,
    difficulty: 1,
    rating: 4.7,
    nutrition: 2.7,
    image: ""
  },
  {
    id: "ramen-rumahan",
    name: "Ramen Rumahan",
    category: "Viral",
    icon: "🍥",
    description: "Ramen hangat ala rumahan dengan telur, sayur, dan kuah gurih.",
    price: 35,
    time: 40,
    difficulty: 3,
    rating: 4.6,
    nutrition: 3.9,
    image: ""
  }
];

let recipes = [...defaultRecipes, ...loadUploadedRecipes()];
let selectedCategory = "Semua";
let latestRanking = [];

const els = {
  navToggle: document.querySelector("#navToggle"),
  navMenu: document.querySelector("#navMenu"),
  viralTrack: document.querySelector("#viralTrack"),
  recipeGrid: document.querySelector("#recipeGrid"),
  searchInput: document.querySelector("#searchInput"),
  categoryPills: document.querySelector("#categoryPills"),
  emptyState: document.querySelector("#emptyState"),
  statRecipeCount: document.querySelector("#statRecipeCount"),
  form: document.querySelector("#recipeForm"),
  formMessage: document.querySelector("#formMessage"),
  calculateBtn: document.querySelector("#calculateBtn"),
  resetLocalBtn: document.querySelector("#resetLocalBtn"),
  rankingBody: document.querySelector("#rankingBody"),
  resultCount: document.querySelector("#resultCount"),
  winnerName: document.querySelector("#winnerName"),
  winnerDesc: document.querySelector("#winnerDesc"),
  winnerIcon: document.querySelector("#winnerIcon"),
  toTop: document.querySelector("#toTop"),
  heroFoodIcon: document.querySelector("#heroFoodIcon"),
  heroFoodName: document.querySelector("#heroFoodName"),
  heroFoodDesc: document.querySelector("#heroFoodDesc"),
  heroFoodTime: document.querySelector("#heroFoodTime"),
  heroFoodRating: document.querySelector("#heroFoodRating"),
  heroFoodBudget: document.querySelector("#heroFoodBudget")
};

const weightInputs = [
  { id: "wPrice", label: "Harga bahan", key: "price", type: "cost" },
  { id: "wTime", label: "Waktu memasak", key: "time", type: "cost" },
  { id: "wDifficulty", label: "Kesulitan", key: "difficulty", type: "cost" },
  { id: "wRating", label: "Rating", key: "rating", type: "benefit" },
  { id: "wNutrition", label: "Nilai gizi", key: "nutrition", type: "benefit" }
];

init();

function init() {
  updateStats();
  setupNavigation();
  setupRevealAnimation();
  setupToTopButton();
  renderCategoryPills();
  renderViralCarousel();
  renderRecipes();
  setupForm();
  setupWeights();
  setupHeroRotation();
  calculateOreSteRanking();
}

function setupNavigation() {
  els.navToggle.addEventListener("click", () => {
    const isOpen = els.navMenu.classList.toggle("open");
    els.navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      els.navMenu.classList.remove("open");
      els.navToggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-menu a")];

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 160;
    const current = sections.findLast((section) => scrollPosition >= section.offsetTop);
    navLinks.forEach((link) => {
      link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
    });
  });
}

function setupRevealAnimation() {
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
}

function setupToTopButton() {
  window.addEventListener("scroll", () => {
    els.toTop.classList.toggle("show", window.scrollY > 700);
  });
  els.toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function updateStats() {
  els.statRecipeCount.textContent = `${recipes.length}+`;
}

function renderViralCarousel() {
  const viral = recipes.filter((recipe) => recipe.category === "Viral").slice(0, 8);
  const displayList = [...viral, ...recipes.slice(0, 4)];
  const duplicated = [...displayList, ...displayList];

  els.viralTrack.innerHTML = duplicated.map((recipe) => `
    <article class="viral-card">
      <div class="viral-icon">${renderRecipeVisual(recipe)}</div>
      <h3>${escapeHtml(recipe.name)}</h3>
      <p>${escapeHtml(recipe.description)}</p>
      <div class="viral-meta">
        <span>⏱️ ${recipe.time} menit</span>
        <span>⭐ ${recipe.rating}</span>
      </div>
    </article>
  `).join("");
}

function renderCategoryPills() {
  const categories = ["Semua", ...new Set(recipes.map((recipe) => recipe.category))];
  els.categoryPills.innerHTML = categories.map((category) => `
    <button class="pill ${category === selectedCategory ? "active" : ""}" type="button" data-category="${escapeHtml(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");

  els.categoryPills.querySelectorAll(".pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      selectedCategory = pill.dataset.category;
      renderCategoryPills();
      renderRecipes();
    });
  });
}

function renderRecipes() {
  const keyword = els.searchInput.value.trim().toLowerCase();
  const filtered = recipes.filter((recipe) => {
    const matchesCategory = selectedCategory === "Semua" || recipe.category === selectedCategory;
    const matchesKeyword = [recipe.name, recipe.category, recipe.description]
      .join(" ")
      .toLowerCase()
      .includes(keyword);
    return matchesCategory && matchesKeyword;
  });

  els.emptyState.hidden = filtered.length > 0;
  els.recipeGrid.innerHTML = filtered.map((recipe) => `
    <article class="recipe-card reveal visible">
      <div class="recipe-media">
        ${recipe.image ? `<img src="${recipe.image}" alt="${escapeHtml(recipe.name)}">` : `<span>${escapeHtml(recipe.icon || "🍽️")}</span>`}
      </div>
      <div class="recipe-body">
        <div class="recipe-topline">
          <span class="category-tag">${escapeHtml(recipe.category)}</span>
          <span class="recipe-rating">⭐ ${Number(recipe.rating).toFixed(1)}</span>
        </div>
        <h3>${escapeHtml(recipe.name)}</h3>
        <p>${escapeHtml(recipe.description)}</p>
        <div class="recipe-details">
          <span>💰 ${recipe.price}k</span>
          <span>⏱️ ${recipe.time}m</span>
          <span>🥬 ${Number(recipe.nutrition).toFixed(1)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

els.searchInput.addEventListener("input", renderRecipes);

function setupForm() {
  els.form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const imageInput = document.querySelector("#recipeImage");
    let image = "";

    if (imageInput.files && imageInput.files[0]) {
      image = await fileToDataUrl(imageInput.files[0]);
    }

    const newRecipe = {
      id: `local-${Date.now()}`,
      name: document.querySelector("#recipeName").value.trim(),
      category: document.querySelector("#recipeCategory").value,
      icon: document.querySelector("#recipeIcon").value.trim() || "🍽️",
      description: document.querySelector("#recipeDesc").value.trim(),
      price: Number(document.querySelector("#recipePrice").value),
      time: Number(document.querySelector("#recipeTime").value),
      difficulty: Number(document.querySelector("#recipeDifficulty").value),
      rating: Number(document.querySelector("#recipeRating").value),
      nutrition: Number(document.querySelector("#recipeNutrition").value),
      image
    };

    if (!newRecipe.name || !newRecipe.description) {
      showFormMessage("Nama dan deskripsi resep wajib diisi.", true);
      return;
    }

    const uploaded = loadUploadedRecipes();
    uploaded.unshift(newRecipe);
    saveUploadedRecipes(uploaded);

    recipes = [...defaultRecipes, ...uploaded];
    selectedCategory = "Semua";
    els.form.reset();
    document.querySelector("#recipePrice").value = 25;
    document.querySelector("#recipeTime").value = 30;
    document.querySelector("#recipeDifficulty").value = 3;
    document.querySelector("#recipeRating").value = 4.5;
    document.querySelector("#recipeNutrition").value = 4.0;

    updateStats();
    renderCategoryPills();
    renderViralCarousel();
    renderRecipes();
    calculateOreSteRanking();
    showFormMessage("Resep berhasil ditambahkan ke browser kamu.");
  });

  els.resetLocalBtn.addEventListener("click", () => {
    const confirmed = confirm("Hapus semua resep upload lokal dari browser ini?");
    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEY);
    recipes = [...defaultRecipes];
    selectedCategory = "Semua";
    updateStats();
    renderCategoryPills();
    renderViralCarousel();
    renderRecipes();
    calculateOreSteRanking();
  });
}

function setupWeights() {
  weightInputs.forEach(({ id }) => {
    const input = document.querySelector(`#${id}`);
    const value = document.querySelector(`#${id}Value`);
    input.addEventListener("input", () => {
      value.textContent = input.value;
      calculateOreSteRanking();
    });
  });

  els.calculateBtn.addEventListener("click", calculateOreSteRanking);
}

function calculateOreSteRanking() {
  const criteria = weightInputs.map((criterion) => ({
    ...criterion,
    weight: Number(document.querySelector(`#${criterion.id}`).value)
  }));

  const criteriaRankMap = rankItems(criteria, (item) => item.weight, "desc");
  const alternativeRanks = {};

  criteria.forEach((criterion) => {
    const direction = criterion.type === "benefit" ? "desc" : "asc";
    alternativeRanks[criterion.key] = rankItems(recipes, (recipe) => Number(recipe[criterion.key]), direction);
  });

  latestRanking = recipes.map((recipe) => {
    let score = 0;
    const details = {};

    criteria.forEach((criterion) => {
      const criteriaRank = criteriaRankMap.get(criterion.id);
      const alternativeRank = alternativeRanks[criterion.key].get(recipe.id);
      const distance = Math.sqrt((Math.pow(criteriaRank, 2) + Math.pow(alternativeRank, 2)) / 2);
      details[criterion.key] = {
        criteriaRank,
        alternativeRank,
        distance
      };
      score += distance;
    });

    return {
      ...recipe,
      score,
      details
    };
  }).sort((a, b) => a.score - b.score || b.rating - a.rating || a.price - b.price);

  renderRanking(latestRanking);
}

function renderRanking(ranking) {
  const best = ranking[0];
  if (!best) return;

  els.winnerName.textContent = best.name;
  els.winnerDesc.textContent = `${best.description} Skor ORESTE: ${best.score.toFixed(3)}. Harga sekitar ${best.price}k dan waktu memasak ${best.time} menit.`;
  els.winnerIcon.textContent = best.icon || "🏆";
  els.resultCount.textContent = `${ranking.length} alternatif`;

  const scores = ranking.map((item) => item.score);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const range = max - min || 1;

  els.rankingBody.innerHTML = ranking.map((item, index) => {
    const inverseWidth = 100 - (((item.score - min) / range) * 72);
    return `
      <tr class="rank-${index + 1}">
        <td><span class="rank-badge">${index + 1}</span></td>
        <td>${escapeHtml(item.icon || "🍽️")} ${escapeHtml(item.name)}</td>
        <td>${item.price}k</td>
        <td>${item.time}m</td>
        <td>⭐ ${Number(item.rating).toFixed(1)}</td>
        <td>${Number(item.nutrition).toFixed(1)}</td>
        <td>
          <strong>${item.score.toFixed(3)}</strong>
          <div class="score-bar" aria-hidden="true"><span style="width:${inverseWidth}%"></span></div>
        </td>
      </tr>
    `;
  }).join("");
}

function rankItems(items, valueGetter, direction = "asc") {
  const sortedValues = [...new Set(items.map(valueGetter))].sort((a, b) => {
    return direction === "asc" ? a - b : b - a;
  });

  const valueToRank = new Map(sortedValues.map((value, index) => [value, index + 1]));
  const itemToRank = new Map();
  items.forEach((item) => itemToRank.set(item.id, valueToRank.get(valueGetter(item))));
  return itemToRank;
}

function setupHeroRotation() {
  let index = 0;
  const heroItems = recipes.filter((recipe) => recipe.category === "Viral").slice(0, 5);

  const updateHero = () => {
    const item = heroItems[index % heroItems.length] || recipes[0];
    els.heroFoodIcon.textContent = item.icon || "🍽️";
    els.heroFoodName.textContent = item.name;
    els.heroFoodDesc.textContent = item.description;
    els.heroFoodTime.textContent = `⏱️ ${item.time} menit`;
    els.heroFoodRating.textContent = `⭐ ${Number(item.rating).toFixed(1)}`;
    els.heroFoodBudget.textContent = `💰 ${item.price}k`;
    index += 1;
  };

  updateHero();
  setInterval(updateHero, 3200);
}

function loadUploadedRecipes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Gagal membaca localStorage", error);
    return [];
  }
}

function saveUploadedRecipes(uploadedRecipes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(uploadedRecipes));
  } catch (error) {
    console.warn("Gagal menyimpan localStorage", error);
    alert("Gagal menyimpan resep. Kemungkinan gambar terlalu besar. Coba gunakan gambar yang lebih kecil.");
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function showFormMessage(message, isError = false) {
  els.formMessage.textContent = message;
  els.formMessage.style.color = isError ? "#d95700" : "#21a67a";
  clearTimeout(showFormMessage.timer);
  showFormMessage.timer = setTimeout(() => {
    els.formMessage.textContent = "";
  }, 3600);
}

function renderRecipeVisual(recipe) {
  return escapeHtml(recipe.icon || "🍽️");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
