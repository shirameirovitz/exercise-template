const arr = [];

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    arr.push(input);
    // console.log(arr);
    for (let i=0;i<arr.length;i++) {
        out += arr[i] + (" Element"+i+ "\n")
    }
    // out = arr.join("\n");

/**/
    console.log(out);
    output.innerText = out;
}

