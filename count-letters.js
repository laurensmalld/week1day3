function countLetters(sentence) {
 var results = {};
 var count = 0;
 for (var i = 0; i < sentence.length; i++) {
  var nextLetter = sentence[i];

  if (!results[nextLetter]) {
     results[nextLetter] = 0
    results[nextLetter]++
  } else { results[nextLetter]++
  }

// if letter not present add it to results
// if letter is present add 1 to the result number for it



   console.log(nextLetter);
 }


 return results;
}

console.log (countLetters("Lighthouse in the house"))