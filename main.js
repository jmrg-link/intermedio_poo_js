// recursividad
const arrNum = [1223,1,3,4,5,7,8,69,45]
// function recursiva (){
//   if (validacion){
//     llamados recursivos
//   } else {
//     // llamados normales , sin recursividad
//   }
// }

//let numero = null
//for (let i = 0 ; i < arrNum.length; i++ ){
// numero  = arrNum[i]
// console.log({i,numero});
//

//function recursiva (arrNum){
//  if (arrNum .length != 0){
//    const firstNum = arrNum[0]
//    console.log(firstNum);
//    arrNum.shift()
//    return recursiva(arrNum)
//  }
//}
// fin recursividad



//Stack & Heap Memory:
// ejemplo de recursividad
// Objeto a copiar
const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e"
  },
  editA(){
    this.a = "aaaaa"
  }
}

function isObject (subject){
  return typeof subject == "object"
}

function isArray (subject){
  return Array.isArray(subject)
}

function deepCopy(subject){
  let copySubject

  const subjectIsArray = isArray(subject)
  const subjectIsObject = isObject(subject)
  
  if(subjectIsArray){
    copySubject = []
  }
  else if (subjectIsObject) {
    copySubject = {}
  } else {
    return subject
  }
  
  for (key in subject){
    const keyIsObject = isObject(subject[key])
    
    if(keyIsObject){
      copySubject[key] = deepCopy(subject[key])
    } else {
      if (subjectIsArray){
        copySubject.push(subject[key])
      } else {
        copySubject[key] = subject[key]
      }
    }
  }
  return copySubject
}


//
//const stringifiendComplexObj = JSON.stringify(obj1)
//const obj2 = JSON.parse(stringifiendComplexObj)
//
//
//
//console.log("Value OBJ1 : " + JSON.stringify(obj1))
//console.log("Value strigifiendComplexObj:" + stringifiendComplexObj)
//console.log("Value OBJ2: " + JSON.stringify(obj2));

//for (prop in obj1){
//  obj2[prop] = obj1[prop]
//}
//
//const obj3 = Object.assign({}, obj1)
//const obj4 = Object.create(obj1)

// fin Stack & Heap 
// const alumno = {
//  name: "Jesus",
//  email:"jesus@gmail.com",
//  age:37,
//  hobbies:["Runner","technology","games"],
//  approvedCourses: ["Curse_one"],
//  addCourse(newCourse){
//    console.log("This", this);
//    this.approvedCourses.push(newCourse)
//    console.log("This", this.approvedCourses);
//  }
// }

// Evita que los objeto sean configurables :: Object.seal()
//Object.seal(alumno)
// Evita que los Objetos sean writtables :: Object.freeze()
//Object.freeze(alumno)
//

// Ejemplo definir propiedades al objeto 
// Object.defineProperty(alumno,"Nasa",{
  // value:"OVNIS",
  // writable:false,
  // enumerable:false,
  // configurable:false

// })

// Object.defineProperty(alumno,"navegator",{
  // value:"Chrome",
  // writable:false,
  // enumerable:true,
  // configurable:true

// })

// Object.defineProperty(alumno,"editor",{
  // value:"VScode",
  // writable:true,
  // enumerable:false,
  // configurable:true

// })

// Object.defineProperty(alumno,"terminal",{
  // value:"WSL",
  // writable:true,
  // enumerable:true,
  // configurable:false

// })

// fin de Ejemplo definir propiedades al objeto 


// console.log('Object.keys');
// console.table(Object.keys(alumno))
// console.log('Object.getOwnPropertyNames');
// console.table(Object.getOwnPropertyNames(alumno))
// console.log('Object.entries');
// console.table(Object.entries(alumno))
// console.log('Object.getownpropertydescriptor');
// console.table(Object.getOwnPropertyDescriptors(alumno))
// console.log('Object.');



// {object.keys}Devuelve un array del contenido del Objeto alumno
// console.log('Object.keys')
// console.table(Object.keys(alumno))

// {object.entries}Metodo estatico del prototipo Object que al pasarle un objeto devuelve un array de arrays.Devuelve indice clave y valor
// console.log('Object.entries')
// console.table(Object.entries(alumno))

// {object.getOwnPropertyDescruotors} Metodo estatico del prototype Object que devuelve indice , valor  y enumera las propiedades de cada objeto dentro de un array de arrays
// console.log('Object.getOwnPropertyDescriptors')
// console.table(Object.getOwnPropertyDescriptors(alumno))

