const fibonacci = function(n) {
    const initFib = [0,1]
    if(Number(n) === 0){
        return 0
    }
    if(Number(n)=== 1){
        return 1
    }
    if(n < 0){
        return "OOPS"
    }
    for(let i = 2; i < Number(n); i++){
        initFib[i] = initFib[i - 1] + initFib[i-2]
    }
    return initFib[initFib.length - 1] + initFib[initFib.length -2]
};

// Do not edit below this line
module.exports = fibonacci;
