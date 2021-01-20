
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
  
		const arr = input.split("-");
  	const start = Number(arr[0]);
      const end = Number(arr[1]);
      
  	output.innerText = range(start, end); 
}

/*
	function which get a range of years and return all the leap years in the range
  in = range of years (E.g. '2015-2020')
  out = array of leap years
*/
function range(start, end){
    let arr = [];
  	let leapYears = [];
  
    for( let i = start; i<=end; i++){
    	arr.push(i);
    }
    
    arr.forEach(function(year){ 
    	leapYearGenerator(year) && leapYears.push(year);
    });

    return leapYears;
}


function leapYearGenerator(year){
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) 
}
  