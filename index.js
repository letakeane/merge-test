var guestNames = ["Ally", "Emily", "Lou", "Sioban", "Zac"];

var guest1 = {
  name: "Erika",
  favCandy: ['Snickers', 'candy corn']
}

var guest2 = {
  name: "Aabria",
  favCandy: ['Butterfinger']
}

function makeCandyStatement(obj) {
  return obj.name + ' likes ' + obj.favCandy[0] + ' and ' + obj.faveCandy[1];
}

function welcomeGuests(array) {
  for (var i = 0; i < array.length; i++) {
    console.log('Welcome to the party, ' + array[i]);
  }
} 

function addGuest(allGuests, newGuest) {
  allGuests.push(newGuest.name);
}

function makeCandyList(guest1, guest2) {
  var list = [...guest1.favCandy, ...guest2.favCandy];
  return list;
}
