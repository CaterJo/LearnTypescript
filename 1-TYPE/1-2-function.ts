import { resolveModuleName } from "typescript";

function add(num1:number, num2:number){
    return num1 + num2;
}


function promiseBuilder(id:string): Promise<number> {

    return new Promise((resolve, reject)=>{
        resolve(100)
    })
}


// Optional parameter
function printName(firstName:string, lastName?:string){
    console.log(lastName? lastName + firstName : firstName)
}


// Default parameter 
function printMessage(message:string = 'hello') {
    console.log(message)
}


// Rest Parameter
function addPrameter(...numbers: number[] ){
    return numbers.reduce((a,b)=> a+ b)
}

