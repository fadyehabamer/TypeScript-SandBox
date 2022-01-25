export {}
interface Person {
    name : string,
    age:number,
    address : string,
    money : number,
    married : boolean,
    CanDrive? : boolean
}


let fady : Person ={
    name : "fady",
    age:21,
    address:"domiat",
    money:1000,
    married:false
    // * all Properties in interface must be define
    // * Can drive is optional property can be used or not
}