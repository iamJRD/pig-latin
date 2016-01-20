var vowels = ["a","e","i","o","u"];
var removePunc = function(string){
  var newString = string.replace(/[.,!@#$%^&*:'"]+/g, '').toLowerCase();
    return newString;
};

var vowelAy = function(newString){
  if (newString.charAt(0) === (vowels));
    return newString += "ay";
};

var conso = function(newString){
  if (newString.charAt(0) !== (vowels));
    var consoLetter = newString.slice(0,1);
    var consoWord = newString.substr(1);
    return consoWord += consoLetter += "ay";
};




$(document).ready(function(){
  $("form#translator").submit(function(event){
    var string = $("input#userInput").val();
    var results = translator(string);
    console.log(results);

    event.preventDefault();
  });
});
