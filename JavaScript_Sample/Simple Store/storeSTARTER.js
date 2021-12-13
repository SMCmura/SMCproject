"using strict;"
//Sumie Murakawa

//create array of objects 
//each product is an object with item and price 
//{item: "itemname": price: 10}
const inventory = [
//add objects here
    {item: "Sourdough", price: 8},
    {item: "Baguette", price: 7},
    {item: "Dinner roll", price: 1},
    {item: "Cinnamon roll", price: 3},
    {item: "Cheese danish", price: 3}
];

//declare any global variables
let grandtotal = 0;
let gReceiptStr = "";
//display the inventory in a table on the webpage
var tableHTML = " <table>" +
                "<caption>MENU</caption>" +
                "<tr><th></th><th>Price</th></tr>";
console.log(tableHTML);

for(var i = 0; i < inventory.length; i++){
    //add the rows for each product[i]
    tableHTML += " <tr><td>" + inventory[i].item + 
    "</td><td>" + inventory[i].price +
    "</td></tr>"
}
//add the rows for products
//close the table
tableHTML += "</table>";
console.log(tableHTML);
//display this table in the div in html
document.getElementById("itemList").innerHTML = tableHTML;

//function to run when add is clicked
function addItem(){
    console.log("addItem button clicked")

    //call findPrice function
    let itemPrice = findPrice(document.getElementById("item").value);
    console.log("itemPrice is " + itemPrice);
    let itemName = document.getElementById("item").value;
    console.log("itemName is " + itemName);
    let itemQty = document.getElementById("qty").value;
    console.log("itemQty is " + itemQty);

    console.log("grandtotal is " + grandtotal);
    //make sure all inputs are present and valid, alert message if not
    if((itemName =="") || (itemQty =="")){
        window.alert("missing data");
    }
    //make sure item name matchs the listed name, alert message if not
    else if(itemPrice == -1){
        window.alert("item not found");
    }
    //make sure qty is number, alert message if not
    else if(isNaN(itemQty)){
        window.alert("Please input numbers");
    }
    else{
        //caliculate total due
        grandtotal += itemPrice * itemQty;
        //display total due on the html page
        document.getElementById("pTotalDue").innerHTML = "Total Due $ " +  grandtotal;
        //make receipt text and display receipt on the html page
        gReceiptStr += itemQty + " " + itemName + " at $" + itemPrice + " each = $" + (itemQty * itemPrice) + "\n";
        document.getElementById("txReceipt").value = gReceiptStr;
    }
}


//function to run when clear is clicked
function newOrder(){
    console.log("newOrder button clicked")
    document.getElementById("pTotalDue").innerHTML = "Total Due $ ";
    document.getElementById("txReceipt").value = "";
    document.getElementById("item").value = "";
    document.getElementById("qty").value = "";
    grandtotal = 0;
    gReceiptStr = "";
}


//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem){
            return inventory[i].price;
        }
    }
    //not found, return -1
    return -1;
}
