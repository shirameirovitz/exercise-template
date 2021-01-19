function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    // out = input + 5;
    const list= [1,2,3,4,5,6];
    let n= 4;
    out = list.slice(0, n+1);

/**/
    output.innerText = out;
}