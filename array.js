const myArry = [0, 1, 2, 3, 4, 5];

console.log(myArry);

const newArry = myArry.slice(1, 3);
console.log("New Array " + newArry)

console.log("Old Array " + myArry);


const againArray = myArry.splice(1, 3);
console.log("New Array " + againArray)

console.log("Old Array " + myArry);