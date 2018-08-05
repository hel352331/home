    var words = [
      "река",
      "магазн",
      "петрушка",
      "обезьяна"
    ];
    var word = words[Math.floor(Math.random() * words.length)];
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    var attempts = 5;
    while (remainingLetters > 0 && attempts > 0) {
      alert(answerArray.join(" "));
      var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
      if (guess === null) {
        break;
      } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
      } else {
        attempts--;
        guess = guess.toLowerCase();
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
          }
        }
      }
    }

    alert(answerArray.join(" "));
    if (attempts > 0) {
      alert("Отлично! Было загадано слово " + word);
    } else {
      alert("Очень плохо! Было загадано слово " + word);
    }
