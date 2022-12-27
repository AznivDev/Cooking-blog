const { exportAllDeclaration } = require('@babel/types');
const calculateTransitTime = require('./main'); 
// 200 / 50 + 4 = 8, but we can’t promise the same day delivery
test('calculate 200 miles to equal 24',  () => {
    expect(calculateTransitTime(200)).toBe(24);
});
// 350 / 50 + 4 = 11, but we can’t promise the same day delivery
test('calculate 350 miles to equal 24',  () => {
    expect(calculateTransitTime(350)).toBe(24);
});
// (2000 - 350) / 550 * 24 + 24(first day) + 24(day for LTL pickups and deliveries)
test('calculate 2000 miles to equal 120',  () => {
    expect(calculateTransitTime(2000)).toBe(120);
});
// (2220 - 350) / 550 * 24 + 24(first day) + 24(day for LTL pickups and deliveries)
test('calculate 2220 miles to equal 130',  () => {
    expect(calculateTransitTime(2220)).toBe(130);
});



//npm test main.test.js




