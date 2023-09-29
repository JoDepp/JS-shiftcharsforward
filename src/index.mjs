import "./styles.css";


document.getElementById("app").innerHTML = `
<h1>Hello Self!</h1>
<div>
Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet
</div>
`;

// use a couple of built in JS functions String.fromCharCode
// charCodeAt

//grab the string, and then split function with return each character into an Array
const moveCharsForward = (str) =>
//because we want to modify the contents of the string we should split it into an Array
str.split('')
//call the map function because it changes every item in your array depending on what you pass in the array
//so each character that's in the array I'm passing back to a function 
//this takes it's character and converts it back into an actual character into a string
//+1 shifts each character forward by 1
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
//join it back together into a string
.join('');

console.log(moveCharsForward('abcd'));
