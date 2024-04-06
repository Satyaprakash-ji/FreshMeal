import { foodItem } from "./fooditem.js";

function displayItems() {
  var sandwiches = document.querySelector("#sandwiches");
  var pizzas = document.querySelector("#pizzas");
  var burgersAndMore = document.querySelector("#burger-and-more");
  var Noodles = document.querySelector("#noodles");
  var Bowls = document.querySelector("#bowls");
  var Superbowls = document.querySelector("#superbowls");
  var Thalis = document.querySelector("#thalis");
  var Wraps = document.querySelector("#wraps");
  var KetoSpecials = document.querySelector("#keto-specials");
  var SoupsAndSalads = document.querySelector("#soups-and-salads");
  var AllDayBreakfast = document.querySelector("#all-day-breakfast");
  var DessertsAndBeverages = document.querySelector("#desserts-and-beverages");

  let sandwichesData = foodItem.filter((item) => item.category == "sandwiches");
  let pizzasData = foodItem.filter((item) => item.category == "pizzas");
  let BurgersAndMoreData = foodItem.filter(
    (item) => item.category == "burgersAndMore"
  );
  let NoodlesData = foodItem.filter((item) => item.category == "noodles");
  let BowlsData = foodItem.filter((item) => item.category == "bowls");
  let SuperbowlsData = foodItem.filter((item) => item.category == "superbowls");
  let ThalisData = foodItem.filter((item) => item.category == "thalis");
  let WrapsData = foodItem.filter((item) => item.category == "wraps");
  let KetoSpecialsData = foodItem.filter(
    (item) => item.category == "keto-specials"
  );
  let SoupsAndSaladsData = foodItem.filter(
    (item) => item.category == "soups-and-salads"
  );
  let AllDayBreakfastData = foodItem.filter(
    (item) => item.category == "all-day-breakfast"
  );
  let DessertsAndBeveragesData = foodItem.filter(
    (item) => item.category == "desserts-and-beverages"
  );

  function products() {
    // if(flag == false){

    sandwichesData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      sandwiches.appendChild(itemCard);
    });

    pizzasData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      pizzas.appendChild(itemCard);
    });

    BurgersAndMoreData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      burgersAndMore.appendChild(itemCard);
    });

    NoodlesData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      Noodles.appendChild(itemCard);
    });

    BowlsData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      Bowls.appendChild(itemCard);
    });

    SuperbowlsData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      Superbowls.appendChild(itemCard);
    });

    ThalisData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      Thalis.appendChild(itemCard);
    });

    WrapsData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      Wraps.appendChild(itemCard);
    });

    KetoSpecialsData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      KetoSpecials.appendChild(itemCard);
    });

    SoupsAndSaladsData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      SoupsAndSalads.appendChild(itemCard);
    });

    AllDayBreakfastData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      AllDayBreakfast.appendChild(itemCard);
    });

    DessertsAndBeveragesData.map((item) => {
      var itemCard = document.createElement("div");
      itemCard.setAttribute("id", "item-card");

      var iconAndCuisine = document.createElement("div");
      iconAndCuisine.setAttribute("class", "icon-and-cuisine");

      var iconBox = document.createElement("div");
      iconBox.className = "icon-box";

      iconAndCuisine.appendChild(iconBox);

      var icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      icon.src = item.icon;

      iconBox.appendChild(icon);

      var itemCuisine = document.createElement("h6");
      itemCuisine.textContent = "ASIAN";
      itemCuisine.setAttribute("class", "cuisine");

      iconAndCuisine.appendChild(itemCuisine);

      var itemImage = document.createElement("div");
      itemImage.className = "item-image";

      var img = document.createElement("img");
      img.src = item.img;

      itemImage.appendChild(img);

      var itemName = document.createElement("h3");
      itemName.setAttribute("class", "item-name");
      itemName.innerText = item.name;

      var PriceAndButton = document.createElement("div");
      PriceAndButton.setAttribute("class", "price-and-btn");

      var itemPrice = document.createElement("p");
      itemPrice.setAttribute("class", "price");
      itemPrice.innerText = "₹" + item.price;

      var AddButton = document.createElement("div");
      AddButton.textContent = "Add";
      AddButton.setAttribute("class", "add-btn add-to-cart");

      PriceAndButton.appendChild(itemPrice);
      PriceAndButton.appendChild(AddButton);

      itemCard.appendChild(iconAndCuisine);
      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemName);
      itemCard.appendChild(PriceAndButton);

      DessertsAndBeverages.appendChild(itemCard);
    });

    // }
  }

  products();

  const selectTaste = document.querySelector("#select-taste");
  let vegTaste = document.querySelector(".veg");
  let nonvegTaste = document.querySelector(".non-veg");

  selectTaste.addEventListener("click", (value) => {
    let selectFoodPreference = value.target.className;

    switch (selectFoodPreference) {
      case "veg":
        value.target.classList.add("activeVeg");
        value.target.nextElementSibling.classList.remove("activeNonveg");
        vegTaste.id = "";
        nonvegTaste.id = "nonveg-hover";

        sortProductsVeg();
        break;

      case "non-veg":
        value.target.classList.add("activeNonveg");
        value.target.previousElementSibling.classList.remove("activeVeg");
        nonvegTaste.id = "";
        vegTaste.id = "veg-hover";

        sortProductsNonveg();
        break;

      // default:
      //     // window.location.reload();
      //     defaultSort();
      //     break;
    }
  });

  let selectVeg = document.querySelector("#veg");
  selectVeg.addEventListener("click", toggleVegActive);

  function toggleVegActive() {
    selectVeg.classList.toggle("vegActive");
    console.log(selectVeg);

    if (selectVeg.className != "") {
      sortProductsVeg();
    }

    if (selectVeg.className == "") {
      defaultSort();
    }
  }

  let lowPrice = document.querySelector("#low-price");
  lowPrice.addEventListener("click", togglePriceActive);

  function togglePriceActive() {
    lowPrice.classList.toggle("priceActive");

    if (lowPrice.className != "") {
      sortProductsLowToHigh();
    }

    if (lowPrice.className == "") {
      defaultSort();
    }
  }

  const filter = document.querySelector(".filter span");

  filter.addEventListener("click", toggleFilter);

  function toggleFilter() {
    filter.classList.toggle("filter");
    console.log(filter.className);

    if (filter.className == "filter") {
      console.log(filter.nextElementSibling.style);
      filter.nextElementSibling.style.visibility = "visible";
    }
    // console.log(object);
    if (filter.className != "filter") {
      filter.nextElementSibling.style.visibility = "hidden";
      console.log(filter.nextElementSibling.style);
    }
  }

  const select = document.querySelector("#select");
  let lowToHighHover = document.querySelector("#low-to-high-hover");
  let highToLowHover = document.querySelector("#high-to-low-hover");

  select.addEventListener("click", (value) => {
    let selectSortByPrice = value.target.className;

    switch (selectSortByPrice) {
      case "low-to-high":
        value.target.classList.add("activeLow");
        value.target.nextElementSibling.classList.remove("activeHigh");
        lowToHighHover.id = "";
        highToLowHover.id = "high-to-low-hover";

        sortProductsLowToHigh();
        break;

      case "high-to-low":
        value.target.classList.add("activeHigh");
        value.target.previousElementSibling.classList.remove("activeLow");
        highToLowHover.id = "";
        lowToHighHover.id = "low-to-high-hover";

        sortProductsHighToLow();
        break;

      case "default":
        // window.location.reload();
        value.target.nextElementSibling.classList.remove("activeLow");
        value.target.nextElementSibling.nextElementSibling.classList.remove(
          "activeHigh"
        );
        lowToHighHover.id = "low-to-high-hover";
        highToLowHover.id = "high-to-low-hover";

        vegTaste.classList.remove("activeVeg");
        nonvegTaste.classList.remove("activeNonveg");
        vegTaste.id = "veg-hover";
        nonvegTaste.id = "nonveg-hover";

        defaultSort();
        break;
    }
  });

  function sortProductsLowToHigh() {
    const productList = document.getElementsByClassName("food-name");
    sandwichesData.sort((a, b) => a.price - b.price);
    pizzasData.sort((a, b) => a.price - b.price);
    BurgersAndMoreData.sort((a, b) => a.price - b.price);
    NoodlesData.sort((a, b) => a.price - b.price);
    BowlsData.sort((a, b) => a.price - b.price);
    SuperbowlsData.sort((a, b) => a.price - b.price);
    ThalisData.sort((a, b) => a.price - b.price);
    WrapsData.sort((a, b) => a.price - b.price);
    KetoSpecialsData.sort((a, b) => a.price - b.price);
    SoupsAndSaladsData.sort((a, b) => a.price - b.price);
    AllDayBreakfastData.sort((a, b) => a.price - b.price);
    DessertsAndBeveragesData.sort((a, b) => a.price - b.price);
    for (let i of productList) {
      i.innerHTML = "";
    }

    products();

    document.querySelectorAll(".add-to-cart").forEach((item) => {
      item.addEventListener("click", addToCart);
    });

    appendButton();
    showAppendButton();
  }

  function sortProductsHighToLow() {
    const productList = document.getElementsByClassName("food-name");
    sandwichesData.sort((a, b) => b.price - a.price);
    pizzasData.sort((a, b) => b.price - a.price);
    BurgersAndMoreData.sort((a, b) => b.price - a.price);
    NoodlesData.sort((a, b) => b.price - a.price);
    BowlsData.sort((a, b) => b.price - a.price);
    SuperbowlsData.sort((a, b) => b.price - a.price);
    ThalisData.sort((a, b) => b.price - a.price);
    WrapsData.sort((a, b) => b.price - a.price);
    KetoSpecialsData.sort((a, b) => b.price - a.price);
    SoupsAndSaladsData.sort((a, b) => b.price - a.price);
    AllDayBreakfastData.sort((a, b) => b.price - a.price);
    DessertsAndBeveragesData.sort((a, b) => b.price - a.price);
    for (let i of productList) {
      i.innerHTML = "";
    }
    products();

    document.querySelectorAll(".add-to-cart").forEach((item) => {
      item.addEventListener("click", addToCart);
    });

    appendButton();
    showAppendButton();
  }

  function defaultSort() {
    const productList = document.getElementsByClassName("food-name");
    sandwichesData = foodItem.filter((item) => item.category == "sandwiches");
    pizzasData = foodItem.filter((item) => item.category == "pizzas");
    BurgersAndMoreData = foodItem.filter(
      (item) => item.category == "burgersAndMore"
    );
    NoodlesData = foodItem.filter((item) => item.category == "noodles");
    BowlsData = foodItem.filter((item) => item.category == "bowls");
    SuperbowlsData = foodItem.filter((item) => item.category == "superbowls");
    ThalisData = foodItem.filter((item) => item.category == "thalis");
    WrapsData = foodItem.filter((item) => item.category == "wraps");
    KetoSpecialsData = foodItem.filter(
      (item) => item.category == "keto-specials"
    );
    SoupsAndSaladsData = foodItem.filter(
      (item) => item.category == "soups-and-salads"
    );
    AllDayBreakfastData = foodItem.filter(
      (item) => item.category == "all-day-breakfast"
    );
    DessertsAndBeveragesData = foodItem.filter(
      (item) => item.category == "desserts-and-beverages"
    );

    for (let i of productList) {
      i.innerHTML = "";
    }
    products();

    document.querySelectorAll(".add-to-cart").forEach((item) => {
      item.addEventListener("click", addToCart);
    });

    appendButton();
    showAppendButton();
  }

  function sortProductsVeg() {
    const productList = document.getElementsByClassName("food-name");
    sandwichesData = foodItem.filter(
      (item) => item.category == "sandwiches" && item.taste == "veg"
    );
    pizzasData = foodItem.filter(
      (item) => item.category == "pizzas" && item.taste == "veg"
    );
    BurgersAndMoreData = foodItem.filter(
      (item) => item.category == "burgersAndMore" && item.taste == "veg"
    );
    NoodlesData = foodItem.filter(
      (item) => item.category == "noodles" && item.taste == "veg"
    );
    BowlsData = foodItem.filter(
      (item) => item.category == "bowls" && item.taste == "veg"
    );
    SuperbowlsData = foodItem.filter(
      (item) => item.category == "superbowls" && item.taste == "veg"
    );
    ThalisData = foodItem.filter(
      (item) => item.category == "thalis" && item.taste == "veg"
    );
    WrapsData = foodItem.filter(
      (item) => item.category == "wraps" && item.taste == "veg"
    );
    KetoSpecialsData = foodItem.filter(
      (item) => item.category == "keto-specials" && item.taste == "veg"
    );
    SoupsAndSaladsData = foodItem.filter(
      (item) => item.category == "soups-and-salads" && item.taste == "veg"
    );
    AllDayBreakfastData = foodItem.filter(
      (item) => item.category == "all-day-breakfast" && item.taste == "veg"
    );
    DessertsAndBeveragesData = foodItem.filter(
      (item) => item.category == "desserts-and-beverages" && item.taste == "veg"
    );

    for (let i of productList) {
      i.innerHTML = "";
    }
    products();

    document.querySelectorAll(".add-to-cart").forEach((item) => {
      item.addEventListener("click", addToCart);
    });

    appendButton();
    showAppendButton();
  }

  function sortProductsNonveg() {
    const productList = document.getElementsByClassName("food-name");
    sandwichesData = foodItem.filter(
      (item) => item.category == "sandwiches" && item.taste == "nonveg"
    );
    pizzasData = foodItem.filter(
      (item) => item.category == "pizzas" && item.taste == "nonveg"
    );
    BurgersAndMoreData = foodItem.filter(
      (item) => item.category == "burgersAndMore" && item.taste == "nonveg"
    );
    NoodlesData = foodItem.filter(
      (item) => item.category == "noodles" && item.taste == "nonveg"
    );
    BowlsData = foodItem.filter(
      (item) => item.category == "bowls" && item.taste == "nonveg"
    );
    SuperbowlsData = foodItem.filter(
      (item) => item.category == "superbowls" && item.taste == "nonveg"
    );
    ThalisData = foodItem.filter(
      (item) => item.category == "thalis" && item.taste == "nonveg"
    );
    WrapsData = foodItem.filter(
      (item) => item.category == "wraps" && item.taste == "nonveg"
    );
    KetoSpecialsData = foodItem.filter(
      (item) => item.category == "keto-specials" && item.taste == "nonveg"
    );
    SoupsAndSaladsData = foodItem.filter(
      (item) => item.category == "soups-and-salads" && item.taste == "nonveg"
    );
    AllDayBreakfastData = foodItem.filter(
      (item) => item.category == "all-day-breakfast" && item.taste == "nonveg"
    );
    DessertsAndBeveragesData = foodItem.filter(
      (item) =>
        item.category == "desserts-and-beverages" && item.taste == "nonveg"
    );

    for (let i of productList) {
      i.innerHTML = "";
    }
    products();

    document.querySelectorAll(".add-to-cart").forEach((item) => {
      item.addEventListener("click", addToCart);
    });

    appendButton();
    showAppendButton();
  }
}

