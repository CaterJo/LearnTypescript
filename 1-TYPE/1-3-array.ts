// Array
const fruits: string[] = ['banana', 'apple'];
const scroes: number[] = [1, 2, 3];

function printArray(fruits: readonly string[]) {}

// Tuple -> type alias, class, interface
// 서로 다른 타입을 담을 수 있다.
// 사용을 추천하지 않는다. type alias, class, interface를 사용하는 것이 낫다.
let students: [string, number];
students = ['name', 123];
