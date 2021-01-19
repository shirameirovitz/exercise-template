function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    // out = input + 5;
   
  let arr= input.split("").map(function(x){
      return Number(x);
  }); 
    for( let i = 0; i < (arr.length-1); i++) {
       
        if((arr[i] % 2 === 0) && (arr[i + 1] % 2 === 0)) {
            out += arr[i] + "-" 
        }
        else {
            out += arr[i]
        }
    }
    out += arr[arr.length-1]
    
/**/
    output.innerText = out;
}