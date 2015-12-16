#################
# Control Logic #
#################

def evaluate_user_input_for_commands(str)
  exit if str == "exit"
end

#####################
# Game Instructions #
#####################

puts "Type something, and then hit enter!"
puts "Type \"exit\" to quit"

#############
# Game Play #
#############

# Infinite Loop!
while true do
  print "~> "
  user_input = gets.chomp
  puts "You said: \"#{user_input}\""
  evaluate_user_input_for_commands(user_input)
end

puts "Goodbye!"
