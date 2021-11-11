export function loadMenuPage() {
  //CREATE ROOT ELEMENTS
  const rootElement = document.getElementById("contents");
  const fragment = document.createDocumentFragment();

  const menuPageContainer = document.createElement("div");
  menuPageContainer.classList.add("menu-page");
  menuPageContainer.classList.add("hide-page");

  //CREATE COFFE MENU CONTENT
  const coffeeMenuContent = document.createElement("div");
  coffeeMenuContent.classList.add("menu-page-content");

  const coffeeMenuHeader = document.createElement("h2");
  coffeeMenuHeader.classList.add("menu-header");
  coffeeMenuHeader.textContent = "Coffee and Drinks";

  coffeeMenuContent.append(coffeeMenuHeader);

  const coffeeMenuItemsContainer = document.createElement("div");
  coffeeMenuItemsContainer.classList.add("menu-items-container");

  addMenuItem(
    "Americano --R25",
    "Plain black coffee with your option of either hot or cold milk",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Latte --R32",
    "Frothed milk blended with a shot of espresso",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Cappuccino --R32",
    "Equal parts milk, milk froth and an espresso shot",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Cafe Macchiato --R20",
    "A shot of espresso with a spash of milk",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Espresso shot --R15",
    "A shot of espresso made with our home roasted Rwandan coffee beans",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Rooibos tea --R25",
    "Rooibos tea with an option of either hot or cold milk",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Ceylon tea --R25",
    "Ceylon tea with an option of either hot or cold milk",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Earl grey --R25",
    "Earl grey tea with an option of either hot or cold milk",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Blueberry Cooler --R35",
    "Blueberries, apple, cucumber, celery and hemp seeds juice",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Daily Greens --R35",
    "Apple, kale, spinach, cucumber, celery and chia seeds juice",
    coffeeMenuItemsContainer
  );
  addMenuItem(
    "Floo Juice --R35",
    "orange, carrot, lemon, ginger and cayenne pepper juice",
    coffeeMenuItemsContainer
  );

  addMenuItem(
    "Ginger shot --R35",
    "A shot of ginger and apple juice",
    coffeeMenuItemsContainer
  );

  coffeeMenuContent.append(coffeeMenuItemsContainer);

  menuPageContainer.append(coffeeMenuContent);

  //CREATE PASTRY MENU CONTENT\
  const pastryMenuContent = document.createElement("div");
  pastryMenuContent.classList.add("menu-page-content");

  const pastryMenuHeader = document.createElement("h2");
  pastryMenuHeader.classList.add("menu-header");
  pastryMenuHeader.textContent = "Pastries";

  pastryMenuContent.append(pastryMenuHeader);

  const pastryMenuItemsContainer = document.createElement("div");
  pastryMenuItemsContainer.classList.add("menu-items-container");

  addMenuItem(
    "Croissant --R20",
    "A plain croissant made on the premises",
    pastryMenuItemsContainer
  );
  addMenuItem(
    "Pain au chocolat --R30",
    "A croissant with dark chocolate baked on the inside",
    pastryMenuItemsContainer
  );
  addMenuItem(
    "Scone --R30",
    "A freshly baked scone with the option of either cheese, jam or cream",
    pastryMenuItemsContainer
  );
  addMenuItem(
    "Friands --R20",
    "French style almond flour cake with powdered sugar on top",
    pastryMenuItemsContainer
  );
  addMenuItem(
    "Cinnamon twist --R20",
    "Puff pastry sliced into thin strips, coated in brown sugar and cinnamon, then twisted up before baking",
    pastryMenuItemsContainer
  );

  pastryMenuContent.append(pastryMenuItemsContainer);
  menuPageContainer.append(pastryMenuContent);

  fragment.append(menuPageContainer);
  rootElement.append(fragment);
}

function addMenuItem(itemName, itemDescription, itemToAppend) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const menuItemName = document.createElement("h3");
  menuItemName.classList.add("menu-item-name");
  menuItemName.textContent = itemName;

  menuItem.append(menuItemName);

  const menuItemDescription = document.createElement("p");
  menuItemDescription.classList.add("menu-item-description");
  menuItemDescription.textContent = itemDescription;

  // ADD CREATED ELEMENTS TO ROOT ELEMENT
  menuItem.append(menuItemDescription);

  itemToAppend.append(menuItem);
}
