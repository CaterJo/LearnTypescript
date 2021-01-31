{
  // 조건부 타입
  type Check<T> = T extends string ? boolean : number;

  type Type = Check<string>;

  // 제네릭 인자의 타입을 문자 리터럴로 반환한다.
  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : 'object';

  type T0 = TypeName<string>;
  type T1 = TypeName<'ㅎㅎㅎㅎㅎㅎ'>;
}
