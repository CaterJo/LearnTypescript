type Education = {
  university: string;
  major: string;
};

interface Info {
  name: string;
  age: number;
  education?: Education;
  skill?: string[];
  experience?: [];
  phone?: string;
  email?: string;
  address?: string;
}

type RequiredInfo = Required<Pick<Info, 'name' | 'age'>>;

class Profile implements Info {
  public name: string;
  public age: number;
  public education?: Education;
  public phone?: string;
  public email?: string;
  public address?: string;
  public skill?: string[];

  constructor(info: RequiredInfo) {
    this.name = info.name;
    this.age = info.age;
  }
}

const profile = new Profile({ name: '조병규', age: 31 });

profile.phone = '01089265827';
profile.email = 'byeonggyu303@gmail.com';
profile.address = '서울시 동작구';
profile.education = {
  university: '한국교통대학교',
  major: '기계공학과',
};
profile.skill = [
  'react',
  'typescript',
  'nodeJs',
  'ES6+',
  'Scss',
  'StyledComponent',
  'webpack',
];
