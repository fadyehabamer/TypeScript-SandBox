"use strict";
exports.__esModule = true;
// * enum
// * definition
var weeks;
(function (weeks) {
    weeks[weeks["sat"] = 0] = "sat";
    weeks[weeks["sun"] = 1] = "sun";
    weeks[weeks["mon"] = 2] = "mon";
    weeks[weeks["tues"] = 3] = "tues";
    weeks[weeks["wed"] = 4] = "wed";
    weeks[weeks["thurs"] = 5] = "thurs";
    weeks[weeks["fri"] = 6] = "fri";
})(weeks || (weeks = {}));
// * access data 
console.log(weeks.sat); //* result  0 --> enum is ZERO based
var name;
(function (name) {
    name[name["fady"] = 1] = "fady";
    name[name["ehab"] = 2] = "ehab";
    name[name["amer"] = 3] = "amer";
})(name || (name = {}));
console.log(name.ehab); //* result  0 --> enum is ZERO based
