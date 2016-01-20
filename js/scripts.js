var translator = function(string){
  var suffix = "ay";

  if (string[0].match(/[aeiou]/)){
    return string + suffix;
  } else if (string.substr(0,2) === "qu"){
    string = string.replace("qu", "");
    return string + "quay";
  }
}









// $(document).ready(function(){
//   $("form#translator").submit(function(event){
//     var string = $("input#userInput").val();
//     var results = translator(string);
// console.log();
//     $("#result").text(result);
//
//     event.preventDefault();
//   });
// });
