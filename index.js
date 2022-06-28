const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordSuggestion="";
let randomIndex = 0;
let passwordLength= 10;

//10 digit password
function passwordSuggestions(){
   for (let i=1; i <= passwordLength; i++){
        randomIndex = Math.floor(Math.random() * characters.length);
        passwordSuggestion += characters[randomIndex];
    }
    return passwordSuggestion;

}

//10 digit password
function generatePassword(){

    let passwordSuggestBtn1 = document.getElementById("password-suggest-btn1");
    passwordSuggestBtn1.textContent = passwordSuggestions();
    passwordSuggestion="";

    let passwordSuggestBtn2 = document.getElementById("password-suggest-btn2");
    passwordSuggestBtn2.textContent = passwordSuggestions();
    passwordSuggestion="";


}



