var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var input;

const FRISPRIJS =2.50;
const BIERPRIJS =3.50;
const WIJNPRIJS =4.00;

while (input != ("stop")){


    input = prompt("wat wilt u bestellen?");
    if (input == "fris") {
        var newFris = parseInt(prompt("hoeveel fris wilt u bestellen?"));
        fris = fris + newFris;
        console.log(fris , "x" , FRIS);
    }
    else if (input == "bier"){
        var newBier = parseInt(prompt("hoeveel bier wilt u bestellen?"));
        bier = bier + newBier;
        console.log(bier , "x" , BIER);
    }
    else if (input == "wijn"){
        var newWijn = parseInt(prompt("hoeveel wijn wilt u bestellen?"));
        wijn = wijn + newWijn;
        console.log(wijn , "x" , WIJN);
    }
}


var priceFris = aantalFrisFrisPRICE;
var priceBier = aantalBierMEDIUMPRICE;
var priceWijn = aantalWijnLARGEPRICE;
var totalPrice = priceFris+priceBier+priceWijn;




document.write( aantalFris ," ", "fris" ," ", "€" , aantalFrisFRISPRIJS); 
document.write("<br>", aantalBier ," ",  "bier" ," ", "€" , aantalBierBIERPRIJS);
document.write("<br>", aantalWijn ," ",  "wijn" ," ", "€" , aantalWijnWIJNPRIJS);

document.write("<br><br>Het totaalbedrag is"," ","€",totalPrice, ",-");