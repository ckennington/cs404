begin
  1 / 0 # dividing by 0 raises (not throws) an exception
rescue
  puts "You can't do that thing!"
ensure
  puts "Thank you, come again."
end

begin
  1 + 0 # this is totally fine.
rescue
  puts "You can't do that thing!"
ensure
  puts "Thank you, come again."
end
