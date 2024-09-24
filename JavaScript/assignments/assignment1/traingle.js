// Given
const a = 5, b = 6, c = 7;  // Three sides of a triangle

// Reqiured Area of the triangle

/* 
Solution using Heron's formula

area = sqrt(s(s-a)(s-b)(s-c))

where s is semim-perimeter of the triangle

s = (a + b + c) / 2

*/

const s = (a + b + c) / 2;

const area = Math.sqrt(s * (s-a) * (s-b) * (s-c));

// Result
console.log("Area of traingle is: " + area.toFixed(3));