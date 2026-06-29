const defaultRecipes = [
  {
    id: crypto.randomUUID(),
    name: "Seblak Creamy Viral",
    category: "Camilan",
    emoji: "🍜",
    description: "Seblak pedas gurih dengan kuah creamy yang cocok untuk pecinta makanan viral.",
    ingredients: "kerupuk, makaroni, telur, cabai, bawang putih, kencur, susu, keju",
    steps: "Rebus kerupuk, tumis bumbu, masukkan telur dan bahan lain, tambahkan susu serta keju, lalu masak sampai kuah mengental.",
    price: 18,
    time: 20,
    difficulty: 2,
    rating: 4.8,
    nutrition: 3.4,
    viral: true
  },
  {
    id: crypto.randomUUID(),
    name: "Ayam Geprek Mozarella",
    category: "Makanan Berat",
    emoji: "🍗",
    description: "Ayam crispy dengan sambal bawang pedas dan lelehan mozarella.",
    ingredients: "ayam, tepung crispy, cabai rawit, bawang putih, mozarella, garam",
    steps: "Goreng ayam hingga renyah, ulek sambal bawang, geprek ayam, lalu beri mozarella dan panaskan sebentar.",
    price: 28,
    time: 35,
    difficulty: 3,
    rating: 4.7,
    nutrition: 3.8,
    viral: true
  },
  {
    id: crypto.randomUUID(),
    name: "Nasi Goreng Mentai",
    category: "Makanan Berat",
    emoji: "🍛",
    description: "Nasi goreng rumahan dengan saus mentai creamy dan topping nori.",
    ingredients: "nasi, telur, bawang, sosis, saus mentai, nori, kecap asin",
    steps: "Tumis bumbu dan telur, masukkan nasi, aduk rata, beri saus mentai, lalu torch atau panggang sebentar.",
    price: 24,
    time: 25,
    difficulty: 2,
    rating: 4.6,
    nutrition: 3.9,
    viral: true
  },
  {
    id: crypto.randomUUID(),
    name: "Dimsum Mentai",
    category: "Camilan",
    emoji: "🥟",
    description: "Dimsum lembut dengan topping saus mentai gurih yang kekinian.",
    ingredients: "kulit dimsum, ayam cincang, udang, wortel, saus mentai, nori",
    steps: "Campur isian, bentuk dimsum, kukus hingga matang, beri saus mentai, lalu panggang sebentar.",
    price: 32,
    time: 45,
    difficulty: 4,
    rating: 4.9,
    nutrition: 4.1,
    viral: true
  },
  {
    id: crypto.randomUUID(),
    name: "Cromboloni Cokelat",
    category: "Dessert",
    emoji: "🥐",
    description: "Croissant bulat viral dengan filling cokelat lumer.",
    ingredients: "puff pastry, cokelat, butter, gula halus, telur",
    steps: "Gulung puff pastry, panggang hingga mengembang, isi dengan cokelat, lalu taburi gula halus.",
    price: 35,
    time: 50,
    difficulty: 4,
    rating: 4.5,
    nutrition: 2.9,
    viral: true
  },
  {
    id: crypto.randomUUID(),
    name: "Es Kul-Kul Buah",
    category: "Dessert",
    emoji: "🍓",
    description: "Buah beku berlapis cokelat yang segar, murah, dan mudah dibuat.",
    ingredients: "pisang, stroberi, melon, cokelat leleh, sprinkle",
    steps: "Potong buah, tusuk dengan stik, bekukan, celupkan ke cokelat leleh, lalu beri topping.",
    price: 15,
    time: 15,
    difficulty: 1,
    rating: 4.4,
    nutrition: 4.2,
    viral: true
  },
  {
    id: crypto.randomUUID(),
    name: "Rice Bowl Teriyaki",
    category: "Makanan Berat",
    emoji: "🍱",
    description: "Menu praktis dengan ayam teriyaki, nasi hangat, dan sayuran.",
    ingredients: "nasi, ayam, saus teriyaki, bawang bombay, wortel, brokoli",
    steps: "Tumis ayam dan bawang, masukkan saus teriyaki, siapkan nasi, lalu susun dengan sayuran.",
    price: 26,
    time: 30,
    difficulty: 2,
    rating: 4.5,
    nutrition: 4.4,
    viral: false
  },
  {
    id: crypto.randomUUID(),
    name: "Soto Ayam Bening",
    category: "Makanan Berat",
    emoji: "🍲",
    description: "Soto ayam kuah bening yang hangat dan cocok untuk makan siang.",
    ingredients: "ayam, bihun, kunyit, serai, daun jeruk, telur, kol",
    steps: "Rebus ayam dan bumbu, suwir ayam, siapkan bihun dan pelengkap, lalu siram kuah panas.",
    price: 22,
    time: 55,
    difficulty: 3,
    rating: 4.4,
    nutrition: 4.5,
    viral: false
  },
  {
    id: crypto.randomUUID(),
    name: "Pancake Mini Madu",
    category: "Dessert",
    emoji: "🥞",
    description: "Pancake kecil yang lembut dengan topping madu dan buah.",
    ingredients: "tepung, telur, susu, baking powder, madu, buah",
    steps: "Campur adonan, panggang di teflon kecil, susun pancake, lalu beri madu dan buah.",
    price: 20,
    time: 25,
    difficulty: 2,
    rating: 4.3,
    nutrition: 3.5,
    viral: false
  },
  {
    id: crypto.randomUUID(),
    name: "Matcha Latte Dingin",
    category: "Minuman",
    emoji: "🍵",
    description: "Minuman matcha creamy yang segar dan cocok untuk cuaca panas.",
    ingredients: "matcha powder, susu, gula, es batu, air hangat",
    steps: "Larutkan matcha dengan air hangat, siapkan susu dan es, lalu tuang matcha di atasnya.",
    price: 17,
    time: 10,
    difficulty: 1,
    rating: 4.6,
    nutrition: 3.7,
    viral: false
  }
];

