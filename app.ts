// String
let myName = 'Max';

// Number
let myAge = 27;

// Boolean
let hasHobbies = true;

// Assign Types
let myRealAge: number;
myRealAge = 40;
myRealAge = 'Camden'; //error


// Array
let hobbies = ["Cooking", "Sports"];
hobbies = [100]; //error

let hobbies2: any[] = ["Cooking", "Sports"];
hobbies2  = [100];

// Tuples
let address: [string, number] = ["Superstreet", 99];

// Enumss
enum Color {
  Gray, // 0
  Green = 100,
  Blue // 101
}
let myColor: Color = Color.Green;

// functions
function returnMyName(): string {
  return 'Camden';
}

//void
function sayHello(): void {
  console.log('HELLO');
}

//function types
let multiply: (firstNumber: number, secondNumber: number) => number;
