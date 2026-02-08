//closure >closure is a combination of a function and its required data
// mean jb hm aik function ko uske required data k sath bind kr dete hai use closure kehte ha.
//first outer function chal gaya and memory se remove ho gaya . aik asa inner function jis mi us ki value outer function pr dependent hoti ho (yaha pr outer function ki values memory se remove ho gayi) to is case mai yaha pr error aya ga kai? yaha pr error nai aya ge its called clousre . bcz jo function he wo apne required data(reference ) k sath bind hojata he. koi new variable create nai hota or na hi copy banti he reference mil jata ha.

function outer() {
  let name = "ali";
  function inner() {
    console.log("i am inner", name);
    
  }
  return inner;
}

let inn = outer();
inn();
