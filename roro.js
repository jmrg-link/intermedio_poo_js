

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

function requiredParam(param){
    throw new Error(`${param} es obligatorio.`)

}

function createStudent({
    name = requiredParam('name') ,
    lastName,
    nickName,
    email = requiredParam('email'),
    age,
    approvedCourses = [],
    learningPaths = [],
    twitter,
    instagram,
    facebook,
    linkedin
} = {}) {
    return {
        name,
        lastName,
        nickName,
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
            linkedin,
        }
    }
}

const jesus = createStudent({
    name: "Jesus Maria",
    lastName: "Rico Gonzalez",
    nickName: "jrico",
    email: "jrico@jrico.es",
    age: 37,
    //approvedCourses:,
    //learningPaths:,
    twitter:"@jmrg-link",
    facebook: "jmrg-link",
    instagram:"jmrg-link",
    linkedin:"jmrg-link"
})