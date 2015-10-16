
var Root = React.createClass({
  getInitialState: function() {
    return new GameSession(this.onChange).state;
  },
  onChange: function(state) {
    return this.setState(state);
  },
  render: function() {
    return (
      <div className='center-block'>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            Number Guessing Game
          </div>
          <div className='panel-body'>
            <StatusBar {...this.state.session} actions={this.state.actions} />
            <InputArea {...this.state.session} actions={this.state.actions} />
          </div>
          <div className='panel-footer text-right'>
            <button onClick={this.state.actions.restart}
              className='btn btn-primary'>new game</button>
          </div>
        </div>
      </div>
    );
  }
});

var StatusBar = React.createClass({
  propTypes: {
    correct: React.PropTypes.number,
    misplaced: React.PropTypes.number,
    wrong: React.PropTypes.number,
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
    count: React.PropTypes.number,
    actions: React.PropTypes.object
  },
  getInitialState: function() {
    return { input: '' };
  },
  componentWillReceiveProps: function(props) {
    if (props.count === 0) {
      this.setState({ input: '' });
    }
    this.refs.input.getDOMNode().select();
  },
  onChange: function(e) {
    this.setState({ input: e.target.value });
  },
  onSubmit: function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.actions.guess(this.state.input);
    this.setState({
      input: GameSession.pad(this.state.input)
    });
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit} className='input-group input-group-lg'>
        <span className='input-group-addon'>
          {(this.props.count > 0)?
          <span className='glyphicon'><b>{this.props.count}</b></span>:
          <span className='glyphicon glyphicon-console'></span>}
        </span>
        <input type='number' className='form-control'
          placeholder='guess a 4-digit number' ref='input'
          onChange={this.onChange} value={this.state.input}
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
