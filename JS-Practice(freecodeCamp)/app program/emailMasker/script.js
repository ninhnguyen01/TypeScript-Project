function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const email1stPart = email.slice(0, atIndex);
  const email2ndPart = email.slice(atIndex);
  const addressSize = email1stPart.length;

  let hideEmail;

  if (addressSize <= 2) {
    hideEmail = email1stPart;
  } 
  
  else {
    const firstChar = email1stPart[0];
    const lastChar = email1stPart[addressSize - 1];
    const charsToMask = addressSize - 2;
    const maskedChars = '*'.repeat(charsToMask);
    hideEmail = firstChar + maskedChars + lastChar;
  }

  
  return hideEmail + email2ndPart;
}

const email = "software.engineer@example.com";

console.log(`email: ${maskEmail(email)}`);