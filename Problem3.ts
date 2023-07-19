function isArmstrongNumber(num: number): boolean {
    const numString = num.toString(); 
    const numDigits = numString.length; 
    let sum = 0;
    
   
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numString[i]); 
      sum += Math.pow(digit, numDigits); 
    }
    
    return sum === num;
  }
  
  console.log(isArmstrongNumber(9)); 
  console.log(isArmstrongNumber(10)); 
  console.log(isArmstrongNumber(153)); 
  console.log(isArmstrongNumber(154)); 
  