
var GE = {

  pad: function(num) {
    return ('0000' + num).substr(-4);
  },

  start: function() {
    return {
      answer: GE.pad(Math.floor(Math.random() * 10000)),
        correct: 0,
        misplaced: 0,
        wrong: 4
    };
  },

  guess: function(state) {

    var number = state.number
      , answer = state.answer;
    var correct = 0
      , misplaced = 0;
    var guess = GE.pad(number).split('')
      , check = GE.pad(answer).split('');

    [0,1,2,3].forEach(function (i) {
      if (guess[i] === check[i]) {
        guess[i] = check[i] = null;
        correct++;
      }
    });

    [0,1,2,3].forEach(function (i) {
      [0,1,2,3].forEach(function (j) {
        var di = guess[i], cj = check[j];
        if (di !== null && cj !== null && di === cj) {
          guess[i] = check[j] = null;
          misplaced++;
        }
      })
    });

    return {
      answer: GE.pad(answer),
        correct: correct,
        misplaced: misplaced,
        wrong: 4 - (correct + misplaced)
    };
  }
};

