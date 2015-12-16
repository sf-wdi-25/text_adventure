/**************
 * REPL SETUP *
 **************/

function REPL (prompt_symbol, goodbye) {
  this.prompt_symbol = prompt_symbol || "~>";
  this.goodbye = goodbye || "Goodbye!";
}

REPL.prototype = {
  puts: function(msg) {
    process.stdout.write(msg + '\n')
  },
  print: function(msg) {
    process.stdout.write(msg);
  },
  prompt: function() {
    this.print(this.prompt_symbol + " ");
  },
  exit: function(){
    this.puts(this.goodbye);
    process.stdin.end();
  }
}

process.stdin.setEncoding('utf8')

/*****************
 * Control Logic *
 *****************/

var repl = new REPL();

function evaluate_user_input_for_commands(str){
  if (str == "exit") {
    repl.exit();
  }
}

/*********************
 * Game Instructions *
 *********************/

repl.puts("Type Something, and then hit enter!")
repl.puts("Type \"exit\" to quit")

/*************
 * Game Play *
 *************/

// Infinite Loop!
process.stdin.on("readable", function(){
  var user_input = process.stdin.read();
  if (user_input) {
    user_input = user_input.trim();
    repl.puts("You said: \"" + user_input + "\"");
    evaluate_user_input_for_commands(user_input);
  }
  repl.prompt();
})
