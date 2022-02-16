'use strict';

let htmlBodyWindow = document.getElementById('sales');
let table = document.querySelector('table');
let openHours = ['6am:', '7am:','8am:', '9am:', '10am:', '11am:', '12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm', '7pm:'];
let storeCreation = [];

//constructor - starts with function and capital letters
// parameters - unique properties

function Store(name, minV, maxV, avgC){
  this.storeName = name;
  this.minimumValue =  minV;
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
//function that creates teh array for each store
Store.prototype.createArr = function (arr){
  for(let i = 0; i < openHours.length; i++){
    arr.randomize();
    arr.custEachHour.push(arr.randomC);
    arr.totalC += arr.randomC;
  }
};

//
Store.prototype.randomize = function() {
  this.randomC = Math.round((random(this.minimumValue, this.maximumValue)) * this.averageCustomer);
};

//creating the table
Store.prototype.render = function(){
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.storeName;
  htmlBodyWindow.appendChild(h2Elem);

  //table render to DOM

  // let row1 = document.createElement('tr');
  // table.appendChild(row1);

  // let th1Elem = document.createElement('th');
  // th1Elem.textContent = openHours[0];
  // row1.appendChild(th1Elem);
  // let th2Elem = document.createElement('th');
  // th2Elem.textContent = storeCreation;
  // row1.appendChild(th2Elem);
  // let th3Elem = document.createElement('th');
  // th3Elem.textContent = this.averageCustomer;
  // row1.appendChild(th3Elem);
};

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

console.log(seattle);
console.log(storeCreation);

function renderAllStores() {
  for (let i = 0; i < storeCreation.length; i++) {
    let currentStore = storeCreation[i];
    // currentStore.randomize();
    currentStore.createArr(storeCreation[i]);
    currentStore.render();
  }
}

renderAllStores();

console.log(seattle);
console.log(paris);
console.log(storeCreation);
