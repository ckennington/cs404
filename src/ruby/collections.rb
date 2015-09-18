my_first_array = []

my_first_array[0] = "Alpha"   
my_first_array[1] = "Beta"
my_first_array[2] = 3

# initializing and filling the array in one step:
my_first_array = ["Alpha", "Beta", 3]

puts my_first_array[1]
puts my_first_array.length
my_first_array = my_first_array.reverse
puts my_first_array.join(", ")  

# arrays can be treated like stacks
arr = ["Atlanta", "Boston", "Chicago", 42]
arr.pop   # 42
puts arr.join(', ')   #=> Atlanta, Boston, Chicago

# In PHP, arrays can be treated like stacks and hashes/dictionaries.
# In Ruby, arrays and hashes/dictionaries are different
# This is simply associative vs index
my_first_hash = { "red" => "cherry", "purple" => "grape" }
puts my_first_hash["purple"]
