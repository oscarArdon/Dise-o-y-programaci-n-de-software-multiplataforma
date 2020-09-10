var edad;
edad = 34;
console.log(edad);
edad = '20 años';
console.log(edad);
function sumar(valor1, valor2) {
    if (typeof valor1 === 'number' && typeof valor2 === 'number')
        return valor1 + valor2;
    else
        return valor1.toString() + valor2.toString();
}
console.log(sumar(4, 5));
console.log(sumar('Hola', 2));
console.log(sumar('Hola', 'Mundo'));
