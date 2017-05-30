
function reverse() {
  var sum = [];
  var value = process.argv;
  for(var i = 2; i < value.length; i++) {
    var myArgs = value[i]
    for(var a = myArgs.length; a > 0; a-- )  {
      if(sum[i] == null || sum[i] == "") {
      sum[i] = myArgs[a-1];
      } else {
      sum[i] += myArgs[a-1];
      }
    }
    console.log(sum[i]);
  }
  return sum;
}

reverse()

