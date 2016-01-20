var translator = function(string){
  var suffix = "ay";

  if (string[0].match(/[aeiou]/));
    return string + suffix;

}

$(document).ready(function(){
  $("form#translator").submit(function(event){
    var string = $("input#userInput").val();
    var results = translator(string);
console.log();
    $("#result").text(result);

    event.preventDefault();
  });
});
