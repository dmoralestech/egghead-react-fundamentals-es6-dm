const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box($(x))`
})

const percentToFloat = str =>
    Box(str.replace(/\$/g, ''))
        .map(replaced => parseFloat(replaced))
        .map(number => number * 0.01)

const moneyToFloat = str =>
    Box(str)
    .map( s => s.replace(/\$/g, ''))
    .map(r => parseFloat(r))

const applyDiscount = (price, discount) =>
    moneyToFloat(price)
        .map(cost => percentToFloat(discount)
                        .map(savings => cost - cost * savings))
