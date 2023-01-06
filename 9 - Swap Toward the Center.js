// Given array, swap first and last, second and second-to-last, third and third-to- last, etc. Have the function return this swapped array.

// For example swapTowardCenter([true,42,"Ada",2,"pizza"]) should return ["pizza",2,"Ada",42,true]. Passing [1,2,3,4,5,6] should return [6,5,4,3,2,1].

function swapTowardCenter(arr) {
  let middleIndex = Math.floor((arr.length / 2));

  for ( let i = 0; i < middleIndex; i++ ) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length-1-i] = tempVar;
  } 
  return arr;
}


swapTowardCenter([true,42,"Ada",2,"pizza"]) 
// to return ["pizza",2,"Ada",42,true]

swapTowardCenter([1,2,3,4,5,6])
// to return [6,5,4,3,2,1]

swapTowardCenter(["hi", "coding", "dojo", "fans"])
// to return ["fans","dojo","coding","hi"]