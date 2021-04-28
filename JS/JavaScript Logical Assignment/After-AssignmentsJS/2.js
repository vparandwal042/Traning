function initLeapYearRule(fractional, error){
    let rule = [];
    let margin = fractional;
    leap_period = 1;
    while(margin > error){
        rate = Math.floor(1 / margin);
        leap_period *= rate;
        rule.push(leap_period);
        margin = 1 - rate * margin;
    }
    return rule;
}

error = Math.pow(0.1, 10);
console.log(initLeapYearRule(0.1, error))
console.log(initLeapYearRule(0.31, error))
console.log(initLeapYearRule(0.88, error))
console.log(initLeapYearRule(0.2425, error))  // earth 365.2425