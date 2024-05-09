const users = [
    {firstName: "Rajesh", lastName: "Rohan", age: 30},
    {firstName: "rani", lastName: "laxmi", age: 40},
    {firstName: "papaki", lastName: "pari", age: 40},
    {firstName: "konbanega", lastName: "crorePati", age:50}
]

// get list off full names 
const val1 = users.map(x => x.firstName+" "+ x.lastName);
console.log(val1);

// get different ages , and no of perons with that age 
// {30: 1, 40: 2, 50: 1}
// acc here will act like a hashmap 
const val2 = users.reduce(function(acc, curr){
    if(acc[curr.age]){      
        acc[curr.age]++;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});     //
console.log(val2);

// find objects with age less than 
const val3 = users.filter((x)=> x.age< 50);
console.log(val3);


// find first name 
const val4 = users.filter((x) => x.age < 50)
            .map((x) => x.firstName);
console.log(val4);

// other way also, using only reduce .

