function createAcronym(phrase: string): string {
    const words = phrase.split(' ');
    let acronym = '';
  
    for (let i = 0; i < words.length; i++) {
      acronym += words[i][0].toUpperCase();
    }
  
    return acronym;
  }
  
  // Contoh penggunaan
  console.log(createAcronym('Portable Network Graphics')); // Output: PNG
  console.log(createAcronym('Correct me if I\'m wrong')); // Output: CMIIW
  console.log(createAcronym('Thanks god It\'s Friday')); 
  