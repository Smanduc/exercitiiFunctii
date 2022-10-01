//19.07.2022
//functie care calc dif dintre 2 nr si returneaza dif
//retinem val aelului de fnctie intr-o var si afisam
function computeDiff(a, b) {
  let diff = a - b;
  return diff
}
let difference = computeDiff(5, 2)
console.log(difference)

function computeSum(x, y) {
  let sum = x + y;
  return sum
}
let sum = computeSum(3, 4)
console.log(sum)
//26.07.2022
//functie care primeste ca parametrii un string si un nr si care verifica lungimea stringului este mai mica decat nr atunci se va returna stringul "mic", daca e =, returneaza "egal" iar daca e mai mare => "mare" afisam rez returnat
//verifyStringLength("ana", 4) => "mic"
//verifyStringLength("ana", 3) => "egal"
//verifyStringLength("ana", 2) => "mare"
function verifyStringLength (word, len) {
  if (word.length < len) {
    return "mic"
  }
  if (word.length == len) {
    return "egal"
    
  }
  if (word.length > len) {
    return "mare"
  }
}
let stringLength = verifyStringLength ("mama", 5)
console.log(stringLength)

//functie care afiseaza data curenta
//decl functiei cu kw function
function displayCurrentDate () {
  let currentDate = new Date ();
  console.log(currentDate)
}
displayCurrentDate ()

//functie care mimeaza zoc cu zaruri, in care gen aleator un nr intre 1 si 6 si afiseaza rez
function playDice() {
  let dice = Math.floor (Math.random()*6);
  console.log(dice)
}
playDice()
//funct care afiseaza "hello world"
function displayHW () {
  let hw = "hello world"
  console.log(hw)
}
displayHW()
//funct care afiseaza 2 var globale: firstName si lastName (declarate inafara functiei)
let firstName = "Stefan";
let lastName = "Manduc";
function displayFullName () {
  console.log(firstName, lastName)  //let fullName = firstName + lastName
}
displayFullName()

//functii cu parametrii si fara return
//functie cu par name si afiseaza hello name
function displayName (name) {
  console.log("hello " + name)
}
displayName("stefan")
//functie care primeste 2 nr si afiseaza dif absoluta dintre ele
function displayDIfference (x, y) {
  let diff = x - y;
  console.log(diff)
}
displayDIfference(8, 3)
//funct care primeste 2 par de tip string: job, hoby, si un nr age, care afiseaza my job is ..., my hobby is,    and i am ... years old.
function displayCV (job, hobby, age) {
  console.log("My job is " + job + " " + ", my hobby is " + hobby + " " + ", and i am " + age + " " + "years old.")
}
displayCV("Programmer", "dance", 34)

function displayCV1 (job, hobby, age) {
let cv1 = "My job is " + job + " " + ", my hobby is " + hobby + " " + ", and i am " + age + " " + "years old."
  console.log(cv1)
}
displayCV1 ("Programmer", "dance", 34)

//funct fara par si cu return
//funct care mimeaza jc de noroc cu zaruri in care se genereaza aleator itre 1 si 6  si returneaza rezultat
function getRolledDIce(){
  let dice = Math.floor (Math.random()*6);
  return dice;
}
let rollDice = getRolledDIce();
console.log(rollDice)

//functie returneaza concatenarea dintre 2 stringuri declarate global in afara funct
let hobby1 = "tenis";
let hobby2 = "dance";
function concatenatedHobbys () {
  let hobbys = hobby1 + " " + hobby2
  return hobbys
}
let hobbys = concatenatedHobbys ()
console.log(hobbys)

//funct care verifica daca op parola este valoda. prim ca arametru parola si returneaza val booleana. pass e valod daca are min 6 caracter si cel putin un car special
function isValidPassword (password) {
  if ((password.length>6) && password.include ("!")) {
    return true;
  }
  else {
    return false
  }
}
let password = isValidPassword("Stefan");
console.log(password)
//functie care converteste din grade celsius in fahrenheit si returneaza rez:
function convertCToF(celsius) {
  return (celsius * 9 / 5) + 32;
} 
let temperature = convertCToF(32)
console.log(temperature)

//functie care primeste 3 nr si returneaza media aritmetica
function getAritmeticAverage(x, y, z) {
  return (x+y+z)/3
}
let average = getAritmeticAverage (4, 6, 8)
console.log(average)

//functie care primeste 1 parametru si returneaza stringul par daca e par si impar daca e impar
function getParity(x) {
  if (x%2 == 0) {
    return "par";
  }
  // else {
  //   return "impar";
  if (x%2 != 0) {
    return "impar"
  }
  
}
let parity = getParity(4)
console.log(parity)
console.log("----------------------------------------------------")

//25.08.2022
//funct return suma nr consecutive de la x la y, unde x, y = parametri
function computeSumOfNumbers(x,y) {
  let sum = 0;
  for (let i= x; i <= y; i++) {
    sum = sum +i;
  }
  return sum;
}
let sumOfNr = computeSumOfNumbers(2, 5)
console.log(sumOfNr)
console.log("----------------------------------------------------")
