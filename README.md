# Number Guesser Doubles is...

a two player guessing game and our first paired project of the mod. The learning goals of the project were to:

* Develop your skills in writing:
* semantic HTML
* clean & organized CSS styles
* DRY and organized JavaScript
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Understand event bubbling and use event delegation on dynamic elements
(Find the project assignment here: http://frontend.turing.io/projects/number-guesser-doubles.html)

# Things we learned:

Git, version control, and workflow! Being our first paired project of the mod and Git novices, our workflow was a bit bumpy at the start. As we put in our reps it started to become habit and a way to celebrate the small victories. Planning and organization was important to both of us so we took advantage of our similar working styles to prioritize and practice pseudocoding. The preplanning allowed us to think through the details and develop a strategy for how to structure our HTML while keeping in mind what we would have to build in our JavaScript. As a result, the majority of our struggles in JavaScript ended up being syntaxical, not logical. This project helped us better understand how to design and coordinate events to manipulate the DOM.

# Remaining uncertainties and areas for improvement:

When is an if/else appropriate and how do we escape its comforting embrace? One of our goals was to write efficient functions and for most of our workflow we were able to keep our functions around or under 8 lines… but as the due date approached our functions became more verbose and if/else was a logical comfort. During this project we also tried to utilize BEM naming conventions, which were incredibly helpful, but at times became clunky and overly lengthy. Moving forward, we will be thinking about how to balance organization with efficiency.

### Example code:

```javascript
function guessEval() {
  var guess1Feedback = document.getElementById('section__guess-feedback-container--accuracy1-js');
  var guess2Feedback = document.getElementById('section__guess-feedback-container--accuracy2-js');
  var one = parseInt(guess1.value);
  var two = parseInt(guess2.value);
  if (one > numToGuess) {
    guess1Feedback.innerText = "That's too high!";
    console.log("Input number to high")
  } else if (one < numToGuess) {
    guess1Feedback.innerText = "That's too low!";
    console.log("Input number to low")
  } else {
    guess1Feedback.innerText = "BOOM!";
  }  if (two > numToGuess) {
    guess2Feedback.innerText = "That's too high!"
  } else if (two < numToGuess) {
    guess2Feedback.innerText = "That's too low!"
  } else {
      guess2Feedback.innerText = "BOOM!"
  }
}
```

# Wishlist:

* refactoring, refactoring, refactoring!

* utilizing bubbling to attach an event to our appended winner card in order to delete it.

* a typo-free world.
