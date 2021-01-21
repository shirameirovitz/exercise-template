console.log(union([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 10, 100]

function union(arr1, arr2){
    console.log(arr1)
    console.log(arr2)
    // console.log(arr3)
    // check which is longer -
    // iterate the shortest array - V
    // insert each element to the second array, one by one - V
    for(let i=0; i<arr1.length; i++) {

let valueToPush = arr1[i];
 arr2.push(valueToPush);
    } 
return arr2;
}
