
function positionLetters(sentence) {
 var results = {};
 var position = 0;
 for (var i = 0; i < sentence.length; i++) {
  var nextLetter = sentence[i];
    if (results[nextLetter]) {
      results[nextLetter].push(i)
    } else { results[nextLetter] = [i]
    }


}
return results;
}

console.log (positionLetters("Lighthouse in the house"))