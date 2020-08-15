//tsc file.ts para convertirlo en js
//node file.js para correr el equivalente de js

//imprimiendo en consola
console.log("Mi mensaje");

//variables y valores primitivos
var full_nombre:string = "Oscar Ardon";
var age:number = 21;
var developer:boolean = true;

//arreglos
var skills:Array<String> = ['Javascript','TypeScript','Angular'];
var numberArray:number[] = [123,123,1213,1231];

//enumerables
enum ROLE{Employee, Manager, Admin, Developer}
var role:ROLE = ROLE.Employee;

//funciones
function hello():void{
    console.log("funcion sin retorno ni parametros");
}

function setName(name:string):void{
    console.log("funcion sin retorno pero con parametro-> "+name);
}

hello();
setName("Hola");

//clases
class Persona{
    first_name:string;
    last_name:string;
    constructor(_fist_name?:string,_last_name?:string){
        this.first_name = _fist_name;
        this.last_name = _last_name;
    }
}

let personaUno = new Persona();
let personaDos = new Persona("Oscar");
let personaTres = new Persona("Oscar","Ardon");

//interpolacion
var a:string = "Oscar"
var b = `Saludos a ti ${this.a}`;
console.log(b);

//interfaces
interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;//parametro opcional
}

let personaCuatro:MyPersona = {
    first_name: 'Alejandro',
    last_name: 'Ardon',
    twitter_account: '@Aardon'
}

console.log(personaCuatro);

//shapes
class Person{
    first_name:string;
    last_name:string;
    twitter_user:string;
    constructor(){
        this.first_name = "jor";
        this.last_name = "ca";
        this.twitter_user = "@jorgeucano";
    }
    setLastName(last_n:string){
        this.last_name = last_n;
    }
}

var myPerson = new Person();
myPerson.first_name = "Jorge";
myPerson.setLastName("Cano");
console.log(myPerson);

//decorator
/**class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    @enumerable(false)
    greet(){
        return "hey,"+this.greeting;
    }
}

function enumerable(value:boolean){
    return function (target:any, propertyKey:string, descriptor:PropertyDescriptor){
        descriptor.enumerable = value;
    };
}
let gree = new Greeter("Soy el mensaje");
console.log(gree.greet());
**/







