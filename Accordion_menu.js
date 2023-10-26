const foodName = [
  "Vegetable Stir-Fry",
  "Spaghetti Aglio e Olio",
  "Mushroom and Spinach Quesadillas:",
];
 const error = document.querySelector(".error");
const foodDecs = [
  `Heat some oil in a pan, add your favorite veggies (such as bell peppers, broccoli, and carrots), and stir-fry until slightly tender. Add a sauce made from soy sauce, ginger, garlic, and a touch of honey for flavor. Serve over cooked rice for a quick and delicious meal.`,
  `Cook spaghetti according to package instructions. In a pan, heat olive oil and sauté minced garlic until fragrant. Toss in red pepper flakes for some heat, then combine the cooked pasta with the garlic and oil mixture. Add fresh parsley, salt, and a squeeze of lemon for extra flavor.`,
  `Sauté sliced mushrooms and baby spinach in a pan until they wilt and the liquid from the mushrooms evaporates. Place a tortilla in a hot, dry skillet, sprinkle with cheese, add the mushroom-spinach mixture, and top with another tortilla. Cook until the tortillas are crispy and the cheese is melted. Serve with salsa or guacamole.`,
];
function loadFoodItem() {
  foodName.map((n, d) => {
    createFoodBlog(n, foodDecs[d]);
  });
}
loadFoodItem();

function addFoodItem() {
  const food = document.getElementById("name").value;
  const details = document.getElementById("recipe").value;
  const close = document.createElement("button");
  close.classList.add("closeBtn");
  close.innerHTML = "X";
  if (!food || !details) {
    error.style.display = "block";
    error.innerHTML = "Incomplete input";
  } else {
    error.style.display = "none";
    createFoodBlog(food, details);
    document.getElementById("name").value = ""
    document.getElementById("recipe").value = ""
  }
}

function createFoodBlog(name, recipe) {
  const foodTitle = document.createElement("div");
  foodTitle.classList.add("foodHeader");
  foodTitle.innerHTML = name;

  const foodRecipe = document.createElement("div");
  foodRecipe.classList.add("foodRecipeDetails");

  const p = document.createElement("p");
  p.innerHTML = recipe;
  foodRecipe.appendChild(p);

  const close = document.createElement("button");
  close.classList.add("closeBtn");
  close.innerHTML = "X";

  const foodItem = document.createElement("div");
  foodTitle.classList.add("foodHeaderName");

  const main = document.createElement("div");
  main.classList.add("main");

  foodTitle.addEventListener("click", () => {
    if (foodRecipe.style.display == "none") {
      foodRecipe.style.display = "block";
      close.style.display = "block";
    } else {
      foodRecipe.style.display = "none";
      close.style.display = "none";
    }
  });
  main.appendChild(foodTitle);
  main.appendChild(close);
  close.addEventListener("click", () => {
    foodItem.removeChild(foodRecipe);
    foodItem.removeChild(main);
  });
  foodItem.appendChild(main);
  foodItem.appendChild(foodRecipe);
  document.getElementById("items").appendChild(foodItem);
}
function background() {
    const img = ['background.jpeg', 'background1.jpeg', 'background2.jpeg'];
    let i = img.length - 1; 
    setInterval(function () {
        document.body.style.backgroundImage = `url(${img[i]})`;
        i--; 
        if (i < 0) {
            i = img.length - 1; 
        }
    }, 2000);
}

background(); 

