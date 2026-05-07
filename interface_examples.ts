// Interface example
interface User {
  id: number;
  name: string;
}

// Type example for a union
type Status = "active" | "inactive" | "pending";

// Extending an interface
interface Admin extends User {
  role: string;
}

// Intersecting types
type Employee = User & { salary: number };


// ------------------------------------------------------------

interface user {
    name: string,
    age?: number     //----> ? using for if avial ok otherwise 
}


let user1: user = {name:"Abhishek"};
let user2: user = {name:"Abhishek",age:24};


// --------------------------------- partially pass object members ---------------------------------

type person = {
    name: string,
    id: number
};

const updatePerson = (updates: Partial<person>) =>{
    console.log("updating a person with", updates);
}

updatePerson({name:"Abhishek"})
updatePerson({id:123456})
updatePerson({}) // -------> this will create issue in code base


// ---- to solve above issue use <Required>


// const updatePerson = (updates: Required<person>) =>{

// best practice preciacely pick only needed items from type

//  type basicPerson = Pick<person , "name" | "id">;

// +