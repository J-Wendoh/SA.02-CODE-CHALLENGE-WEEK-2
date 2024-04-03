function generatePrimeNumbers(array){
    let primeNos= []; // the empty array
    //the for loop should pass though values of the array
      for( no of array){
      
        if((no % 2) > 0 && ( no  % 3) > 0  && no !== 1 || no === 3 || no === 2)
        //checks if the value is divisible by 2 or 3
        { 
           primeNos.push(no) //adds the prime number to the empty array
          }
      }
      return primeNos;//returns the numbers that are prime
  }

  
  randomNos=[3,5,9,6,7,30,89,54,8,0,1,23,29]
  console.log(generatePrimeNumbers(randomNos))