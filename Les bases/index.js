//************ type de variable**************

// let string = "je suis une chaine";
// let number = 24;
// let boolean = true;
// let array = ["je", "suis", 24, false];

// let object = {
//   prenom: "audrey",
//   age: 34,
//   ville: "bordeaux",
// };

// *****************if else***************
// let x = 6;
// let y = "5";

// if (x === y) {
//   console.log("True !");
// } else if (x == y) {
//   console.log("x et y égaux en valeur");
// } else {
//   console.log(x + " et " + y + " ne sont pas du tout égaux");
//   console.log(`${x} et ${y} ne sont pas du tout égaux`);
// }

// *************function*************

// function faireQuelqueChose() {
//   console.log("je fais un truc");
//   console.log("trop cool");
// }

// const faireUneTache = (tache) => {
//   console.log("je fais : " + tache);
// };

// function add2() {
//   let a = 4;
//   console.log(a);
//   return a + 2;
// }

// add2();

// (function maFonction() {
//   console.log("je me joue toute seule");
// })();

// (() => {
//   console.log("je me joue aussi toute seule");
// })();

// ***************projet calculatrice************

let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function division(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
}

function multiplication(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}

function reset() {
  total = 0;
}
