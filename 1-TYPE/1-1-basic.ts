/**
 * Javascript
 * Primitive: number, string, boolean, bigint, symbol, null, undefinded
 * Object: function, array....
 */

// number
const num:number = 6;


//string
const str: string = 'hello';

// boolean
const boal: boolean = false;

// Union Type
let age: number | undefined;


// unknown
let notSture:unknown = 0;

// any
let anything: any = 0;

// void
function print (str:string){
    console.log(str)
}

// never: 리턴되지 않음을 의미
function throwError(msg:string):never {
    throw new Error(msg)
} 