const fromDollarToYen = (dollars) => {
    let yen = dollars * 106.58;
    return yen;
}

const fromEuroToDollar = (euros) => {
    let dollars = euros * 1.2;
    return dollars;
}

const fromYenToPound = (yen) => {
    let pound = yen * 0.00625;
    return pound;
}

module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};
