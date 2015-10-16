
var App = React.createClass({
  render: function () {
    return (
      <div className='center-block' style={{width:'500px'}}>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            Number Guessing Game
          </div>
          <div className='panel-body'>
            <StatusBar correct={0} misplaced={0} wrong={0} />
            <InputArea />
          </div>
          <div className='panel-footer'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function () {
    return (
      <div className='text-right'>
        <button className='btn btn-primary'>
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
  render: function () {
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
    guess: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      guess: ''
    };
  },
  render: function () {
    return (
      <div className='input-group input-group-lg'>
        <span className='input-group-addon' title={this.props.answer}>
          <span className='glyphicon glyphicon-console'></span>
        </span>
        <input type='number' placeholder='guess a 4-digit number'
          className='form-control' value={this.props.guess} />
        <span className='input-group-btn'>
          <button className='btn btn-default' type='submit'>
            Guess
          </button>
        </span>
      </div>
    );
  }
});
