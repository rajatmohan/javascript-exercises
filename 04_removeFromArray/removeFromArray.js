const removeFromArray = function(arr, ...elemToBeRemoved) {
    return arr.filter((ele) => !elemToBeRemoved.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
