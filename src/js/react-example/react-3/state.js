
function GameSession(callback) {
  this._callback = callback;
  this.state = {
    _private: {
      answer: this.pad(Math.floor(Math.random() * 10000))
    },
    session: {
      count: 0,
      correct: 0,
      misplaced: 0,
      wrong: 4
    },
    actions: {
      restart: this.restart.bind(this),
      guess: this.guess.bind(this)
    }
  };
}

GameSession.prototype.restart = function() {
  this.state = {
    actions: this.state.actions,
    session: {
      count: 0,
      correct: 0,
      misplaced: 0,
      wrong: 4
    },
    _private: {
      answer: this.pad(Math.floor(Math.random() * 10000))
    }
  };
  this._callback(this.state);
};

GameSession.prototype.guess = function(number) {
  var guess = this.pad(number).split('')
    , check = this.pad(this.state._private.answer).split('');

  var session = {
    count: this.state.session.count+1,
    correct: 0,
    misplaced: 0
  };

  [0,1,2,3].forEach(function (i) {
    if (guess[i] === check[i]) {
      guess[i] = check[i] = null;
      session.correct++;
    }
  }, this);

  [0,1,2,3].forEach(function (i) {
    [0,1,2,3].forEach(function (j) {
      var di = guess[i], cj = check[j];
      if (di !== null && cj !== null && di === cj) {
        guess[i] = check[j] = null;
        session.misplaced++;
      }
    }, this)
  }, this);

  session.wrong = 4 - (session.correct + session.misplaced);
  this.state = {
    _private: this.state._private,
    actions: this.state.actions,
    session: session,
  };
  this._callback(this.state);
};

GameSession.prototype.pad = GameSession.pad = function(number) {
  return ('0000' + number).substr(-4);
};
