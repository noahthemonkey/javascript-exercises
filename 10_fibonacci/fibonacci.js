const fibonacci = function fibSum(nums) {
    let fib = [0, 1];
    let data = [];
    
    for(let i = 2; i <= nums; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
      data.push(fib[i]);
    }
    
    return data.pop();
};

// Do not edit below this line
module.exports = fibonacci;
