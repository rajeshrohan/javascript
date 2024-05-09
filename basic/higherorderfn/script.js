// DRY principle : don't repeat yourself 
const radius = [3, 1, 2, 4];

const area = function (radius){ //the logic  or callback fn
    return Math.PI*radius*radius;
}
const circumferece = function (radius){
    return 2*Math.PI*radius;  
}
const diamter = function diamter(radius){
    return 2*radius;
}
// when we put anything on prototye it appers in all type/ array 
// array will become this.
Array.prototype.calculate = function (logic){ 
    const output = [];
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

// console.log(radius.map(area))
// console.log(radius.map(circumferece));
// console.log(radius.map(diamter));

console.log(radius.calculate(area));
console.log(radius.calculate(circumferece));
console.log(radius.calculate(diamter));

// if you do Array.prototype.calculate in defination 
// then , cosole.log(radius.calculate(radius, area));
