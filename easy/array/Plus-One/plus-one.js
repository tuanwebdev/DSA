const plusOne  = (numberDigits) =>{
    for (let currentIndex = numberDigits.length - 1; currentIndex >= 0; currentIndex--) {
        numberDigits[currentIndex] += 1;

        if(numberDigits[currentIndex] < 10) {
            return numberDigits;
        }
        else {
            numberDigits[currentIndex] = 0;
        }

    }
    numberDigits.unshift(1);

    return numberDigits;
}

