function changeWord() {
  var sum = [];
  var value = process.argv;
  for(var i = 2; i < value.length; i++) {
    var myArgs = value[i].split("");
    var firstWord = myArgs[0];
    var sum = [];
    for(var a = 1; a < myArgs.length; a++) {
      var b = 0;
      if(sum[b] == null || sum[i] == "") {
        sum[b] = myArgs[a];
      } else {
        sum[b] += myArgs[a];
      }
      b++;
    }
    sum = sum + firstWord + "ay";
    console.log(sum);
  }
}
changeWord()
