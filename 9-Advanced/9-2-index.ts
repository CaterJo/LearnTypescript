{
  const obj = {
    name: 'cater',
  };

  // 속성 접근자. 점 표기법(Dot notation)
  console.log(obj.name);

  // 속성 접근자. 괄호 표기법(Bracket notation)
  console.log(obj['name']);

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'];

  const text: Name = 'Peter';

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal;

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'cater',
    gender: 'male',
  };
}
