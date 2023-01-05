// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).

// For example, factorial(3)=6(or1 * 2 * 3);factorial(5)=120(or1 * 2 * 3 * 4 * 5).

function factorial(num) {
  let product = 1;

  for ( let positiveInt = 1; positiveInt <= num; positiveInt++ ) {
    product *= positiveInt;
    
  }
  
  return product;
}


factorial(3)
factorial(5)
factorial(7)
factorial(8)