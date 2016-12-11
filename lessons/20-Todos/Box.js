const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box($(x))`
})

const ManyToFloat = str =>
    Box(str)
    .map( s => s.replace(/\$/g, ''))
    .fold(r => parseFloat(r))
