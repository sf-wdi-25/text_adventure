/**************
 * REPL SETUP *
 **************/

process.stdin.setEncoding('utf8')

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

/*****************
 * Control Logic *
 *****************/

function Game(pages){
  this.pages = pages;
  this.current_page_number = 0;
}

Game.prototype = {
  current_page: function(){
    return this.pages[this.current_page_number]
  },
  print_current_page: function(){
    var current_page = this.current_page();
    repl.puts(current_page.description);
    current_page.options.forEach(function(option, i){
      repl.puts(option.page_number + ") " + option.text);
    })
  },
  evaluate_user_input: function (str){
    if (str == "exit") {
      repl.exit();
    }

    var next_page_number = parseInt(str);
    if (next_page_number){
      this.current_page_number = next_page_number;
    }
  }
}

/*********************
 * Game Instructions *
 *********************/

var pages = [
  {
    description: "You walk into GA on your first day of WDI 25. Celso is sitting at the Front Desk.",
    options: [
      {
        text: "Talk to Celso",
        page_number: 1
      },
      {
        text: "Go home",
        page_number: 3
      }
    ]
  },
  {
    description: "Hi, it must be your first day of class! You'll be meeting in classroom 8.",
    options: [
      {
        text: "Go to classroom 8",
        page_number: 2
      },
      {
        text: "Go home",
        page_number: 3
      }
    ]
  },
  {
    description: "Class is canceled!",
    options: [
      {
        text: "Go home",
        page_number: 3
      }
    ]
  }
]

/*************
 * Game Play *
 *************/

var repl = new REPL()
var game = new Game(pages);

// Infinite Loop!
process.stdin.on("readable", function(){
  var user_input = process.stdin.read();
  if (user_input) {
    user_input = user_input.trim();
    game.evaluate_user_input(user_input);
    repl.puts("-----------")
  }
  game.print_current_page();
  repl.prompt();
})
