// Given an array and a value Y, count and return the number of array values greater than Y.

// For example, returnArrayCountGreaterThanY( [2,3,5], 4) should return 1 as there is only one element in the array whose value is greater than 4.

function returnArrayCountGreaterThanY(arr, y){
  let greaterThanYArr = [];

  for ( let num of arr ) {
      if ( num >  y ) {
       greaterThanYArr.push(num);
      }
  } return greaterThanYArr.length;

  // or 
  // let count = 0;
  // for ( let num of arr ) {
  //   if ( num >  y ) {
  //    count++;
  //   }
  // } return count;
}

returnArrayCountGreaterThanY( [2,3,5], 4) 
returnArrayCountGreaterThanY( [2,3,5], 1)
returnArrayCountGreaterThanY( [4,10,15], 10)
returnArrayCountGreaterThanY( [4,10,15], 20)