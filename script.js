let recipes = [
  {
    name: "Seblak Pedas Viral",
    desc: "Seblak kuah pedas dengan kerupuk, sosis, bakso, dan telur yang cocok untuk pecinta makanan pedas.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    ingredients: "Kerupuk\nSosis\nBakso\nTelur\nBawang putih\nCabai\nKencur\nGaram dan penyedap",
    steps: "Haluskan cabai, bawang putih, dan kencur.\nTumis bumbu sampai harum.\nMasukkan air, kerupuk, bakso, sosis, dan telur.\nMasak sampai matang dan sajikan hangat."
  },
  {
    name: "Ayam Geprek Mozzarella",
    desc: "Ayam crispy dengan sambal geprek pedas dan lelehan mozzarella yang gurih.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
    ingredients: "Ayam fillet\nTepung crispy\nCabai rawit\nBawang putih\nKeju mozzarella\nGaram\nMinyak goreng",
    steps: "Balur ayam dengan tepung lalu goreng hingga crispy.\nUlek cabai, bawang putih, dan garam.\nGeprek ayam bersama sambal.\nTambahkan mozzarella lalu panaskan sebentar hingga meleleh."
  },
  {
    name: "Dimsum Mentai",
    desc: "Dimsum lembut dengan saus mentai creamy yang sedang populer di media sosial.",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
    ingredients: "Kulit dimsum\nAyam cincang\nUdang cincang\nTepung tapioka\nMayones\nSaus sambal\nNori",
    steps: "Campur ayam, udang, dan tepung tapioka.\nBungkus dengan kulit dimsum.\nKukus sampai matang.\nCampur mayones dan saus sambal, lalu tuang di atas dimsum.\nTambahkan nori."
  },
  {
    name: "Dessert Box Coklat",
    desc: "Dessert manis berlapis krim dan coklat yang cocok untuk ide jualan online.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    ingredients: "Brownies\nWhipped cream\nCoklat leleh\nSusu cair\nBiskuit coklat",
    steps: "Susun brownies di dasar box.\nTambahkan whipped cream.\nTuang coklat leleh di atasnya.\nTambahkan biskuit sebagai topping.\nDinginkan sebelum disajikan."
  },
  {
    name: "Cromboloni Cream",
    desc: "Pastry bulat renyah dengan isian cream lembut yang viral dan terlihat mewah.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    ingredients: "Puff pastry\nCream vanilla\nGula halus\nCoklat topping\nMentega",
    steps: "Gulung puff pastry berbentuk bulat.\nPanggang sampai mengembang dan renyah.\nIsi dengan cream vanilla.\nTambahkan topping coklat dan gula halus."
  }
];

const viralRecipes = document.getElementById("viralRecipes");
const searchResults = document.getElementById("searchResults");
const searchInput = document.getElementById("searchInput");
const uploadForm = document.getElementById("uploadForm");
const modal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");

function createRecipeCard(recipe, index) {
  return `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-info">
        <h3>${recipe.name}</h3>
        <p>${recipe.desc}</p>
        <button onclick="openRecipe(${index})">Lihat Resep</button>
      </div>
    </div>
  `;
}

function renderRecipes() {
  viralRecipes.innerHTML = recipes.map(createRecipeCard).join("");
  searchResults.innerHTML = recipes.map(createRecipeCard).join("");
}

function openRecipe(index) {
  const recipe = recipes[index];
  document.getElementById("modalImage").src = recipe.image;
  document.getElementById("modalTitle").textContent = recipe.name;
  document.getElementById("modalDesc").textContent = recipe.desc;
  document.getElementById("modalIngredients").textContent = recipe.ingredients;
  document.getElementById("modalSteps").textContent = recipe.steps;
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(keyword) ||
    recipe.desc.toLowerCase().includes(keyword) ||
    recipe.ingredients.toLowerCase().includes(keyword)
  );

  searchResults.innerHTML = filteredRecipes.length
    ? filteredRecipes.map((recipe) => createRecipeCard(recipe, recipes.indexOf(recipe))).join("")
    : "<p class='note'>Resep tidak ditemukan.</p>";
});

uploadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newRecipe = {
    name: document.getElementById("foodName").value,
    image: document.getElementById("foodImage").value,
    desc: document.getElementById("foodDesc").value,
    ingredients: document.getElementById("foodIngredients").value,
    steps: document.getElementById("foodSteps").value
  };

  recipes.unshift(newRecipe);
  renderRecipes();
  uploadForm.reset();
  alert("Resep berhasil ditambahkan sementara!");
});

document.getElementById("nextBtn").addEventListener("click", () => {
  viralRecipes.scrollLeft += 320;
});

document.getElementById("prevBtn").addEventListener("click", () => {
  viralRecipes.scrollLeft -= 320;
});

setInterval(() => {
  if (viralRecipes.scrollLeft + viralRecipes.clientWidth >= viralRecipes.scrollWidth - 5) {
    viralRecipes.scrollLeft = 0;
  } else {
    viralRecipes.scrollLeft += 300;
  }
}, 3000);

renderRecipes();
