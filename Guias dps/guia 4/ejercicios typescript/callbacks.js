function operar(valor1, valor2, func) {
    return func(valor1, valor2);
}
console.log(operar(3, 7, function (x, y) {
    return x + y;
}));
console.log(operar(3, 7, function (x, y) {
    return x - y;
}));
console.log(operar(3, 7, function (x, y) {
    return x * y;
}));
