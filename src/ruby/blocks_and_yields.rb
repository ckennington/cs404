# Multiline blocks are wrapped in do end.
# That |n| is called a block parameter; it passes n to the block.
# Blocks are typically how loops work in Ruby.
puts "Multiline block."
[1, 2, 3].each do |n|
    puts "Number #{n}"
end

# single line blocks can be wrapped in { }
puts "Single line block."
[1, 2, 3].each {|n| puts "Number #{n}"}

# Blocks are cool because they can be passed around like variables. 
# This concept is similar to lamba expressions (like in Scheme), 
# anonymous functions (like in JavaScript), or delegates (like in C#).

# Method definition yields to the block with the same name
puts "Method which yeilds to a block."
def my_method
  puts "reached the top"
  yield
  puts "reached the bottom"
end

# Blocks can be called multiple times. 
my_method do
    puts "reached yield"
end


# Methods and blocks differ because of their scope semantics.
#
# Methods are not bound to local variables around them. Rather, they are bound 
# to an object and have access to instance variables.
#
# Blocks are more primitive than methods. Like baby method grubs. They can't 
# exist on their own, they are bound to a method, and share that method's 
# scope. Blocks are also nameless.
#
# Both can take arguments.

# Crazy example of blocks being used to change a list style.
# Takes an array and an optional first label
# (can be a number or a string). Defaults to 1.
# The function prints the members of the array, numbered
# beginning with the first label.

list = ["Ruby","Python","Java"]
list2= ["alpha","beta","gamma","delta"]

def print_list(array, first = 1)  # must be called with a block!
  counter = first
  array.each do |item|
    puts "#{yield counter} #{item}"
    counter = counter.next
  end
end


begin
  # this won't work: because of the yield,
  # you HAVE TO provide a block!
  print_list list
rescue LocalJumpError
  puts "ERROR: cannot call print_list without a block!"
end

puts "-----------------"
puts "start with 1, no fancy formatting at all:"
print_list( list ) { |n| n }
puts "-----------------"

puts "start with 10, number in <angle brackets>:"
print_list( list, 10 ) { |n| "<#{n}>"}
puts "-----------------"

puts 'start with "A)", then "B)" and so on:'
print_list( list, "A" ) { |n| "#{n})"}
puts "-----------------"

puts "start with 500, count by 100, in [square brackets]:"
print_list( list2, 5 ) do |n|
  "[#{100 * n}]:"
end
puts "-----------------"

puts "number with (i), (ii), (iii):"
print_list( list ) do |n|
  "(#{'i' * n})"
end
puts "-----------------"

puts "The one-two-many numbering:"
print_list( list2, 1 ) do |n|
  "#{[nil,'one','two'][n] || 'many'}:"
end

