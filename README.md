# Clojulator

## Description

A simple calculator application built in Clojure that performs basic arithmetic operations.

This calculator supports basic arithmetic operations (`+`, `-`, `*`, `/` `^`, `%`) and combinations of these operations using parentheses (`(1 + 2) * 3`) to change the order of operations, otherwise the default precedence is used. The application also supports history tracking for the last 3 expressions. These values can be referenced using (`p1`, `p2`, `p3`) in an expression.

Two modes of operation are currently supported by this calculator. The first mode is a REPL that allows the user to enter expressions and see the results in the terminal. The second mode is a web application that allows the uses to interact with a calculator UI in a browser. The web application mode
still has some kinks to work through, but it is functional.

As a learning project, this application is not intended to be a complete, fully functional calculator. It is intended to be used as a tool for me to practice building practical applications in Clojure. I would appreciate any constructive feedback. If you have any suggestions or feedback, please feel free to open an issue or contact me on [LinkedIn](https://www.linkedin.com/in/andrewleverette/).

This project is still a work in progress and I will continue to improve it.

---

## Running the Application

### REPL Mode

To run the REPL, run the following command:

```bash
clj -M:clojulator/repl
```

***This application does not support Leiningen.***

### Web Mode

To run the web application, run the following command:

```bash
npm run watch
```


## Project Details

The following sections layout the original objectives and requirements of the project. The goal of this project was to be a vehicle for learning Clojure by building a practical project, specifically a simple calculator application that runs as a REPL. I expanded the project to explore cross-compilation and ClojureScript by adding a web UI that utilizes the same interpreter source code as the REPL.

### Objectives

1. Apply knowledge of Clojure syntax, functions, and collections to build a practical project.
2. Gain experience structuring a Clojure project and implementing core arithmetic functions.
3. Practice user input handling, function composition, and error handling.
4. Practice building a simple REPL.

---

### Functional Requirements

1. **Basic Arithmetic Operations:**
   - Support for addition, subtraction, multiplication, and division.
   - Division by zero should be handled gracefully with an appropriate error message.
2. **User Input Handling:**
   - Collect user input for numbers and an operation (`+`, `-`, `*`, `/`, `^`, `%`).
   - Validate input to ensure it's either a valid number or operation symbol.
   - Provide feedback for invalid inputs.
3. **Calculator Logic:**
   - Perform the chosen arithmetic operation on the input numbers and display the result.
   - Include error handling for invalid inputs and invalid operations.
4. **REPL Operation:**
   - The calculator should run in a loop, continuously accepting input until a stop command is given.
   - The stop commands will be `"quit"` or `"exit"`, which the user can type to stop the program.
5. **(Stretch Goal 1) Expression Parsing:**
   - Support for user input of more complex expressions, allowing users to input expressions like `1 + 2 * 3` or `(1 + 2) * 3`.
   - Expressions are parsed into an AST before being evaluated.
   - Provide error handling for malformed or invalid expressions.
6. **(Stretch Goal 2) History Tracking:**
   - Support for tracking the user's last 3 evaluated expressions.
   - Add additional syntax for the REPL to allow users to reference and use the tracked values in new expressions.

---

### Non-Functional Requirements

1. **User Interface:**
   - Provide a simple command-line interface that allows the user to perform basic arithmetic operations.
2. **Error Handling:**
   - Ensure the application handles errors gracefully, providing helpful messages for invalid inputs or operations.
3. **Project Structure:**
   - Maintain a clean and organized Clojure project structure, separating user input, calculations, and expression evaluation logic.

---

### Testing

1. **Unit Testing:**
   - Test the arithmetic functions with valid and invalid inputs (e.g., division by zero).
2. **Integration Testing:**
   - Test the continuous operation of the calculator by simulating various inputs, including numbers, operations, and stop commands.
3. **Edge Case Handling:**
   - Ensure the program handles invalid inputs, malformed expressions, and invalid commands appropriately, with clear error messages.

---

### Future Work

1. Expand the functionality of the calculator to support more advanced arithmetic operations and expression parsing.
2. Add support for optionally reading user input from a file or other source.
3. Add better logging and error reporting.
4. Add better handling for exiting the application.
5. Add a simple Web interface for the calculator.

---

### References

1. [Crafting Interpreters](https://craftinginterpreters.com/contents.html)
    - Specifically chapters 4 - 7
2. [Clojure Docs](https://clojuredocs.org/)
3. [Clojure Defmulti and Defmethod](https://128bit.io/posts/clojure-defmulti-and-defmethod/)

---

## Special Thanks

A special thanks to the memebers of the [Clojure Camp](https://clojure.camp/) community.
They do amazing work for the Clojure community and their feedback has been greatly appreciated.
