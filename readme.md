<div align="center">
  <h1>Poo Intermedio Js</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg" alt="platzi logo" height="300px">
  <h3 style="font-weight:bold;" >Curso Poo js Intermedio Platzi (4H)</h3>
  <h5></h5>
</div>

## Requisitos :clipboard:

*   Curso HTML y JS Basico
*   Clousures y Scope
*   Fundamentos de Poo 
*   Curso Basico Poo Js
*   Curso de prework en; OSX (Mac), Windows o Linux.

## Comenzando 🚀

## Descripcion :notebook:

**Aprender Poo con Javascript Moderno**
<p>Este curso tiene por objetivo explicar en profundidad como funcionan la programacion orientada objetos y como el azucar sintactico de JS y las nuevas actualizaciones que trae ECMA mejoran cada dia Javascript. </p>

## Listado de Temas del Curso: 💯
    *   Introduccion al paradigma de la Programacion orientada a objetos

#### Que es Javascript 
*   JavaScript es un lenguaje de programación orientado a objetos, aunque basado en prototipos porque los objetos están (internamente) construidos con prototipos.📌

### Seccion 2 : Atributos y métodos estáticos en JavaScript

*   Para crear atributos estáticos los cuales podamos acceder sin crear un objeto o una instancia de este prototipo, solo hay que agregar al atributo la palabra **static**

Métodos estáticos de Objetct

**Example**
```javascript

const objetito = {
    name: "jesus",
    email: "jesus@gmail.com",
    age: 37,
}
```

*   **Object.keys()**

Nos devuelve una lista con todos los keys(nombres claves) de nuestro objeto objetito

**Example**
```javascript

Object.keys(objetito)
// (3) ["name", "email", "age"]
}
```
*   **Object.getOwnPropertyNames()**

Hace prácticamente lo mismo que Object.keys con pequeñas diferencias DOCUMENTACION

```javascript

*   Object.getOwnPropertyNames(objetito)
// (3) ["name", "email", "age"]
```

*   **Object.entries()**

El método entries nos devolverá un arrays de arrays donde tendremos nuestra palabra clave con su  respectivo valor por cada propiedad del prototipo [key,  value]

**Example**
```javascript

Object.entries(objetito)
// [
//     0: (2) ["name", "jesus"]
//     1: (2) ["email", "jesus@gmail.com"]
//     2: (2) ["age", 37]
// ]
```

*   **Object.getOwnPropertyDescriptors(objetito)**

Nos devuelve todas las propiedades de los objetos, con sus keys y values, y otros atributos. Los atributos
writable, configurable y enumerable
es la forma que tiene JavaScript para limitar el acceso modificar o modificación de nuestros atributos o de nuestros objetos.


**Example**
```javascript

Object.getOwnPropertyDescriptors(objetito) 
{
     age:{
         configurable: true
         enumerable: true
         value: 37
         writable: true
     }
     email:{
         configurable: true
         enumerable: true
         value: "jesus@gmail.com"
         writable: true
     }
     name:{
         configurable: true
         enumerable: true
         value: "jesus"
     }  
}
```

### Seccion 3 : Métodos estáticos del prototipo Object

**Object.key()** y/o **Object.getOwnPropertyName()** obtienes en un arreglo todas las claves del objeto en cuestión, sin importar si son métodos o atributos, ej:

["name", "email", "age"]

**Object.entries()** obtienes un array de array con todas las propiedades del objeto, tener cuidado si tienes un método dentro de el, pues this cambia al usar esta propiedad, ej:

[ 0: ["name", "jesus"] 1:[...], ...]

con Object.getOwnPropertyDescriptors() obtienes en un objeto las propiedades del objeto con otros cosas que nos permitirán poder hacer encapsulamiento, 

codigo de ejemplo:
```javascript

const Jesus = {
  name: "Jesus",
  age: 37,
  approvedCourses: ['Curso 1'],
  addCourse(newCourse: string) {
    console.log('This:', this);
    console.log('This.approvedCourses:', this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

Object.defineProperty(Jesus, "prueba-NASA", {
  value: "👽",
  enumerable: true,
  writable: true,
  configurable: true
});

console.table(Object.getOwnPropertyDescriptors(Jesus));

```
