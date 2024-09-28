# Calculator REPL

## Description

A simple calculator application that performs basic arithmetic operations in a REPL.

---

## Objectives

1. Apply knowledge of Clojure syntax, functions, and collections to build a practical project.
2. Gain experience structuring a Clojure project and implementing core arithmetic functions.
3. Practice user input handling, function composition, and error handling.
4. Practice building a simple REPL.

---

## Functional Requirements

1. **Basic Arithmetic Operations:**
	- Support for addition, subtraction, multiplication, and division.
	- Division by zero should be handled gracefully with an appropriate error message.
2. **User Input Handling:**
	- Collect user input for numbers and an operation (`+`, `-`, `*`, `/`).
	- Validate input to ensure it's either a valid number, operation symbol.
	- Provide feedback for invalid inputs.
3. **Calculator Logic:**
	- Perform the chosen arithmetic operation on the input numbers and display the result.
	- Include error handling for invalid inputs and invalid operations.
4. **REPL Operation:**
	- The calculator should run in a loop, continuously accepting input until a stop command is given.
	- The stop command will be `"quit"`, which the user can type to stop the program.
5. **(Stretch Goal 1) Expression Parsing:**
	- Support for user input of more complex expressions, allowing users to input expressions like `1 + 2 * 3` or `(1 + 2) * 3`.
	- Expressions are parsed into an AST before being evaluated.
	- Provide error handling for malformed or invalid expressions.
6. **(Stretch Goal 2) History Tracking:**
	- Support for tracking the user's last 3 evaluated expressions.
	- Add additional syntax for the REPL to allow users to reference and use the tracked values in new expressions.

---

## Non-Functional Requirements

1. **User Interface:** 
   - Provide a simple command-line interface that allows the user to perform basic arithmetic operations.
2. **Error Handling:** 
   - Ensure the application handles errors gracefully, providing helpful messages for invalid inputs or operations.
3. **Project Structure:** 
   - Maintain a clean and organized Clojure project structure, separating user input, calculations, and expression evaluation logic.

---

## Testing
	
1. **Unit Testing:**
   - Test the arithmetic functions with valid and invalid inputs (e.g., division by zero).
2. **Integration Testing:**
   - Test the continuous operation of the calculator by simulating various inputs, including numbers, operations, and stop commands.
3. **Edge Case Handling:**
   - Ensure the program handles invalid inputs, malformed expressions, and invalid commands appropriately, with clear error messages.
