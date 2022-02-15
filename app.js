'use strict';

//start of city objects
let seattle = {
  name: 'Seattle',
  minV: 23,
  maxV: 65,
  avgC: 6.3,
  randomC: 0,
  //mothod to assign a randomC to be used for our array
  customers: function(){
    this.randomC = Math.round((random(this.minV, this.maxV)) * this.avgC);
  }
};

// funtion that takes two numbers and picks a random number between them.

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
//the function that will create our arrays
// let totalCookies = 0;
let cookieString = [];
let totalCookies = 0;
function myObj(objId){

  for(let i = 0; i < 14; i++){
    seattle.customers();
    totalCookies = totalCookies + objId.randomC;
    cookieString.push(objId.randomC);
  }

  return [cookieString, totalCookies];
}
myObj(seattle);
console.log(cookieString);
console.log(totalCookies);
// let newString = [];
for(let i = 0; i < cookieString.length; i++){
  let newString = '${i+6}am: ${cookieString[i]}';
  console.log(newString);
}

console.log(newString);
