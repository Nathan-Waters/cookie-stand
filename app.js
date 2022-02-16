'use strict';
//the hours that the store will be open
let openHours = ['6am:', '7am:','8am:', '9am:', '10am:', '11am:', '12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm', '7pm:'];
//stop 1: window into the DOM
// 1 way - document.getElementById - method that will take a string for the ID
// 2nd - document.querySelector - method that takes in a string, id, class, element type
let htmlBodyWindow = document.getElementById('sales');
console.log(htmlBodyWindow);
console.dir(htmlBodyWindow);
//start of city objects
//seattle object
let seattle = {
  name: 'Seattle',
  minV: 23,
  maxV: 65,
  avgC: 6.3,
  randomC: 0,
  totalC: 0,
  custEachHour: [],
  //mothod to assign a randomC to be used for our array
  customers: function(){
    this.randomC = Math.round((random(this.minV, this.maxV)) * this.avgC);
  }
};
// tokyo object
let tokyo = {
  name: 'Tokyo',
  minV: 3,
  maxV: 24,
  avgC: 1.2,
  randomC: 0,
  totalC: 0,
  custEachHour: [],
  //mothod to assign a randomC to be used for our array
  customers: function(){
    this.randomC = Math.round((random(this.minV, this.maxV)) * this.avgC);
  }
};
//dubai object
let dubai = {
  name: 'Dubai',
  minV: 11,
  maxV: 38,
  avgC: 3.7,
  randomC: 0,
  totalC: 0,
  custEachHour: [],
  //mothod to assign a randomC to be used for our array
  customers: function(){
    this.randomC = Math.round((random(this.minV, this.maxV)) * this.avgC);
  }
};
// paris object
let paris = {
  name: 'Paris',
  minV: 20,
  maxV: 38,
  avgC: 2.3,
  randomC: 0,
  totalC: 0,
  custEachHour: [],
  //mothod to assign a randomC to be used for our array
  customers: function(){
    this.randomC = Math.round((random(this.minV, this.maxV)) * this.avgC);
  }
};
// lima object
let lima = {
  name: 'Lima',
  minV: 2,
  maxV: 16,
  avgC: 4.6,
  randomC: 0,
  totalC: 0,
  custEachHour: [],
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
//function that creates teh array for each store
function createArr(arr){
  for(let i = 0; i < openHours.length; i++){
    arr.customers();
    arr.custEachHour.push(`${openHours[i]} ${arr.randomC} cookies`);
    arr.totalC += arr.randomC;
  }
}
// DOM Manipulation
//step 1 - js needs a window into the dom normally at the top
seattle.render = function(){
  createArr(this);
  //step 2 - js will create an element - document.createElement - method, string of the html element you want to create
  let h2Elem = document.createElement('h2');
  //step 3 - give it context if needed
  h2Elem.textContent = this.name;
  //step 4 - add it to the DOM -- parent.appendChild(child)
  htmlBodyWindow.appendChild(h2Elem);
  let ulElem = document.createElement('ul');
  htmlBodyWindow.appendChild(ulElem);
  for(let i = 0; i < this.custEachHour.length; i++){
    let hour = this.custEachHour[i];
    let liElem = document.createElement('li');
    liElem.textContent = hour;
    ulElem.appendChild(liElem);
  }
};
seattle.render();

createArr(seattle);
console.log(seattle.custEachHour);
console.log(seattle.totalC);

createArr(tokyo);
console.log(tokyo.custEachHour);
console.log(tokyo.totalC);

createArr(dubai);
console.log(dubai.custEachHour);
console.log(dubai.totalC);

createArr(paris);
console.log(paris.custEachHour);
console.log(paris.totalC);

createArr(lima);
console.log(lima.custEachHour);
console.log(lima.totalC);
