const accountId = 1000;
let accountEmailId = "nyan@gmail.com";
var accountPass = "12245";
userCity = "jaypur";
let userState;

// accountId = 22; // not allowed
accountEmailId = "nnya99@gmail.com";
accountPass = "nnss@88";
userCity = "Nagpur";


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
 

console.log(accountId);
console.table([accountId, accountEmailId, accountPass, userCity, userState]);