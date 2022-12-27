const calculateTimeDiff = require('./calculateTimeDiff.js');
test('calculate start - 11:00, end - 08:00 equal 180', () => {
    expect(calculateTimeDiff('11:00', '08:00')).toBe(180);
});
test('calculate start - 08:00, end - 11:00 equal 180', () => {
    expect(calculateTimeDiff('08:00', '11:00')).toBe(180);
});
test('calculate start - 08:00, end - 08:05  equal 5', () => {
    expect(calculateTimeDiff('08:00', '08:05')).toBe(5);
});
test('calculate start - 08:00, end - 08:00 equal 0', () => {
    expect(calculateTimeDiff('08:00', '08:00')).toBe(0);
});




