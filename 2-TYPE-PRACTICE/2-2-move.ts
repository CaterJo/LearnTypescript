type Position = {
  x: number;
  y: number;
};

type MoveCommand = 'up' | 'down' | 'left' | 'right';

const initValue: Position = {
  x: 0,
  y: 0,
};

const move = (
  command: MoveCommand,
  position: Position = initValue
): Position => {
  switch (command) {
    case 'up':
      return {
        ...position,
        y: position.y + 1,
      };
    case 'down':
      return {
        ...position,
        y: position.y - 1,
      };
    case 'left':
      return {
        ...position,
        x: position.x - 1,
      };
    case 'right':
      return {
        ...position,
        x: position.x + 1,
      };
    default:
      throw new Error('unkown Error');
  }
};
