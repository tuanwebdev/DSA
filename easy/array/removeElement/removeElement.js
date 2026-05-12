const removeElement = (nums, val) => {
    let writeIndex =0;

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        if(nums[currentIndex] !== val) {
            nums[writeIndex] = nums[currentIndex];
            writeIndex++;
        }
    }

    return writeIndex;
}