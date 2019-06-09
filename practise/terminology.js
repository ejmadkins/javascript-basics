usefulTerms = {
    weekTyped: "Weakly typed languages allow types to be inferred as another type. For example, 1 + '2' // '12' In JS it sees you’re trying to add a number with a string — an invalid operation — so it coerces your number into a string and results in the string ‘12’.",
    jsTyped: "JS is both dynamically typed and weakly typed",
    primitive: "A primitive is not an object and has no methods of its own. All primitives are immutable. Includes: Boolean (true/false), Null (no value), Undefined (hasn't been given a value), Number (integers / floats), String (array of characters), Symbol (a unique value that's not equal to any other value)",
    staticallyTyped: "Statically typed means the type is enforced and won’t change so easily. All variables must be declared with a type. E.G. int x = 5",
    dynamicallyTyped: "Dynamically typed languages infer variable types at runtime. This means once your code is run the compiler/interpreter will see your variable and its value then decide what type it is.",
    declarationsL: "There are 3 kinds of declarations: 1) var = declars a variable optionaly initialising to a value 2) let = eclares a block-scoped, local variable, optionaly intialising it to a value 3) const = Declares a block-scoped, read-only named constant.",
    literals: "You use literals to represent values in JavaScript. These are fixed values, not variables, that you literally provide in your script. Example: Array literal, boolean literal, floating-point literal, integers, object literal, RegExp literal and String literal"
}

for (const term in usefulTerms) {
    console.log(`${term}: ${usefulTerms[term]}`)
    console.log("")
}
