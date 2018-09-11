var small = 7.50;
var total0 = prompt("how many small pizz'a do you want?");


document.write("Small pizza's =" + total0);
document.write("<br> Price = " + total0 * small);

var medium = 9.50;
var Medium = prompt("how many medium pizza's do you want?");

document.write("<br><br> Medium pizza's =" + Medium);
document.write("<br> Price = " + Medium * medium);

var large = 12.00;
var total2 = prompt("how many large pizza's do you want?");

document.write("<br><br> Large pizza's = " + total2);
document.write("<br> Price = " + total2 * large);
document.write("<br>");

var total=total0+ Medium+total2;
document.write("Price=" + total);
 
