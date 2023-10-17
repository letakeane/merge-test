var guestNames = ["Ally", "Brennan", "Emily", "Lou", "Murph", "Sioban", "Zac"];

var guest1 = {
  name: "Erika",
  favCandy: ['Snickers', 'candy corn']
}

var guest2 = {
  name: "Aabria",
  favCandy: ['Butterfinger']
}

function addTwoNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

function makeCandyStatement(obj) {
  return obj.name + ' likes ' + obj.favCandy[0] + ' and ' + obj.faveCandy[1];
}

function welcomeGuests(array) {
  for (var i = 0; i < array.length; i++) {
    console.log('Welcome to the party, ' + array[i]);
  }
} 
