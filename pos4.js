function countLetters(sentence) {
  var obj = { };

  for (var i = 0; i < sentence.length; i++) {
    var currentLetter = sentence[i];

    if (currentLetter !== ' ') {
    if (obj.hasOwnProperty(currentLetter)) {

        obj[currentLetter].count++,
        obj[currentLetter].position.push(i + 1)

    } else {
      obj[currentLetter] = {

        count: 1,

        position: [i + 1]
    }
    }
  }
  }

  return obj;
}

console.log(countLetters("lighthouse in the house"));