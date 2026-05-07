
// Best Practices in TS 

type Book = {
  name: string
}


let localStorageData = "{'name':'ABCDEFGH'}"

//  using as bcoz forcefully anoting the book type to BookData **** Type Asertion 

let BookData = JSON.parse(localStorageData) as Book;

console.log(BookData.name)


// **** Use unknown instead of any

let value: any

value = 12
value = [1,2,3,4,5,6]
value.toUppercase()


let newValue: unknown

newValue = 12
newValue = [1,2,3,4,5,6]
// newValue.toUppercase()    // ---- > this is giving error unknown cannot assign twice


// use instance of for error

try {
    
} catch (error) {
    
    if(error instanceof Error){
        console.log(error.message)
    }

        console.log("Error Message", error)


}


//  -----------------  Best Practice why we define types in TS --------------------

// ** without type

// function getCandidateInfo(candiate:{name: string, age: number}){
//   console.log("Information: ",candiate.age," ", candiate.name);
// }

// with type code reusability


type student = {
  name: string,
  age: number
}


function getCandidateInfo(candiate:{name: string, age: number}){
  console.log("Information: ",candiate.age," ", candiate.name);
}



