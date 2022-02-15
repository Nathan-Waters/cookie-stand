'use strict';
//the hours that the store will be open
let openHours = ['6am:', '7am:','8am:', '9am:', '10am:', '11am:', '12pm:','1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm', '7pm:'];

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
seattle.customers();
console.log(seattle);
// seattle.customers();
function createArr(arr){
  for(let i = 0; i < openHours.length; i++){
    arr.customers();
    arr.custEachHour.push(`${openHours[i]} ${arr.randomC} cookies`);
    arr.totalC += arr.randomC;
  }
}

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
