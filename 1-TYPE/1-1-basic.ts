/**
 * Javascript
 * Primitive: number, string, boolean, bigint, symbol, null, undefinded
 * Object: function, array....
 */

// number
const num = 6;

//string
const str = 'hello';

// boolean
const boal = false;

// Union Type
let age: number | undefined;

// unknown
const notSture: unknown = 0;

// any
const anything: any = 0;

// void
function print(str: string) {
  console.log(str);
}

// never: 리턴되지 않음을 의미
function throwError(msg: string): never {
  throw new Error(msg);
}
