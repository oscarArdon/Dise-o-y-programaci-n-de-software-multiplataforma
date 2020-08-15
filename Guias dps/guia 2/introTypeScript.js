//tsc file.ts para convertirlo en js
//node file.js para correr el equivalente de js
//imprimiendo en consola
console.log("Mi mensaje");
//variables y valores primitivos
var full_nombre = "Oscar Ardon";
var age = 21;
var developer = true;
//arreglos
var skills = ['Javascript', 'TypeScript', 'Angular'];
var numberArray = [123, 123, 1213, 1231];
//enumerables
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
var role = ROLE.Employee;
//funciones
function hello() {
    console.log("funcion sin retorno ni parametros");
}
function setName(name) {
    console.log("funcion sin retorno pero con parametro-> " + name);
}
hello();
setName("Hola");
//clases
var Persona = /** @class */ (function () {
    function Persona(_fist_name, _last_name) {
        this.first_name = _fist_name;
        this.last_name = _last_name;
    }
    return Persona;
}());
var personaUno = new Persona();
var personaDos = new Persona("Oscar");
var personaTres = new Persona("Oscar", "Ardon");
//interpolacion
var a = "Oscar";
var b = "Saludos a ti " + this.a;
console.log(b);
var personaCuatro = {
    first_name: 'Alejandro',
    last_name: 'Ardon',
    twitter_account: '@Aardon'
};
console.log(personaCuatro);
//shapes
var Person = /** @class */ (function () {
    function Person() {
        this.first_name = "jor";
        this.last_name = "ca";
        this.twitter_user = "@jorgeucano";
    }
    Person.prototype.setLastName = function (last_n) {
        this.last_name = last_n;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.first_name = "Jorge";
myPerson.setLastName("Cano");
console.log(myPerson);
