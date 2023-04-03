const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test("One dollar should be 106.58 Yens", () => {
    const dollar = 1;
    const yen = fromDollarToYen(dollar);
    expect(yen).toBe(106.58);
});

test("One euro should be 1.2 dollars", () => {
    const euro = 1;
    const dollar = fromEuroToDollar(euro);
    expect(dollar).toBe(1.2);
});

test("One yen should be 0.00625 pounds", () => {
    const yen = 1;
    const pound = fromYenToPound(yen);
    expect(pound).toBe(0.00625);
});
