
//totale prijzen van de pizza's 

var smallPizzaPrice = 7.50;
var mediumPizzaPrice = 9.50;
var largePizzaPrice = 12.00;

//berekeningen voor pizza small
var totalPriceSmall = prompt("how many small pizz'a do you want?");

document.write("Small pizza's =" + totalPriceSmall);
document.write("<br> Price = " + totalPriceSmall * smallPizzaPrice);

//berekeningen voor pizza medium 
var totalPriceMedium = prompt("how many medium pizza's do you want?");

document.write("<br><br> Medium pizza's =" + totalPriceMedium);
document.write("<br> Price = " + totalPriceMedium * mediumPizzaPrice);

//berekeningen voor pizza Large
var totalPriceLarge = prompt("how many large pizza's do you want?");

document.write("<br><br> Large pizza's = " + totalPriceLarge);
document.write("<br> Price = " + totalPriceLarge * largePizzaPrice);
document.write("<br>");


//berekening totaal 
var total=smallPizzaPrice*totalPriceSmall + mediumPizzaPrice*totalPriceMedium + largePizzaPrice*totalPriceLarge;
document.write("Price=" + total);
 
