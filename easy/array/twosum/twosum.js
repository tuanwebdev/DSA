const findTwoSumIndices = (numbers, target) => {

    const numberIndexMap = {};

    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {

        const currentNumber = numbers[currentIndex];

        const requiredNumber = target - currentNumber;

        if (numberIndexMap[requiredNumber] !== undefined) {

            return [currentIndex, numberIndexMap[requiredNumber]];
        }

        numberIndexMap[currentNumber] = currentIndex;
    }
};