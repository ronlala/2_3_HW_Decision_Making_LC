
let itemName = prompt("Enter the naem of the Item:");
let basePrice = prompt("What is the base Price of the item?");
parseInt(basePrice);
let isToday = Prompt("Is today Black Friday? Answer yes or no. ");
let searchEngine = prompt("Did the purchaser find the product through a search engine? Answer yes or no.");
let  otherSite = prompt("Did the purchaser visit a comparison shopping site? Answer yes or no.");

if ( isToday === "yes" ){
    isTodayprice=((basePrice-(basePrice *.25) ) + " " + "Since it's Black Friday, We will reduce the price by 25%");
  
} else{
    isTodayprice=(basePrice + " " + "It's not Black Friday, so the price didn't change for that." );
    
};

if (searchEngine === "yes"){
    searchEngineprice=((basePrice + (basePrice *.01)) + " "+ "We will increase the price by 1% to pay the search engine");
} else {
    searchEngineprice=( basePrice + " " + " The customer didn't use a search engine, so the price didn't change for that");
};

if (otherSite === "yes"){
    otherSiteprice=((basePrice - (basePrice *.1) ) + " "+ "Since the customer visited a comparison-shopping site, we will reduce the price by 10%.");
} else {
    otherSiteprice( basePrice + " " + " The customer didn't visit a comparison-shopping site,so the price didn't chage for that");
};

console.log("The base price for the" + " " + itemName + " " + is + " " + "$" basePrice + " "+ isTodayprice + " " + );