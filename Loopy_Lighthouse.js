
for (var num = 100; num <= 200; num++) {
  var output = "";
  if(num % 3 === 0 && num % 4 === 0){
    output += "LoopyLighthouse";
  } else if (num % 3 === 0) {
    output += "Loopy";
  } else if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
}


