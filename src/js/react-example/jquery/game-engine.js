
function pad(num) {
  return ('0000' + num).substr(-4);
}

function digits(num) {
  return pad(num).split('');
}

function NumberGame() {
  this.answer = pad(Math.floor(Math.random() * 10000));
  this.correct = 0;
  this.misplaced = 0;
  this.wrong = 4;
  console.log('the answer is %s', this.answer);
}

NumberGame.prototype.guess = function (number) {
  this.correct = this.misplaced = this.wrong = 0;

  var guess = digits(number)
    , check = digits(this.answer);

  [0,1,2,3].forEach(function (i) {
    if (guess[i] === check[i]) {
      guess[i] = check[i] = null;
      this.correct++;
    }
  }, this);

  [0,1,2,3].forEach(function (i) {
    [0,1,2,3].forEach(function (j) {
      var di = guess[i], cj = check[j];
      if (di !== null && cj !== null && di === cj) {
        guess[i] = check[j] = null;
        this.misplaced++;
      }
    }, this)
  }, this);

  this.wrong = 4 - (this.correct + this.misplaced);
  return pad(number);
};

