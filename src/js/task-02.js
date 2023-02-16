const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// wybieramy element <ul> z identyfikatorem "ingredients"
const ingredientsList = document.querySelector("#ingredients");

// iterujemy po tablicy "ingredients"
ingredients.forEach((ingredient) => {
  // tworzymy nowy element <li>
  const li = document.createElement("li");

  // dodajemy klasę "item" do elementu <li>
  li.classList.add("item");

  // ustawiamy zawartość tekstową elementu <li> na nazwę składnika
  li.textContent = ingredient;

  // dodajemy element <li> do listy <ul>
  ingredientsList.appendChild(li);
});
