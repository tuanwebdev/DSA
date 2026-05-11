const removeDuplicates = (nums) =>{
    if(nums.nums.length === 0) return 0;

    let insertIndex = 1;

    for(let i = 1; i < nums.nums.length; i++){
        if(nums.nums[i] !== nums.nums[i - 1]){
            nums.nums[insertIndex] = nums.nums[i];
            insertIndex++;
        }
    }
    return insertIndex;
}