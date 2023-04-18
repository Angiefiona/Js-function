// You manage a grocery store and need to keep track of the inventory of various items. 
//You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
const items = ["Tomato","Pepper","Mangoes","Cabbages","Pumpkin","Oranges","Apples","Beetroot","Spinach","Yams",];
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stock = [4,6,10,30,2,3,1,5,0,12];
// Write a function to add a new item to the inventory, updating both arrays.
function itemAdd(groceryName, stockQuantity){
items.push(groceryName);
stock.push(stockQuantity);
}
itemAdd("Kiwi", 18);
console.log(items);
console.log(stock);
// Write a function to calculate the total number of items in the inventory.
function totalNumber(stock){
    let total = 0;
    for(let i = 0; i < stock.length;  i++){
        total += stock[i];
    }
    return total
}
console.log(totalNumber(stock));

// Write a function to find the item with the lowest stock quantity.
function lowestStock(){
    let  lowest = stock[0];
    let index = 0
    for(let i=1; i<stock.length; i++){
        if(stock[i]<lowest){
            lowest = stock[i];
        }
    }
    return lowestStock[index];
}




