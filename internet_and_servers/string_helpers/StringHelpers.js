function capitalize(str) {
    return str.trim().replace(/^\w/, (c) => c.toUpperCase());
}

function titleize(str) {
    return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}
module.exports = {
    capitalize, titleize
}