const defaultWeights = {
  price: 25,
  time: 20,
  difficulty: 20,
  rating: 20,
  nutrition: 15
};

const criteriaInfo = [
  { key: "price", label: "Harga Bahan", type: "cost", unit: "K" },
  { key: "time", label: "Waktu Memasak", type: "cost", unit: "menit" },
  { key: "difficulty", label: "Kesulitan", type: "cost", unit: "/5" },
  { key: "rating", label: "Rating", type: "benefit", unit: "/5" },
  { key: "nutrition", label: "Nilai Gizi", type: "benefit", unit: "/5" }
];

let recipes = getRecipes();
let weights = { ...defaultWeights };
let autoScrollInterval;

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const viralTrack = document.getElementById("viralTrack");
const viralSlider = document.getElementById("viralSlider");
const recipeGrid = document.getElementById("recipeGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const criteriaControls = document.getElementById("criteriaControls");
const calculateBtn = document.getElementById("calculateBtn");
const resetWeightsBtn = document.getElementById("resetWeightsBtn");
const rankingBody = document.getElementById("rankingBody");
const winnerCard = document.getElementById("winnerCard");
const recipeForm = document.getElementById("recipeForm");
const clearLocalBtn = document.getElementById("clearLocalBtn");
const toast = document.getElementById("toast");

function getRecipes() {
  const uploaded = JSON.parse(localStorage.getItem("foodieUploadedRecipes") || "[]");
  return [...defaultRecipes, ...uploaded];
}

function saveUploadedRecipe(recipe) {
  const uploaded = JSON.parse(localStorage.getItem("foodieUploadedRecipes") || "[]");
  uploaded.push(recipe);
  localStorage.setItem("foodieUploadedRecipes", JSON.stringify(uploaded));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function formatNumber(number) {
  return Number(number).toLocaleString("id-ID");
}

function renderViralCards() {
  const viralRecipes = recipes.filter(recipe => recipe.viral).slice(0, 8);
  const duplicated = [...viralRecipes, ...viralRecipes];

  viralTrack.innerHTML = duplicated.map(recipe => `
    <article class="viral-card">
      <div class="food-emoji">${recipe.emoji}</div>
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <div class="card-meta">
        <span>💰 ${recipe.price}K</span>
        <span>⏱️ ${recipe.time} mnt</span>
        <span>⭐ ${recipe.rating}</span>
      </div>
    </article>
  `).join("");

  startAutoScroll();
}

function startAutoScroll() {
  clearInterval(autoScrollInterval);

  autoScrollInterval = setInterval(() => {
    viralSlider.scrollLeft += 1;
    const maxScroll = viralSlider.scrollWidth / 2;
    if (viralSlider.scrollLeft >= maxScroll) {
      viralSlider.scrollLeft = 0;
    }
  }, 18);
}

function pauseAutoScroll() {
  clearInterval(autoScrollInterval);
}

function renderRecipeCards() {
  const query = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;

  const filteredRecipes = recipes.filter(recipe => {
    const combinedText = `${recipe.name} ${recipe.category} ${recipe.description} ${recipe.ingredients}`.toLowerCase();
    const matchesSearch = combinedText.includes(query);
    const matchesCategory = category === "all" || recipe.category === category;
    return matchesSearch && matchesCategory;
  });

  emptyState.hidden = filteredRecipes.length > 0;

  recipeGrid.innerHTML = filteredRecipes.map(recipe => `
    <article class="recipe-card">
      <span class="tag">${recipe.category}</span>
      <div class="food-emoji">${recipe.emoji}</div>
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <div class="card-meta">
        <span>💰 ${recipe.price}K</span>
        <span>⏱️ ${recipe.time} menit</span>
        <span>🔥 Lv.${recipe.difficulty}</span>
        <span>⭐ ${recipe.rating}</span>
      </div>
      <div class="recipe-detail">
        <strong>Bahan:</strong>
        <p>${recipe.ingredients}</p>
        <strong>Cara membuat:</strong>
        <p>${recipe.steps}</p>
      </div>
    </article>
  `).join("");
}

function renderCriteriaControls() {
  criteriaControls.innerHTML = criteriaInfo.map(criteria => `
    <div class="criteria-item">
      <div class="criteria-head">
        <span>${criteria.label}</span>
        <span id="value-${criteria.key}">${weights[criteria.key]}</span>
      </div>
      <input type="range" min="1" max="50" value="${weights[criteria.key]}" data-key="${criteria.key}" aria-label="Prioritas ${criteria.label}" />
    </div>
  `).join("");

  criteriaControls.querySelectorAll("input[type='range']").forEach(input => {
    input.addEventListener("input", event => {
      const key = event.target.dataset.key;
      weights[key] = Number(event.target.value);
      document.getElementById(`value-${key}`).textContent = weights[key];
      renderOresteResult();
    });
  });
}

function getCriteriaRanks() {
  const sortedCriteria = [...criteriaInfo].sort((a, b) => weights[b.key] - weights[a.key]);
  const ranks = {};

  sortedCriteria.forEach((criteria, index) => {
    ranks[criteria.key] = index + 1;
  });

  return ranks;
}

function getAlternativeRanks(criteria) {
  const values = recipes.map(recipe => recipe[criteria.key]);
  const uniqueSortedValues = [...new Set(values)].sort((a, b) => {
    return criteria.type === "cost" ? a - b : b - a;
  });

  const valueToRank = {};
  uniqueSortedValues.forEach((value, index) => {
    valueToRank[value] = index + 1;
  });

  const ranks = {};
  recipes.forEach(recipe => {
    ranks[recipe.id] = valueToRank[recipe[criteria.key]];
  });

  return ranks;
}

function calculateOreste() {
  const criteriaRanks = getCriteriaRanks();
  const alternativeRanksByCriteria = {};

  criteriaInfo.forEach(criteria => {
    alternativeRanksByCriteria[criteria.key] = getAlternativeRanks(criteria);
  });

  const totalWeight = Object.values(weights).reduce((total, value) => total + value, 0);

  return recipes.map(recipe => {
    let totalScore = 0;
    const detailScores = {};

    criteriaInfo.forEach(criteria => {
      const criteriaRank = criteriaRanks[criteria.key];
      const alternativeRank = alternativeRanksByCriteria[criteria.key][recipe.id];
      const distanceScore = Math.sqrt(0.5 * ((criteriaRank ** 2) + (alternativeRank ** 2)));
      const normalizedWeight = weights[criteria.key] / totalWeight;
      const weightedDistance = distanceScore * normalizedWeight;

      detailScores[criteria.key] = {
        criteriaRank,
        alternativeRank,
        distanceScore,
        weightedDistance
      };

      totalScore += weightedDistance;
    });

    return {
      ...recipe,
      oresteScore: totalScore,
      detailScores
    };
  }).sort((a, b) => a.oresteScore - b.oresteScore);
}

function renderOresteResult() {
  const results = calculateOreste();
  const winner = results[0];

  winnerCard.innerHTML = `
    <div class="winner-emoji">${winner.emoji}</div>
    <div>
      <h3>🏆 Rekomendasi Terbaik: ${winner.name}</h3>
      <p>${winner.description}</p>
      <p><strong>Skor ORESTE: ${winner.oresteScore.toFixed(3)}</strong> — skor paling kecil menjadi ranking terbaik.</p>
    </div>
  `;

  rankingBody.innerHTML = results.map((recipe, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${recipe.emoji} ${recipe.name}</td>
      <td>${formatNumber(recipe.price)}K</td>
      <td>${recipe.time} mnt</td>
      <td>${recipe.difficulty}/5</td>
      <td>${recipe.rating}/5</td>
      <td>${recipe.nutrition}/5</td>
      <td>${recipe.oresteScore.toFixed(3)}</td>
    </tr>
  `).join("");
}

function handleRecipeSubmit(event) {
  event.preventDefault();

  const newRecipe = {
    id: crypto.randomUUID(),
    name: document.getElementById("recipeName").value.trim(),
    category: document.getElementById("recipeCategory").value,
    emoji: document.getElementById("recipeEmoji").value.trim() || "🍽️",
    description: document.getElementById("recipeDescription").value.trim(),
    ingredients: document.getElementById("recipeIngredients").value.trim(),
    steps: document.getElementById("recipeSteps").value.trim(),
    price: Number(document.getElementById("recipePrice").value),
    time: Number(document.getElementById("recipeTime").value),
    difficulty: Number(document.getElementById("recipeDifficulty").value),
    rating: Number(document.getElementById("recipeRating").value),
    nutrition: Number(document.getElementById("recipeNutrition").value),
    viral: false
  };

  if (newRecipe.difficulty < 1 || newRecipe.difficulty > 5 || newRecipe.rating < 1 || newRecipe.rating > 5 || newRecipe.nutrition < 1 || newRecipe.nutrition > 5) {
    showToast("Kesulitan, rating, dan gizi harus berada di angka 1 sampai 5.");
    return;
  }

  saveUploadedRecipe(newRecipe);
  recipes = getRecipes();
  renderRecipeCards();
  renderViralCards();
  renderOresteResult();
  recipeForm.reset();
  showToast("Resep berhasil ditambahkan ke browser kamu.");
}

function clearLocalRecipes() {
  localStorage.removeItem("foodieUploadedRecipes");
  recipes = getRecipes();
  renderRecipeCards();
  renderViralCards();
  renderOresteResult();
  showToast("Resep upload lokal berhasil dihapus.");
}

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});

viralSlider.addEventListener("mouseenter", pauseAutoScroll);
viralSlider.addEventListener("mouseleave", startAutoScroll);
viralSlider.addEventListener("focusin", pauseAutoScroll);
viralSlider.addEventListener("focusout", startAutoScroll);
searchInput.addEventListener("input", renderRecipeCards);
categoryFilter.addEventListener("change", renderRecipeCards);
calculateBtn.addEventListener("click", renderOresteResult);
resetWeightsBtn.addEventListener("click", () => {
  weights = { ...defaultWeights };
  renderCriteriaControls();
  renderOresteResult();
  showToast("Prioritas kriteria kembali ke nilai awal.");
});
recipeForm.addEventListener("submit", handleRecipeSubmit);
clearLocalBtn.addEventListener("click", clearLocalRecipes);

renderViralCards();
renderRecipeCards();
renderCriteriaControls();
renderOresteResult();
