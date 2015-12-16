## Text Adventure

<img src="https://media.giphy.com/media/CyB3xQXDbdGda/giphy.gif" width=400>

Your objective is to build a "text adventure" game in ruby that can be run from the command line.

#### What's a REPL?
We've built out some examples for reading and evaluating user input from _standard in_, and writing to _standard out_. This is known as a REPL ("Read Evaluate Print Loop"). Your goal is to turn our example code into a fabulous game!

The Chrome Javascript Console is an example of a "REPL".

When you type:

``` bash
node
> 1 + 1
# 2
```

You are in the Node REPL. In this case, Node will attempt to **read** the user input _in_ and **evaluate** the expression `1 + 1`. That's a valid, syntactically correct statement, so we get the result, `2`, **printed** to the screen. And then we see the cursor once again, "> " ready for our next input (**loop**).

> If there's an error, the error message will be printed to the screen. If we leave a bracket open, we'll simply see "..." until we've corrected it (i.e. written a syntactically correct expression).

We can do the same thing in Ruby by launching IRB ("Interactive Ruby")!

```bash
irb
2.1.2 :001 > 1 + 1
#=> 2
```

The REPL is a great place to test code and explore a programming language!

## Game Setup
We're going to build a game that uses a looping prompt to evaluate user input. Your user interface will be the command line. Your user will navigate the game by typing commands. It's up to you to tell a story and keep track of gameplay!

Let's begin by exploring the two example files: `example.js` and `example.rb`. Open them up and see if you can make sense of the code.

Can you find where the following things happen:
* Read
* Evaluate
* Print
* Loop

Now let's see what happens when we run the files:

``` bash
node example.js
# or
ruby example.rb
```

* How does prompting work?
* How do you quit the game?

#### Objective
Your goal is to build a text adventure, using the supplied code as a starting point.

```
You walk into General Assembly, San Francisco on your first day of WDI 25. A nice person is sitting at the front desk. A sign says "How can I help you?". You can go left or right.
> Talk to the nice person
Hello, how can I help you?
> Where is WDI 25 meeting?
WDI 25 meets in classroom 8.
> Where is classroom 8?
Down the hall to your right.
> Go right
```
   
``` 
You wake up in a dark room surrounded by computer hardware and glowing monitors. A green message is written across the screen. It says: "wake up, neo".
The cursor blinks on the screen, ready for your input.
> hello?
```

####Bonuses
- We challenge you to implement the "Number guessing game" at some point in your game. Respond with "too high", "too low", or "correct".
- Can you keep track of inventory?
- Can you create a "hint" or "help" command?
- Can you create a "start over" command?
- Can you setup your game so that you can configure your player from the command line (hint: lookup `ARGV` or `process.argv`):

    ```bash
    ruby my_text_adventure.rb George
    # Hi, George, welcome to my text adventure
    ```
