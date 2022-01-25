export {}
// * enum

// * definition
enum weeks{
    sat,
    sun,
    mon,
    tues,
    wed,
    thurs,
    fri,
}

// * access data 
console.log(weeks.sat); //* result  0 --> enum is ZERO based

// *======================================================================

enum name{
    fady = 1,
    ehab,
    amer
}
console.log(name.ehab); 
//* result  2--> we changed first index to 1

// *======================================================================


enum hobbies{
    first = "swimming",
    second = "coding"
}
// * when enum elemen is initialized with string .. all other enum elements must be initialized