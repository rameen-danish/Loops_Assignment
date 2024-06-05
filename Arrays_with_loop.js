//Rameen Rashid
//5-June-2024
/*5.Exploring Arrays with Loops(Using loop )
Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
to iterate through array elements.
Instructions:
1. Create an empty array:
o Define an empty array called myArray.
2. Run a loop 10 times, adding a new incrementing value to the array:
o Use a for loop to iterate 10 times.
o In each iteration, add a new incrementing value (starting from 1) to the myArray.
3. Log the array into the console:
o After populating the array, log the myArray into the console.
4. Use the for loop to iterate through the array:
o Use a for loop to iterate through the array elements.
o Adjust the number of iterations based on the number of values in the array.
o Output each array element along with its index into the console.
Use the for...of loop to output the value into the console from the array:
o Use a for...of loop to iterate through the array elements.
o Output each array element directly into the console.*/
console.log("\n \t \t ***Exploring Arrays with Loops*** ");
var myArray = []; //Empty array
for (var i = 1; i <= 10; i++) { // for loop that iterate 10 times
    myArray.push(i); //add values into the array
}
console.log(myArray); //print array values
console.log("\n Array with index and values:");
for (var j = 0; j < myArray.length; j++) { //for loop 
    console.log("Index ".concat(j, ": Element ").concat(myArray[j])); //print array index and array values
}
console.log("\n Array Elements using For OF Loop");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) { // for of loop that 
    var x = myArray_1[_i];
    console.log(x); //print array element directly to console
}
