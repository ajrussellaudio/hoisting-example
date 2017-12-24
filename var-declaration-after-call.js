// Variable is declared and assigned to anonymous function.
// Function cannot be called before assignment.

myFunc();

var myFunc = function() {
  console.log("This will never work!");
};
