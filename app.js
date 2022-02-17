'use strict';

let htmlBodyWindow = document.getElementById('table');
// let table = document.querySelector('table');
let openHours = ['6am', '7am','8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeCreation = [];

//constructor - starts with function and capital letters
// parameters - unique properties

function Store(name, minV, maxV, avgC){
  this.storeName = name;
  this.minimumValue = minV;
  this.maximumValue = maxV;
  this.averageCustomer = avgC;
  this.randomC = 0;
  this.totalC = 0;
  this.custEachHour = [];
  storeCreation.push(this);
}

// funtion that takes two numbers and picks a random number between them.
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
// function that creates teh array for each store
Store.prototype.createArr = function (arr){
  for(let i = 0; i < openHours.length; i++){
    arr.randomize();
    arr.custEachHour.push(arr.randomC);
    arr.totalC += arr.randomC;
  }
};

// used in the function above to make the values in the array
Store.prototype.randomize = function() {
  this.randomC = Math.round((random(this.minimumValue, this.maximumValue)) * this.averageCustomer);
};
// renderst the actual body of content
//displays the names of each row
Store.prototype.renderBody = function(){
  for(let i = 0; i < storeCreation.length; i++){
    let currentCity = storeCreation[i];
    let createR = document.createElement('tr');
    let createD = document.createElement('td');
    createD.textContent = currentCity.storeName;
    htmlBodyWindow.appendChild(createR);
    createR.appendChild(createD);
    //shows pulls the data out of the arrays 
    for(let j = 0; j < currentCity.custEachHour.length; j++){
      let hourlyCust = currentCity.custEachHour[j];
      let createNewD = document.createElement('td');
      createNewD.textContent = hourlyCust;
      createR.appendChild(createNewD);
    }
    //adds up each array before looping to the next one
    let totalCookies = document.createElement('td');
    totalCookies.textContent = currentCity.totalC;
    createR.appendChild(totalCookies);
  }
};
//creats the top or header bar of the table
function renderHeader(){
  let thElem = document.createElement('tr');
  let trElem = document.createElement('th');
  htmlBodyWindow.appendChild(thElem);
  thElem.appendChild(trElem);
  trElem.textContent = 'City';
  for(let i = 0; i < openHours.length; i++){
    let time = openHours[i];
    let header = document.createElement('th');
    header.textContent = time;
    thElem.appendChild(header);
  }
  let total = document.createElement('th');
  total.textContent = 'Daily Location Total';
  thElem.appendChild(total);
}

//initalizes all of the objects
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);
//creates the arrays in our objects
function renderAllStoresO() {
  for (let i = 0; i < storeCreation.length; i++) {
    let currentStore = storeCreation[i];
    currentStore.createArr(storeCreation[i]);
  }
}
renderAllStoresO();

//creation!

renderHeader();
seattle.renderBody();
