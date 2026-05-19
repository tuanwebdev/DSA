const generatePascalTriangle  = (numRows) => {
    let triangle =[[1]];

    while(triangle.length < numRows) {
        let newRow = [1];
        let lastRow = triangle[triangle.length - 1];

        for (let i = 0; i < lastRow.length - 1; i++) {
            newRow.push(lastRow[i] + lastRow[i + 1]);
        }
        newRow.push(1);
        triangle.push(newRow);
    }

    return triangle;
}
