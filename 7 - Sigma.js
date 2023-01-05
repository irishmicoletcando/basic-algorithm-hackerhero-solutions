// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).

// Ex.:sigma(3)=6(or1 + 2 + 3); sigma(5)=15(or1 + 2 + 3 + 4 + 5).

function sigma(num) {
  let sum = 0;

  for ( let positiveInt = 1; positiveInt <= num; positiveInt++ ) {
      sum += positiveInt;
  }
  
  return sum;
}