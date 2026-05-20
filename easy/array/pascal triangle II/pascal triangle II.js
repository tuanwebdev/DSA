const generatePascalRow = (targetRowIndex) => {

    const pascalRow = [1];

    for (let currentRow = 1; currentRow <= targetRowIndex; currentRow++) {

        for (let currentIndex = pascalRow.length - 1;currentIndex >= 1;currentIndex--) {
            pascalRow[currentIndex] =pascalRow[currentIndex] +pascalRow[currentIndex - 1];
        }
        
        pascalRow.push(1);
    }

    return pascalRow;
};