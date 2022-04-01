// Assignment Code
var generateBtn = document.querySelector("#generate");

var lcharacters = "abcdefghijklmnopqrstuvwxyz";
var ucharecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var choiceChar = "";



function generatePassword () {



var length = prompt ("How many charecters do you want your password to be? Enter any # between 8-128");


var type = prompt ("Special Charecters? \nU = Upercase \nL = Lowercase \nN = Numbers \nS=Special Charecters. \nExample = U,N,S");


var typechoices = type.split(",");

let numchoice = "";
if (typechoices.includes("N")) {numchoice=true};

let lowchoice = "";
if (typechoices.includes("L")){lowchoice=true};

let upchoice = "";
if (typechoices.includes("U")){upchoice=true};

let charchoice = "";
if (typechoices.includes("S")){charchoice=true};

numchoice ? (choiceChar += numbers) : ("choiceChar");
lowchoice ? (choiceChar += lcharacters) : ("choiceChar");
upchoice ? (choiceChar += ucharecters) : ("choiceChar");
charchoice ? (choiceChar += symbols) : ("choiceChar");

let password = "";
for (let i = 0; i < length; i++) {
  password += choiceChar.charAt (
    Math.floor(Math.random() * choiceChar.length)
  );
}
return password;
};


function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
