const palindromes = function (str) {
    const allowed = "abcdefghijklmnopqrstuvwzyx1234567890";
    let reversed = "";
    const stringSplit = str
        .toLowerCase()
        .split("")
        .filter(str => allowed.includes(str))
        .reverse()
        .join("")
    // console.log(stringSplit)
    const formattedString = str
        .toLowerCase()
        .split("")
        .filter(str => allowed.includes(str))
        .join("")
    // console.log(formattedString)
    if(stringSplit === formattedString){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
