var guestNames = ["Ally", "Brennan", "Emily", "Lou", "Murph", "Sioban", "Zac"];

var guest1 = {
  name: "Erika",
  favCandy: ['Snickers', 'candy corn'],
  rsvp: false
}

var guest2 = {
  name: "Aabria",
  favCandy: ['Butterfinger'],
  rsvp: true
}

function makeCandyStatement(obj) {
  return obj.name + ' likes ' + obj.favCandy[0] + ' and ' + obj.faveCandy[1];
}

function welcomeGuests(array) {
  for (var i = 0; i < array.length; i++) {
    console.log('Welcome to the party, ' + array[i])
  }
}

function addGuest(allGuests, newGuest) {
  if (newGuest.rsvp) {
    allGuests.push(newGuest.name);
  }
}