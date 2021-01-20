function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  // write your code here
  // out = input + 5;
  var arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  for (var i = 0; i < arr.length; i++) {
    console.log("row ", i);
    for (var j = 0; j < arr[i].length; j++) {
      out = console.log(arr[i][j]);
    }
  }

  /**/
  output.innerText = out;
}
