const calculatePercents = require('../calculatePercents');

describe('calculatePercents method', () => {
    test('returns array', () => {
        expect(calculatePercents() instanceof Array).toBe(true);
    });

    test('calculate percents', () => {
        expect(calculatePercents(['1.5', '3', '6', '1.5'])).toStrictEqual(['12.500','25.000','50.000','12.500']);
    });

    test('calculate percents with difference types', () => {
        expect(calculatePercents([1.5, 3, '6', 1.5])).toStrictEqual(['12.500','25.000','50.000','12.500']);
    });

    test('3 decimal places', () => {
        calculatePercents(['4','8','6']).map(percent => {
            if (percent === 0) {
                return true;
            }
            return expect((percent.split('.')[1].length)).toBe(3); 
        })
    });

    test('amount is 100 percent', () => {
        const percents = calculatePercents(['4','8','11', '7', '15']);
        expect(Math.round(percents.reduce((sum, currentValue) => sum + Number(currentValue), 0))).toBe(100);
    });
});