var password = "password";
var abracadabra = "abracadabra";
var audaciously = "audaciously"

function obfuscate(process) {
  var myArgs = process;
  var newArray = myArgs.split("");
  var sum = "";
  for( var i = 0; i < newArray.length; i ++) {
    newArray[i] = newArray[i].replace("a", "4");
    newArray[i] = newArray[i].replace("e", "3");
    newArray[i] = newArray[i].replace("o", "0");
    newArray[i] = newArray[i].replace("l", "1");
    sum += newArray[i];
  }
  return sum;
}

console.log(obfuscate(password));
console.log(obfuscate(abracadabra));
console.log(obfuscate(audaciously));

