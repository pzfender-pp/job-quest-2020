// 1. **Fibonacci Sequence**: Write a function `fib` that return the value of n-th order of fibonacci sequence.

const fib = num => {
  let sum = [1, 1];

  if(num <= 0) {

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

// console.log(fib(-1));


// 2. **Array shift**: Write a function `shift` that shifts the elements of array to left or right by n elements in an infinite loop.
// The function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,

const shift = (arr, direct, num) => {
  let round = 0;
  const newArr = [];
  if (direct.toLowerCase() === 'left') {

    for (round; round < num; round++) {
      let removeItem = arr.shift();
      newArr.push(removeItem);
    }

    return [...arr, ...newArr];

  } else if (direct.toLowerCase() === 'right') {

    for (round; round < num; round++) {
      let removeItem = arr.pop();
      newArr.unshift(removeItem);
    }

    return [...newArr, ...arr];

  } else {

    return 'Invalid direction. Only receive left or right';

  }
}

// console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
// console.log(shift([1, 2, 3, 4 ,5], 'right', 3));

// 3. **Second max**: Write a function `secondMax` that receive an array of number. The function will return the second maximum value of the array. If there is no second max, return max instead. If an array is empty, throw and error.

const secondMax = (arr) => {
    if (arr.length > 0) {

      const uniqueArr = [...new Set(arr)]; 

      uniqueArr.sort((a, b) => a - b);

      if (uniqueArr.length === 1 || uniqueArr.length === 2) {

        return uniqueArr[0];

      } else {

        return uniqueArr[uniqueArr.length - 2];

      }
    } else {

      return 'Error!'
    }
}

// console.log(secondMax([2, 3, 4, 5]));
// console.log(secondMax([9, 2, 21, 21]));
// console.log(secondMax([4, 4, 4, 4]));
// console.log(secondMax([4123]));
// console.log(secondMax([]));

// 4. **FizzBuzz...But**: You may heard `FizzBuzz` task. Here we have the same rule. You will write a function `fizzBuzz` that receive a single parameter it will return the value base on these rule.
// - If the input is divisable by 3, return 'Fizz'
// - If the input is divisable by 5, return 'Buzz'
// - If the input is divisable by both 3 and 5, return 'FizzBuzz'

const fizzBuzz = (num) => num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' : num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : `There is no FizzBuzz in this number`;

// console.log(fizzBuzz(45));