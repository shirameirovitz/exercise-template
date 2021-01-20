ffunction run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    // out = input + 5;
              const arr = range()// generate array of leap yaars from given range
           output.innerText = out;
          }

            function range(start,end){
                var range_y = [];
                for( var i = start; i<=end; i++){
                }
                  range_y.push(i);
                }
                var new_array =[];
                range_y.forEach(
                  function(year)
                   { 
                      if (leap_year(year)) 
                      new_array.push(year);
                   });

                   return new_array;
            }

            function leap_year(year) {
                  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                      return year;
              } else {
                      return false;
            }