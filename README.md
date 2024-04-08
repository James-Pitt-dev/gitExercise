# gitExercise

# Addition Calculator

This is a simple web-based calculator that adds two numbers. It's built with HTML and JavaScript.

## How It Works

The calculator provides a form for the user to input two numbers. When the user clicks the "Calculate!" button, it calls the `addition` function, passing in the two input values as arguments. The `addition` function checks if the inputs are numbers, throws an error if they're not, and returns their sum if they are. The result is then displayed on the webpage.

The app.js has event listeners attached to the form element to fire on submit, calling this function and updating html with the correct values

## Running Tests

This project uses Jest for unit testing. To run the tests, use the following command:

'npx jest'

The test checks the input and output of the addition function:

    Checking for correct summation
    Checking for error thrown if input is not an integer