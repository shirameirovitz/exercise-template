function getDuplicates(arr){ 
// [1,2,3,2,6,7,3,1,9] => [1,2,3]
//לעבור על כל המערך.
//עבור כל איבר בודקת אם יש כפילויות
//מוציאה כפילויות למערך ריק אחר
let duplicates= [];
for(let i=0; i< arr.length; i++) {
    let checkingNow = arr[i];
    for(let k=0; k<arr.length; k++){
        if(checkingNow===arr[k] && i!==k){
           let exists=false;
            for(let n=0;n<duplicates.length ;n++){
               if(checkingNow===duplicates[n]){
                   exists = true;
                   break;
               }
           }
if(!exists){
    duplicates.push(checkingNow)
}
        break;}
    }
}return duplicates;
}
console.log(getDuplicates([1,2,1,1,2,3,4,5,4]));
