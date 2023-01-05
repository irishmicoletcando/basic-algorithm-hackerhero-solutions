// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6].

function double(arr) {
  for ( let i = 0; i < arr.length; i++ ) {
    //adding value of array element to itself
    arr[i] += arr[i] 
  } 
  return arr;
}


double([1,2,3])
double([-2, 0, 2])
double([2,10,100])