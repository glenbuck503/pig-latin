$(document).ready(function() {
  $("#pigLatin").submit(function(event) {
    event.preventDefault();

    let userInput = $("#userInput").val();
    let inputString = userInput.split(" ");
    const vowels = ["a","e","i","o","u"];
    const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

    for(let i=0; i < inputString.length; i +=1) {
      let firstLetter = inputString[i].charAt(0).toLowerCase();

      if(vowels.includes(firstLetter)) {
        inputString[i] = inputString[i] + "way";
      } else {
        let originalWord = inputString[i];
        inputString[i] = originalWord.slice(1) + inputString[i].charAt(0) + "ay";
      }
    }
    let inputJoin = inputString.join(" ");
    $(".output").text(inputJoin);
  });
});





