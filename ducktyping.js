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


function createLearningPath({
    name = requiredParam("name"),
    courses = [],
}){
    // private
    const private = {
        "_name": name,
        "_courses": courses
    }
    // public
    const public  = {
        lastName,
        nickName,
        email,
        age,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
            linkedin,
        },
        // name set & get
        get name(){
            return private["_name"]
        },
        // setter name
        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName
            } else {
                console.warn(" Tu nombre debe tener al menos 1 caracter")
            }
        },
        // getter courses
        get courses(){
            return private["courses"]
        },
    }
    return public
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
    
    const private = {
        "_name":name,
        "_learningPaths": learningPaths
    }

    const public = {
        lastName,
        nickName,
        email,
        age,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
            linkedin,
        },
        get name(){
            return private["_name"]
        },
        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName
            } else {
                console.warn(" Tu nombre debe tener al menos 1 caracter")
            }
        },
        // getter learningPaths
        get learningPaths(){
            return private["_learninPaths"]
        },
        // setter learningPaths
        set learningPaths(newLP){
            if(!newLP.name){
                console.warn(`Tu LearninPath no tiene name`);
                return
            }
            if(!newLP.courses){
                console.warn(`Tu LearninPath no tiene courses`);
                return
            }
            if(!isArray(newLP.courses)){
                console.warn(`Tu LearninPath no es una lista de  courses`);
                return
            }
            private["_learningPaths"].push(newLP) = newLP
        },
    }
    return public
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

