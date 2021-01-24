type CalculateCommand =
  | 'add'
  | 'substract'
  | 'multiply'
  | 'divide'
  | 'remainder';

/**
 * @description 계산기
 * @param {CalculateOperator} command
 * @param {nubmer} numb1
 * @param {nubmer} numb2
 *
 */
const calculate = (
  command: CalculateCommand,
  numb1: number,
  numb2: number
): number => {
  switch (command) {
    case 'add':
      return numb1 + numb2;
    case 'substract':
      return numb1 - numb2;
    case 'multiply':
      return numb1 * numb2;
    case 'divide':
      return numb1 / numb2;
    case 'remainder':
      return numb1 % numb2;
    default:
      throw new Error('unkown error');
  }
};
