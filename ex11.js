// objetos a utilizar
const student = {
    name: undefined,
    lastName: undefined,
    nickname: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        facebook: undefined,
        linkedin: undefined,
        instagram: undefined
    }
}

const jesus = deepCopy(student)
Object.seal(jesus)


//Object.defineProperty(jesus, "name", {
//    value: "Jesus Maria",
//    configurable: false
//})




// fin de objetos usados.


function isObject(subject) {
    return typeof subject == "object"
}

function isArray(subject) {
    return Array.isArray(subject)
}

function deepCopy(subject) {
    let copySubject

    const subjectIsArray = isArray(subject)
    const subjectIsObject = isObject(subject)

    if (subjectIsArray) {
        copySubject = []
    }
    else if (subjectIsObject) {
        copySubject = {}
    } else {
        return subject
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[ key ])

        if (keyIsObject) {
            copySubject[ key ] = deepCopy(subject[ key ])
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[ key ])
            } else {
                copySubject[ key ] = subject[ key ]
            }
        }
    }
    return copySubject
}