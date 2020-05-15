module.exports = calculatePercents = (parts = [], decimalDigits = 3) => {
    
    if (!parts) {
        return [];
    }

    const coeff = Math.pow(10, decimalDigits);
    const zeros = ''.padStart(decimalDigits, '0');

    const sumParts = parts.reduce((sum, currentValue) => sum + Number(currentValue), 0);
 
    let map = new Map();
    let percent,
        fullPercent,
        ingtegerPart,
        fractionalPart;

    return parts.map(part => {
    
        if(map.has(part)) {
            return map.get(part);
        }

        percent = String(Math.floor((part*100*coeff/sumParts))/coeff).split('.');
        ingtegerPart = percent[0];
        fractionalPart = percent[1] ? percent[1] : zeros;
        
        fullPercent = `${ingtegerPart}.${fractionalPart}${zeros.slice(fractionalPart.length)}`;

        map.set(part, fullPercent);

        return fullPercent;
    });
}
