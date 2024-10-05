/*Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
For bonus points, write it as a one line arrow function  */
const getCelsius=(Fahrenheit)=>(Fahrenheit-32)/1.8;
/*
You can make the output look prettier by putting it into a string. You can even add `\xB0` (degrees) and a `C` in front of the celsius temperature.*/
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

/*Create an arrow function called `minMax()` that 
takes in an array of numbers and returns an object with 
the minimum and maximum numbers in the array.*/
const numbers=[1,2,3,4,5,6]
const minMax=(number)=> ({MAX: Math.max(...number),
    MIN: Math.min(...number)
})
console.log(minMax(numbers))
/*## Challenge 3
Create an IIFE (Immediately Invoked Function Expression) 
that takes in the length and width of a rectangle outputs 
it to the console in a message as soon as the page loads.
*/
