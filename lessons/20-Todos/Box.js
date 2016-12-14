const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
})

const percentToFloat = str =>
    Box(str.replace(/\$/g, ''))
        .map(replaced => parseFloat(replaced))
        .map(number => number * 0.01)

const moneyToFloat = str =>
    Box(str)
        .map(s => s.replace(/\$/g, ''))
        .map(r => parseFloat(r))

const applyDiscount = (price, discount) =>
    moneyToFloat(price)
        .fold(cost => percentToFloat(discount)
            .fold(savings => cost - cost * savings))

const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
})

const Left = x => ({
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`
})

const result = Left(2).map(x => x + 1).map(x => x / 2).fold(x=> 'error', x => x)

const Either = Right || Left


