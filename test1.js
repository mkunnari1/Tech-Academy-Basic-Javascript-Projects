function convertToCelsius(tempInF) {
    tempInC = (tempInF-32) * 5/9;
    return tempInC
}

console.log( convertToCelsius(212) );