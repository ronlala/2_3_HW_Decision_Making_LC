
let itemName = prompt("Enter the name of the Item:");
let basePrice = Number(prompt("What is the base Price of the item?"));
let isToday = prompt("Is today Black Friday? Answer yes or no. ");
let searchEngine = prompt("Did the purchaser find the product through a search engine? Answer yes or no.");
let  otherSite = prompt("Did the purchaser visit a comparison shopping site? Answer yes or no.");

if ( isToday === "yes" ){
    isTodayprice=((basePrice-(basePrice *.25) ) );
    isTodaymessage =("Since it's Black Friday, We will reduce the price by 25%");
} else{
    isTodayprice=(basePrice);
    isTodaymessage = ("It's not Black Friday, so the price didn't change for that.");
};

if (searchEngine === "yes"){
    searchEngineprice=((basePrice + (basePrice *.01)));
    searchEnginemessage = ("We will increase the price by 1% to pay the search engine");
} else {
    searchEngineprice=( basePrice );
    searchEnginemessage=(" The customer didn't use a search engine, so the price didn't change for that");
};

if (otherSite === "yes"){
    otherSiteprice=((basePrice - (basePrice *.1) ));
    otherSitemessge = ("Since the customer visited a comparison-shopping site, we will reduce the price by 10%.");
} else {
    otherSiteprice = (basePrice);
    otherSitemessge = ("The customer didn't visit a comparison-shopping site,so the price didn't chage for that");
};

finalPrice = basePrice -((basePrice * 3)-(isTodayprice + searchEngineprice + otherSiteprice));
console.log("The base price for the" + " " + itemName + " " + is + " " + "$" + basePrice + " "+ isTodayprice + " ");