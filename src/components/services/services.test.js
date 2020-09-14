
import PriceCounter from './priceCounter';
import TimeCounter from './timeCounter';
import CountDownTime from './countDownTime';

describe('Testing PriceCounter', () => {
    
    test('Count price for 50 symbols, english language', () => {
        const result = PriceCounter(50, 'en'),
              expected = "120.00";
        expect(result).toBe(expected);
    })

    test('Count price for 100 symbols, ukrainian language', () => {
        const result = PriceCounter(100, 'ua'),
              expected = "50.00";
        expect(result).toBe(expected);
    })

    test('Count price for 1104 symbols, english language', () => {
        const result = PriceCounter(1104, 'en'),
              expected = "132.48";
        expect(result).toBe(expected);
    })

    test('Count price for 5516 symbols, english language', () => {
        const result = PriceCounter(5516, 'ru'),
              expected = "275.80";
        expect(result).toBe(expected);
    })
});



describe('Checking time counter', () => {
    test('Symbols 2500, ru', () => {
        const result = TimeCounter(2500, 'ru'),
        expected = 8551687.921980495;
    
        expect(result).toBe(expected);
    })

    test('Symbols 16809, en', () => {
        const result = TimeCounter(16809, 'en'),
        expected = 183518918.91891894;
    
        expect(result).toBe(expected);
    })
});

describe('checking the time of work', () => {
    test('Incoming time - 4 hours', () => {
        const incomingTimeMs = 14400000,
            startDate = new Date(2020, 8, 15, 12, 25, 40),
            endDate = "15.09.2020 об 16:30",
            result = CountDownTime(startDate, incomingTimeMs);
    
        expect(result).toBe(endDate);
    })


    test('Incoming time - 6.18 hours, day is before weekend', () => {
        const incomingTimeMs = 22680000,
            startDate = new Date(2020, 8, 18, 17, 5, 0),
            endDate = "21.09.2020 об 14:30",
            result = CountDownTime(startDate, incomingTimeMs);
    
        expect(result).toBe(endDate);
    })

    test('Incoming time - 10.36 hours, testing a two-day job', () => {
        const incomingTimeMs = 38160000,
            startDate = new Date(2020, 8, 14, 8, 5, 0),
            endDate = "15.09.2020 об 12:00",
            result = CountDownTime(startDate, incomingTimeMs);
    
        expect(result).toBe(endDate);
    })

});