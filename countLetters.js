function countLetters (word) {

  var wordSplit = word.toLowerCase().split("");
  var obj = { };

  for (var i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] != ' ') {
      if (obj.hasOwnProperty(wordSplit[i])) {
        obj[wordSplit[i]] += 1;
      }
      else {
        obj[wordSplit[i]] = 1;
      }
    }

  }
  console.log(obj);
}

countLetters("lighthouse in the house");