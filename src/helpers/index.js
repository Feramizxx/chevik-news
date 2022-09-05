const getNumbersTill = (limit) => {
    let numbers = [];
    for (let i = 0; i < limit; i++) {
        numbers.push(i);
    }
    return numbers;
}

const scrollTop = (behavior = 'auto') => {
    window.scroll({
        top: 0,
        left: 0,
        behavior
    });
}

export default {
    getNumbersTill,
    scrollTop
}