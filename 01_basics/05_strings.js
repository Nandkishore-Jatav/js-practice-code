let name = "hitesh"
const repoCount = 50

console.log(name + " " + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('hitesh-hc-com');
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(2, 6)
console.log(anotherString);
const newStringOne = "   hitesh      0  "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne);
const url = "https://hitesh.com/hitesh%20choudhary/99=0";

console.log(url.replace('%20', '-'))
console.log(url.repeat('99=', '0'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'));