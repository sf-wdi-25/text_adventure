## Text Adventure

<img src="https://media.giphy.com/media/CyB3xQXDbdGda/giphy.gif" width=400>

Your objective is to build a "Choose Your Own Adventure" style, command line game, or "Text Adventure".

#### What's a Text Adventure?
* [Choose Your Own Adventure](http://samizdat.cc/cyoa/)
* [Interactive Fiction](https://en.wikipedia.org/wiki/Interactive_fiction)

#### What's a REPL?
We've built out some examples of how you can read user input from _standard in_, evaluate it, and then write to _standard out_. This is known as a REPL ("Read Evaluate Print Loop").

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

Your goal is to turn our example REPL code into a fabulous adventure game!

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
Your goal is to build a ruby text adventure, using the supplied code as a starting point. We've given you two implementations of the adventure, one in javascript (`node_adventure.js`) and one in ruby (`ruby_adventure.rb`), so that you can compare the languages!

```bash
node node_adventure.js
# or
ruby ruby_adventure.js
```

```
You walk into GA on your first day of WDI 25. Celso is sitting at the Front Desk.
1) Talk to Celso
3) Go home
~> 1
-----------
Hi, it must be your first day of class! You'll be meeting in classroom 8.
2) Go to classroom 8
3) Go home
~> 2
-----------
Class is canceled!
3) Go home
~> 3
```

####Bonuses
- We challenge you to implement the "Number guessing game" using the REPL. Respond with "too high", "too low", or "correct".
- Can you keep track of inventory?
- Can you create a "hint" or "help" command?
- Can you create a "start over" command?
- Can you setup your game so that you can configure your player from the command line (hint: lookup `ARGV` or `process.argv`):

    ```bash
    ruby my_text_adventure.rb George
    # Hi, George, welcome to my text adventure
    ```
