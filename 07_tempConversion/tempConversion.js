const ftoc = function(f1) {
    const c1 = (f1 - 32) *(5/9);

    const c1Rounded = Math.round(c1 * 10) / 10;
    return c1Rounded;
};

const ctof = function(c2) {
    const f2 = (c2 *(9/5)) + 32;

    const f2Rounded = Math.round(f2 * 10) / 10;
    return f2Rounded;
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
