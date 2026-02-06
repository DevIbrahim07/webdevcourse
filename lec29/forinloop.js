// for in loop>
/**object ke properties (keys) par loop chalata hai
 * object ke keys ko access karta hai
 *Ye array ke indexes ke liye bhi use ho sakta hai
Return hamesha key/index deta hai, value nahi
 */
/**
 for (let key in objectOrArray) {
  // key ya index ke hisaab se kaam
  console.log(key);
}
 */

let arr = [1,4,5,3,29,28,2,2,2]
for (let key in arr){
    console.log(key);
}

let obj = {
    name : "a",
    age: 30,

    city:"lahore",
    greet:function(){
        console.log("helo");
    }

}

for(let key in obj){
    console.log(key + " : " + obj[key]);
}

