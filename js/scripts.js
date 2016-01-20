var translator = function(string){
  var newString = string.replace(/[.,!@#$%^&*:'"]+/g, '').toLowerCase();
    return newString;
}



$(document).ready(function(){

  var string = ("input#userInput").val();
  var vowel = ["a","e","i","o","u"];

});
