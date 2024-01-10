## SEBR0116
### Functions Exercise:

1.  Write a function called logIn that takes your name as a parameter and console.logs 'Hello /your name/!' when it is called

2.  Take that function up a notch by creating a new variable called isLoggedIn, that logs 'Hello /your name/!' when the variable is true, or "please log in" when it is false

3. We are looking to re-sod our lawn. It has a length of 20' and a width of 30', with Sod costing $1.45/sqft. Additionally, it will cost $100 to have thew work done.  Write a function that finds the area of the lawn, the price of the Sod, and what the total cost will be to get the lawn redone. If our budget is $700, will it be enough? Log either how much extra we will need, or how much we will have left over

4.  Write a function that loops over the following array of SEI students and prints out their name, and how many letters their name is

```js
const students = [
  'Alice',
  'Andy',
  'Andrew',
  'Casey',
  'Damian',
  'Emily',
  'Emilie',
  'Grant',
  'Howie',
  'Isabella',
  'Kat',
  'Kimbrad',
  'Kiu',
  'Natasha',
  'Obi',
  'Oscar'
  'Pedro',
  'Sarah',
  'Scott',
  'Tiffany',
  'Umberto',
  'Wade',
  'Zhe'
]
```

It should give us "Alice is 5 letters long"... and so on

If you want to take it a bit further, add an additional condtional in that wll only return and log the names that are 5 or more letters long.

Then, to take it one step further, set *another* conditional that makes it so only names that are 5 or more letters long *and start with a vowel* are logged. 


## Bonus

5. FizzBuzz
 - Write a javascript function that logs all numbers from 1 - 100.
-  If a number is divisible by 3 log "Fizz" and of the number.
-  If a number is divisible by 5 log "Buzz" and of the number.
-  If a number is divisible by both 3 and 5 log "FizzBuzz" and of the number.


6. Checkerboard

Set a checkerboard size to a variable

```js
const boardSize = 8;
```

Now, using what you know about control flow, build a checkerboard

```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
```

You should be able to change the variable `boardSize` and generate a larger or smaller grid

```js
const boardSize = 20;
```

Should now generate:

```
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 
 # # # # # # # # # #
# # # # # # # # # # 

```

