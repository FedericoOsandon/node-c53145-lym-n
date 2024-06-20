function listNumbers(...numbers) {
    const types = numbers.map(n => typeof n);
    if (types.includes('string') || types.includes('boolean')) {
      console.error(`Invalid parameters: ${types}`);
      process.exitCode = -4;
    } else {
      console.log(numbers);
    }
  }
  
  process.on('exit', (code) => {
    if (code === -4) {
      console.error('Proceso finalizado por argumentación inválida en una función');
    }
  })

  listNumbers(1, 2, 3) // [1, 2, 3]
listNumbers(1, 2, 'a', true) // Invalid parameters: number,number,string,boolean