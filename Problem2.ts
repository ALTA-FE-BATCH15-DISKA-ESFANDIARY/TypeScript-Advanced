function atbashCipher(cipherText: string): string {
    const plain = "abcdefghijklmnopqrstuvwxyz";
    const cipher = "zyxwvutsrqponmlkjihgfedcba";
    let result = "";
  
    for (let i = 0; i < cipherText.length; i++) {
      const character = cipherText[i];
      const lowerCaseCharacter = character.toLowerCase();
      const index = plain.indexOf(lowerCaseCharacter);
      if (index !== -1) {
        const cipherCharacter = cipher[index];
        result += character === lowerCaseCharacter ? cipherCharacter : cipherCharacter.toUpperCase();
      } else {
        result += character;
      }
    }
  
    return result;
  }
  
  console.log(atbashCipher("Olivn rkhfn wloli hrg znvg")); 
  console.log(atbashCipher("Svool dliow! R'n ovzimrmt gbkvhxirkg!")); 
  console.log(atbashCipher("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt")); 
  