const categories = document.querySelector("#categories");
const listItems = categories.children;
console.log(`Number of categories: ${listItems.length} `);

Array.from(listItems).forEach((listItem) => {
  const heading = listItem.querySelector("h2").textContent;
  const listCount = listItem.querySelectorAll("li").length;
  console.log(`category: ${heading} 
  elements: ${listCount} `);
});
