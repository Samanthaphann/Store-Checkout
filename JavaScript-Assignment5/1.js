//put in items to code

const items = {
    "689145740844":{
        name: "JavaScript Textbook",
        price: 34.95
    },


   "4549292070248": {
       name: "Xerox Paper",
       price: 10.99
   },
   "092265222983": {
        name: "First Aid Kit", 
    price: 20.99
   },
   "X002ELVL3J": {
        name: "Box of Pencils (50ct.)", 
        price: 15.99
   },
   "686024002468": {
        name: "Sanitizing Wipes", 
        price: 10.99

   }, 
   "860004186236": {
        name: "N95 Face Masks", 
        price: 15.99

   }, 

   "036000214000": {
        name: "Kleenex",
        price: 3.99

   }, 

   "809693254156": {
        name: "Hand Sanitizer",
        price: 7.99
   }, 

   "036500060480": {
        name: "Printer Paper",
        price: 9.99
   }, 

   "085014561877": {
        name: "Brush Pens",
        price: 10.99
   }, 

   "X0032YGP2T": {
        name: "Multiport Adapter",
        price: 25.99
   }, 
   
   "B07G6JT1XS": {
        name: "Scissors (20ct.)",
        price: 23.99
   }, 
   
   "9780134682334": {
        name: "iOS Programming Textbook", 
        price: 119.99
   }, 
   
   "718103230759": {
    name: "Spiral Notebook", 
    price: 1.99
   },
}

//Add variables needed for the cart
var barcode = document.getElementById("barcodeNum");
var quantityInput = document.getElementById("quantityNum");
var addToCartButton = document.getElementById("AddToCart")
// var item = document.getElementById("item");
var priceElement = document.getElementById("price");
var quantityElement = document.getElementById("quantity")
var total = document.getElementById("total");
var checkout = document.getElementById("checkout");
var list = document.getElementById ("list"); 
var statusMsg = document.getElementById ("wrongNum");
var runningTotal = 0;
var subtotal = document.getElementById("subtotal")
const TaxRate = 9.25 / 100

addToCartButton.addEventListener("click", addItemToCart)

//Make the function for add to cart
function addItemToCart(){
    //Takes Number from scanner
    var barcodeNum = barcode.value;
    //takes user quantity
    var quantity = quantityInput.value;

    if(items.hasOwnProperty(barcodeNum)){
     //create variable
        let itemsInfo = items[barcodeNum];
        let numOfItems = quantity;
        let tempPrice = numOfItems * parseFloat(itemsInfo.price);

        checkCart(itemsInfo);
        let foundItem = checkCart(itemsInfo);
        console.log(foundItem);


        if(foundItem){
          // adds a quantity if the item is the same
          let oldQuantity = foundItem.querySelector(".quanOfItem").innerText;
          let newQuantity = parseInt(oldQuantity) + parseInt(quantity);
          // oldQuantity = newQuantity;
          foundItem.querySelector(".quanOfItem").innerText = newQuantity
          updateTotal(tempPrice);
          return;
        }


        updateTotal(tempPrice);
        //creates new div
        var itemsElement = document.createElement("div");
        itemsElement.classList.add("itemsContainer")
         //Creates new p element

         //Create a name p element
        var itemName = document.createElement("p");
        itemName.innerText = itemsInfo.name;
        itemName.classList.add("nameOfItem");

        //Create a price p element
        var itemPrice = document.createElement("p");
        itemPrice.innerText = itemsInfo.price;
        itemPrice.classList.add("priceOfItem");
  
        //Create a quantity p element
        var itemQuantity = document.createElement ("p");
        itemQuantity.innerText = numOfItems;
        itemQuantity.classList.add("quanOfItem");


     //    total.innerText += parseFloat(itemsInfo.price) * parseFloat(itemQuantity)

        //takes the variable name and makes apart of the item element
        itemsElement.append(itemName);
        itemsElement.append(itemPrice);
        itemsElement.append(itemQuantity);

        list.append(itemsElement);
        

        console.log(updateTotal)
       
    }
    //show up not in system if the barcode isnt there
    else{
        statusMsg.innerText = "The item is not in the system"
    }

   
}

function updateTotal (tempPrice){
     //adds the total of the added item to the running total
     runningTotal += tempPrice;
     total.innerText = "Total: $" + runningTotal;

}

function checkCart(itemsInfo){
     // gets info about all of the items in cart
     let itemsInCart = document.querySelectorAll(".itemsContainer");
     
     //goes through all of the items in cart and updates the item
     for(let i = 0; i < itemsInCart.length; i++){
          let nameOfItem = itemsInCart[i].querySelector(".nameOfItem");
          if(itemsInfo.name === nameOfItem.innerText)
          return itemsInCart[i];
     }
}

//adds sales tax to the total
function checkoutCart(){
     //create sales tax
     let salesTax = 0.0925;
     //add sales tax to the running total
     let finalTotal = runningTotal + (runningTotal * salesTax);
     runningTotal = 0
     
     //add final total to the p element
     subtotal.innerText = "grand total including tax is $" + finalTotal.toFixed(2);
     
}

document.getElementById("checkoutButton").addEventListener("click", checkoutCart)