function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  /**/
  // write your code here
  // out = input + 5;

  let inputArr = [7, 4, 9, 1, 0];
  let bubble = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (inputArr[j] > inputArr[j + 1]) {
          let tmp = inputArr[j];
          inputArr[j] = inputArr[j + 1];
          inputArr[j + 1] = tmp;
        }
      }
    }
    return inputArr;
  };
  out = bubble(inputArr);
  /**/
  output.innerText = out;
}
