var array = ["Ally", "Brennan", "Emily", "Lou", "Murph", "Sioban", "Zac"];

var guest = {
  name: "Erika",
  favCandy: ['Snickers', 'candy corn']
}

function numbers(num1, num2) {
  var sum = num1 + num2
  return sum;
}

function candy(obj) {
return obj.name + ' likes ' + obj.favCandy[0] + ' and ' + obj.faveCandy[1];
}

function allGuests(array) {
for (var i = 0; i < array.length; i++) {
  console.log('Welcome to the party, ' + array[i])
}
}