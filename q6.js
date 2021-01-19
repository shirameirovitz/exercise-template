function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    // out = input + 5;
   
    let list= [1,2,2,2];
    let arr=list.slice();
    for(i = 0; i < arr.length; i++) {
        if (arr[i] === '-');
      if(arr[i]%2===0 && arr[(i+1)]%2===0) {
    arr.splice(i+1, 0 ,"-");
    i++;
      }
     
       
        }
    
    
/**/out=arr;
    output.innerText = out;
}