displayItems();

/*   Smooth Scroll   */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var cartData = JSON.parse(localStorage.getItem("cartData")) || [];

var cartValue = document.getElementById("cart-plus");
cartValue.innerText = " " + cartData.length;

document.querySelectorAll(".add-to-cart").forEach((item) => {
  item.addEventListener("click", addToCart);
});

function addToCart() {
  var itemToAdd = this.parentNode.previousSibling.innerText;
  // console.log(this.parentNode.previousSibling.innerText);
  var itemObj = foodItem.find((element) => element.name == itemToAdd);
  // console.log(itemObj);
  var clikedObj = cartData.find((element) => element.name == itemToAdd);
  // console.log(clikedObj);

  if (clikedObj == undefined) {
    var index = cartData.indexOf(itemObj);
    if (index === -1) {
      cartData = [...cartData, itemObj];
    } else if (index > -1) {
      console.log(index);
      alert("Added to cart!");
    }

    cartValue.innerText = " " + cartData.length;
  } else {
    alert("Item already added!!");
  }

  localStorage.setItem("cartData", JSON.stringify(cartData));
}

function appendButton() {
  document.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", () => {
      item.innerHTML = "Added";
      item.style.color = "White";
    });
  });
}

appendButton();

//? After refresh button visible.

function showAppendButton() {
  cartData.forEach((value) => {
    document.querySelectorAll(".add-to-cart").forEach((item) => {
      let itemName = item.parentNode.previousSibling.innerText;
      // console.log(item.parentNode.previousSibling.innerText);
      // var index = 0;
      if (value.name === itemName) {
        item.innerHTML = "Added";
        item.style.color = "White";
      }
    });
  });
}
showAppendButton();

function plusMinus() {
  var plusClick = document.querySelectorAll(".plus");
  console.log(plusClick);
  plusClick.forEach((value) => {
    // console.log(value);
    value.addEventListener("click", (item) => {
      console.log(item.target.classList.value);
      if (item.target.classList.value == "minus-plus plus") {
        console.log("hello");
        // console.log(value.classList);
        console.log(plusClick);
      }
    });
  });

  var minusClick = document.querySelectorAll(".minus");
}
plusMinus();

function plus() {
  plusClick.forEach((item) => {
    item.addEventListener("click", incrementItem);
  });
}
// plus();
function minus() {
  minusClick.forEach((item) => {
    item.addEventListener("click", decrementItem);
  });
}
// minus();

function incrementItem() {
  console.log("I Am +");
  console.log(this);
}

var currPrice = 0;
function decrementItem() {
  console.log("I Am -");
  console.log(this);
}
