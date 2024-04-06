const cartData = JSON.parse(localStorage.getItem("cartData"));

function cartItems() {
  var itemDetails = document.getElementById("item-details");
  itemDetails.innerHTML = "";

  cartData.map((item) => {
    // Create main container div
    var itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "item-container");

    // Create image and buttons container div
    var imageAndBtn = document.createElement("div");
    imageAndBtn.setAttribute("class", "image-and-btn");

    // Create image element
    var img = document.createElement("img");
    img.src = item.img;
    imageAndBtn.appendChild(img);

    // Create minus and plus container div
    var minusAndPlus = document.createElement("div");
    minusAndPlus.setAttribute("class", "minus-and-plus add-to-cart");
    imageAndBtn.appendChild(minusAndPlus);

    // Create minus button
    var minusBtn = document.createElement("div");
    minusBtn.setAttribute("class", "minus minus-plus");
    minusBtn.textContent = "-";

    // Create digit display
    var digitDisplay = document.createElement("div");
    digitDisplay.setAttribute("class", "digit minus-plus");
    digitDisplay.textContent = item.quantity;

    // Create plus button
    var plusBtn = document.createElement("div");
    plusBtn.setAttribute("class", "plus minus-plus");
    plusBtn.textContent = "+";

    // Append child elements to their respective parent elements
    minusAndPlus.appendChild(minusBtn);
    minusAndPlus.appendChild(digitDisplay);
    minusAndPlus.appendChild(plusBtn);

    // Create item info container div
    var itemInfo = document.createElement("div");
    itemInfo.setAttribute("class", "item-info");

    // Create item name paragraph
    var itemName = document.createElement("p");
    itemName.setAttribute("class", "item-name");
    itemName.textContent = item.name;

    // Create item price paragraph
    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("class", "item-price");
    itemPrice.innerHTML = "₹ " + item.price;
    // itemPrice.innerHTML = '₹ 13 <span>₹ 50</span>';

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);

    // Create delivery time container div
    var deliveryTime = document.createElement("div");
    deliveryTime.setAttribute("class", "delivery-time");

    // Create delivery time paragraph
    var deliveryTimeParagraph = document.createElement("p");
    deliveryTimeParagraph.textContent = "Delivered in 40 minutes";

    deliveryTime.appendChild(deliveryTimeParagraph);

    // Append all the child elements to the main container div
    itemContainer.appendChild(imageAndBtn);
    itemContainer.appendChild(itemInfo);
    itemContainer.appendChild(deliveryTime);

    // Append the main container div to the body
    itemDetails.appendChild(itemContainer);
  });

  document.querySelectorAll(".plus").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });

  const minus = document.querySelectorAll(".minus");
  minus.forEach((item) => {
    item.addEventListener("click", decrementItem);
  });
}
cartItems();
totalAmount();

function incrementItem() {
  // console.log(this.parentNode.parentNode.nextSibling.firstChild.innerText);
  let itemToInc = this.parentNode.parentNode.nextSibling.firstChild.innerText;
  console.log(itemToInc);
  var incObj = cartData.find((element) => element.name == itemToInc);
  incObj.quantity += 1;
  currPrice =
    (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
    (incObj.quantity - 1);
  incObj.price = currPrice * incObj.quantity;
  localStorage.setItem("cartData", JSON.stringify(cartData));

  console.log("This is quantity " + incObj.quantity);
  var totalQuantity = incObj.quantity;

  totalAmount();
  cartItems();
}

var currPrice = 0;
function decrementItem() {
  // console.log(this.parentNode.parentNode.nextSibling.firstChild.innerText);
  let itemToInc = this.parentNode.parentNode.nextSibling.firstChild.innerText;
  let decObj = cartData.find((element) => element.name == itemToInc);
  let ind = cartData.indexOf(decObj);
  console.log("This is index :" + ind);

  if (decObj.quantity > 1) {
    currPrice =
      (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) /
      decObj.quantity;
    decObj.quantity -= 1;
    decObj.price = currPrice * decObj.quantity;
    localStorage.setItem("cartData", JSON.stringify(cartData));
  } else {
    cartData.splice(ind, 1);
    removeItem();
  }
  totalAmount();
  cartItems();
}

function removeItem(productName) {
  let temp = cartData.filter((item) => item.name != productName);
  localStorage.setItem("cartData", JSON.stringify(temp));
}

function totalAmount() {
  var sum = 0;
  cartData.map((item) => {
    sum += item.price;
  });
  document.getElementById("total-item").innerText = cartData.length;
  document.getElementById("total-price").innerText = "₹ " + sum;
}
