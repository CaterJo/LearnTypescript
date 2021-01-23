/**
 * Type Assertions
 * 타입 단언
 */

 function jsStrFunc(): string {
     return 'hello'
 }

 const result  = jsStrFunc();

 // 타입이 string이라 단언한다.
 // 타입 단언은 런타임 에러를 유발할 수 있으니 가능한 지양해야한다.
 (result as string).length;



 // 이런 경우 컴파일에러가 나지않기 때문에 런타임에 에러가 발생한다.
 const wrong: any = 5;
 console.log((wrong as number[]).push(1))



const fundNumbers = (): number[] | undefined => {
    return undefined;
}

// 느김표를 이용한 타입단언, undefined가 아니라는 것을 단언.
 const numbers = fundNumbers();
 numbers!.push(2);


// dom요소를 선택할 때 선택을 보장할 수 있다면 끝에 느낌표를 사용하면 된다.
 const button = document.querySelector('class')!;
 button?.nodeValue