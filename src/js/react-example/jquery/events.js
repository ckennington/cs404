
$('#form').submit(function () {
  var game = $('#input').data('game');
  var guess = game.guess($('#input').val());
  $('#correct').text(game.correct);
  $('#misplaced').text(game.misplaced);
  $('#wrong').text(game.wrong);
  $('#th-correct')[game.correct?'addClass':'removeClass']('success');
  $('#th-misplaced')[game.misplaced?'addClass':'removeClass']('warning');
  $('#th-wrong')[game.wrong?'addClass':'removeClass']('danger');
  $('#input').val(guess).select();
  return false;
});

$('#new-game').click(function () {
  var game = new NumberGame();
  $('#correct').text(0);
  $('#misplaced').text(0);
  $('#wrong').text(0);
  $('#th-correct').removeClass('success');
  $('#th-misplaced').removeClass('warning');
  $('#th-wrong').removeClass('danger');
  $('#input').data('game', game).val('').focus();
});

$(function () {
  $('#new-game').click();
});

