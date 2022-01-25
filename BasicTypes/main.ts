export {};
// * export {} -> to make errors disapper only .... after compiling
/*
* FROM STACK OVERFLOW ⬇️
* The reason is, typescript consider a file that has no import or export
* statement as a script and have global scope so the function that I've written in 
* typescript overlap with the generated .js file
* 
* I wonder why typescript compiler consider function from the source .ts file where
* the function inside generated .js file generated from as redeclaration after
* compiling done ?)
* 
* But by adding import = {} at the top of the file which has no import or
* export statement typescript considers it as module therefore block scoped.
*/

// * Basic Types

// * variable:number -> make variable type = number
let int: number = 5;
// * Can not re assign int to any other type

// * variable:number -> make variable type = string
let word: string = "Hello world";

// * variable:number -> make variable type = boolean
let accepet: boolean = true;

// * variable:number -> make variable type = any type
let all: any = "any type can be accepted";
all = 12;
// * "Type can be re assigned to diffrent type"

// * array [numbers]
let arr_num: number[] = [1, 2, 3, 4];

// * array [string]
let arr_str: string[] = ["fady", "ehab", "amer"];

// * array [any]
let arr_any: any[] = ["fady", "ehab", "amer", 1, 2, 3];
