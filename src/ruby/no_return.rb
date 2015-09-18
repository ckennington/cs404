def no_return
  # straight up expression, no variables or nothin'.
  10 + 10
  # notice there's no return statement.
  # 20 gets return automatically because it was the last eval'd expression
end

puts no_return
