var translator = function(word){
  var suffix = "ay";
  var sentence = word.split(" ");
  var finalResult = [];
  sentence.forEach(function(string){

    if (string[0].match(/[aeiou]/)){
      string = string + suffix;
    }
    else if (string.substr(0,2) === "qu"){
      string = string.replace("qu", "");
      string = string + "qu" + suffix;
    }
    else if (string.substr(0,3) === "squ"){
      string = string.replace("squ", "");
      string = string + "squ" + suffix;
    }
    else {
      string = string.split("");
      while (string[0].match(/[b-df-hj-np-tv-z]/)){
      string.push(string[0])
      string.shift(string[0])
      }
      string = string.join("");
      string = string + suffix
    };
    finalResult.push(string);
  });
  var results = finalResult.join(" ");
  return results;
};


$(document).ready(function(){
  $("form#translator").submit(function(event){
    var string = $("input#string").val();
    var result = translator(string);

    $("#result").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
