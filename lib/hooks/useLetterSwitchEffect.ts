import { useEffect, useState } from 'react';

const useLetterSwitchEffect = (receivedValue:string) => {
  const [convertedText, setConvertedText] = useState('');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialChars = '[`!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~]/';

  const isLetter = (char:string) => {
    return char.toUpperCase() === char.toLowerCase() || char.codePointAt(0) > 127;
  };

  const isSpecialCharacter = (char:string) => {
    return specialChars.includes(char);
  };

  useEffect(() => {
    let iterations = 0;

    const interval = setInterval(() => {
      const iteratedValues = receivedValue.split('')
        .map(((char, index) => {
          if (isLetter(char) && !isSpecialCharacter(char)) {
            return ' ';
          }
          if (index < iterations) {
            return receivedValue[index];
          }
          if (isSpecialCharacter(char)) return specialChars[Math.floor(Math.random() * specialChars.length)];
          return alphabet[Math.floor(Math.random() * alphabet.length)];
          
        }))
        .join('');

      if (iterations >= receivedValue.length) clearInterval(interval);

      iterations += 1 / 3;
      setConvertedText(iteratedValues);
    }, 70);
  }, [receivedValue]);

  return { convertedText };
};

export default useLetterSwitchEffect;