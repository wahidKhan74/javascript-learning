/**
 * Calculate age.
 * @param {*} yearOfBirth 
 * @returns age
 */
function ageCaculator(yearOfBirth){
    let currentYear = 2025;
    let age = currentYear - yearOfBirth;
    return age;  // The function stops executing immediately
}

/**
 * This uses calculateAge and returns how many years are left until retirement, or whether the person is already retired.
 * @param {*} yearOfBirth 
 * @returns string 
 */
function retirementCalculator(yearOfBirth) {
    // calculate age 
    let age = ageCaculator(yearOfBirth);
    // referance of retirement age
    let retirementAge = 60;
    let yearsLeft = retirementAge - age;

    if(yearsLeft> 0) {
        return `You are ${age} years old. You have ${yearsLeft} years left until retirement at age ${retirementAge}.`;
    } else {
         return `You are ${age} years old. You are already retired or past the retirement age of ${retirementAge}.`;
    }
}


// The value specified after return is sent back to the place where the function was called.
let result1 = retirementCalculator(1883);
let result2 = retirementCalculator(1993);
let result3 = retirementCalculator(1990);
console.log(result1);
console.log(result2);
console.log(result3);


