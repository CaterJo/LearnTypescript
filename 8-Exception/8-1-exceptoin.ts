function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error(`file not exist ${fileName}`);
  }

  return 'file contents';
}

function closeFile(filename: string) {
  console.log(`closeed file:${filename}`);
}

function run() {
  const filename = 'not exist~~~';
  try {
    console.log(readFile(filename));
  } catch (error) {
    console.log('erorr cateched');
    console.log(error);
    return;
  } finally {
    // catch에서 return이 되어도 실행된다.
    closeFile(filename);
  }
}
