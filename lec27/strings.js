// strings
//  sequesnce of characters
let message = "heloo ";
console.log(message);
console.log(typeof message);
//template literals
let fName = "ali";
let lName = "ahmed";
let fullName = `${fName} ${lName}`;
console.log(fullName);

// string methods
// concatination / lenght / uppercase / lowercase / trim / split / slice / replace etc...
let s1 = "helo";
let s2 = "world";
let s3 = s1 + " " + s2;
console.log(s3.length);
console.log(s3, s3.toUpperCase());
console.log(s3.substring(2));
console.log(s3.substring(2, 5)); // last index is excluded ho jae ga . wo count nai ho ga
console.log(s3.replace("world", "ali"));
console.log(s3.trim()); // remove spaces from start and end
console.log(s3.split(" ")); // split on the basis of  space and return array hojae ga .
console.log(s3.split("")[0]); // first character
console.log(s3.join("-")); //join method is not for string but fo array . it join the array elements with
//  given separator
