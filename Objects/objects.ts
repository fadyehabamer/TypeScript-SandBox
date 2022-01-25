export {};

let person: {
  name: string; //* key name type is string
  age: number; //* key age type is number
} = {
  name: "guest",
  age: 10,
};

// *==============================================================

type me = {
  name: string;
  age: number;
};

let me: me = {
  name: "fady",
  age: 20,
};

// *====================================================================