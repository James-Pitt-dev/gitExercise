

const addition = (a, b) => {
    if (typeof(a) === 'number' || typeof(b) === 'number'){
        throw new Error('Input must be a number')
    }
    return a + b;
}

