function normalizePrice(price: Number) {
    if (price === null || price === undefined || typeof (price) !== 'number') return;
    return price.toFixed(2).replace('.', ',')
}

export { normalizePrice }