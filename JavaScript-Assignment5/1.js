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
var statusMsg = document.getElementById ("wrongNum")
const TaxRate = 9.25 / 100

addToCartButton.addEventListener("click", addItemToCart)

//Make the function for add to cart
function addItemToCart(){
    //Takes Number from scanner
    var barcodeNum = barcode.value;
    //takes user quantity
    var quantity = quantityInput.value;

    if(items.hasOwnProperty(barcodeNum)){
        let itemsInfo = items[barcodeNum];
        let numOfItems = quantity;
        //creates new div
        var itemsElement = document.createElement("div");
        itemsElement.classList.add("items");
        itemsElement.classList.add("itemsContainer")
         //Creates new p element

        var itemName = document.createElement("p");
        itemName.innerText = itemsInfo.name;

        var itemPrice = document.createElement("p");
        itemPrice.innerText = itemsInfo.price;
        
        var itemQuantity = document.createElement ("p");
        itemQuantity.innerText = numOfItems;


        total += parseFloat(itemsInfo) * parseFloat(itemQuantity)



        itemsElement.append(itemName);
        itemsElement.append(itemPrice);
        itemsElement.append(itemQuantity);

        list.append(itemsElement);
    }
    else{
        statusMsg.innerText = "The item is not in the system"
    }

   
}

