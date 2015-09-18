puts

for current_iteration_number in 1..5 do
  puts "Hello world, this is number #{current_iteration_number}"
end

puts

5.times do |k|
  #.times starts at 0
  puts "Number #{k+1}"   
end

puts

x = 5 
while x > 0            
  x -= 1
  puts "This loop will run #{x} more times"
end

puts

(1..5).each do |k|
  puts "#{k}. This is Ruby preferred way of doing loops, when possible"
end 

