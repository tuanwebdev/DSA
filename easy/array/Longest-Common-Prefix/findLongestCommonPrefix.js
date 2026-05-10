const findLongestCommonPrefix = (strs)  =>{
    if(strs.length === 0) return "";

    let commonPrefix = strs[0];

    for(let wordIndex = 1; wordIndex < strs.length; wordIndex++) {
        while (strs[wordIndex].indexOf(commonPrefix) !== 0) {
            commonPrefix = commonPrefix.slice(0,-1);

            if(commonPrefix === "") return "";
        }
    }

    return commonPrefix;
}