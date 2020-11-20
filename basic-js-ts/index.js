// 1. **Fibonacci Sequence**: Write a function `fib` that return the value of n-th order of fibonacci sequence.

const fib = num => {
  let sum = [1, 1];
  if(num === 0) {

    return `Can't not get febonacci number`;

  } else if (num === 1 || num === 2) {

    return sum[0];

  } else {

    for(let i = 2; i < num; i++) {
      const value = sum[sum.length - 1] + sum[sum.length - 2];
      sum.push(value);
    }

  }
  return sum[sum.length - 1];
}

console.log(fib(-1));


// 2. **Array shift**: Write a function `shift` that shifts the elements of array to left or right by n elements in an infinite loop.
// The function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,