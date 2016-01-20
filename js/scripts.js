var translator = function(string){
  var suffix = "ay";

  if (string[0].match(/[aeiou]/)){
    return string + suffix;
  } else if (string.substr(0,2) === "qu"){
    string = string.replace("qu", "");
    return string + "qu" + suffix;
  } else if (string.substr(0,3) === "squ"){
    string = string.replace("squ", "");
    return string + "squ" + suffix;
  } else {
    string = string.split("");
    while (string[0].match(/[b-df-hj-np-tv-yz]/)){
    string.push(string[0])
    string.shift(string[0])
  }
  string = string.join("");
  string = string + suffix;
  return string
  }
}

$(document).ready(function(){
  $("form#translator").submit(function(event){
    var string = $("input#string").val();
    var result = translator(string);
    
    $("#result").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
