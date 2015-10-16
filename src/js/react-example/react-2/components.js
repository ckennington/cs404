
var App = React.createClass({
  getInitialState: function() {
    return GE.start();
  },
  startGame: function() {
    this.setState(GE.start());
  },
  guessNumber: function(number) {
    this.setState(GE.guess({ number:number, answer:this.state.answer }));
  },
  render: function() {
    return (
      <div className='center-block' style={{width:'500px'}}>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            Number Guessing Game
          </div>
          <div className='panel-body'>
            <StatusBar {...this.state} />
            <InputArea guessNumber={this.guessNumber} />
          </div>
          <div className='panel-footer'>
            <Footer startGame={this.startGame} />
          </div>
        </div>
      </div>
    );
  }
});

var Footer = React.createClass({
  propTypes: {
    startGame: React.PropTypes.func
  },
  render: function() {
    return (
      <div className='text-right'>
        <button className='btn btn-primary' onClick={this.props.startGame}>
          new game
        </button>
      </div>
    );
  }
});

var StatusBar = React.createClass({
  propTypes: {
    correct: React.PropTypes.number,
    misplaced: React.PropTypes.number,
    wrong: React.PropTypes.number
  },
  render: function() {
    return (
      <table className='table table-condensed'>
        <thead>
          <tr>
            <th className={!this.props.correct||'success'} >correct</th>
            <th className={!this.props.misplaced||'warning'}>misplaced</th>
            <th className={!this.props.wrong||'danger'}>wrong</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-success'>{this.props.correct}</td>
            <td className='text-warning'>{this.props.misplaced}</td>
            <td className='text-danger'>{this.props.wrong}</td>
          </tr>
        </tbody>
      </table>
    );
  }
});

var InputArea = React.createClass({
  propTypes: {
    guessNumber: React.PropTypes.func
  },
  getInitialState: function() {
    return { guess: '' };
  },
  onChange: function(e) {
    this.setState({ guess: e.target.value });
  },
  onSubmit: function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.guessNumber(this.state.guess);
    this.setState({ guess: GE.pad(this.state.guess) });
    this.refs.guess.getDOMNode().select();
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit} className='input-group input-group-lg'>
        <span className='input-group-addon'>
          <span className='glyphicon glyphicon-console'></span>
        </span>
        <input type='number' className='form-control'
          placeholder='guess a 4-digit number' ref='guess'
          onChange={this.onChange} value={this.state.guess}
          />
        <span className='input-group-btn'>
          <button className='btn btn-default' type='submit'>
            Guess
          </button>
        </span>
      </form>
    );
  }
});
