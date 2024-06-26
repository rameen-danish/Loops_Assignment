//Rameen Rashid
//3-June-2024
/*3. Counter Incrementer (Using do while loop )
Objective: Create a program that increments a counter by a specified step value using a
do...while loop and prints the counter value to the console until it reaches or exceeds 100.
Steps to Follow:
1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
2. Create a variable, step, to increase your counter by: Define a variable step to hold
the value by which the counter will be incremented.
3. Add a do...while loop: In the loop, print the counter to the console and increment it by
the step amount each iteration.
4. Continue to loop until the counter is equal to or more than 100: The loop should run
as long as the counter is less than 100.*/
console.log("\n \t \t ***Counter Incrementer*** ");
var counter = 0; //set the counter value to 0
var step = 10; //set the step value to 10
do { //do-while loop
    console.log(counter); //print counter value
    counter += step; //counter is increment by 10 (step value)
} while (counter <= 100); //counter limit is 100 

console.log("Counter Stops");
