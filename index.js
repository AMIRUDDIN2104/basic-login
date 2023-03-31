let dbUsers = [
    {
        username: "amir",
        password: "password",
        name: "amiruddin",
        email: "muhammadamiruddinmuhamad@gmail.com"
    },
    {
        username: "zikry",
        password: "123",
        name: "zikey",
        email: "zikryruddin@utem.edu.my"
    },
]


function login(username, password) {
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find(element => 
        element.username == username
    )
    if(matched){
        if(matched.password == password) {
            return matched
        }else{
            return "Password not matched"
        }
    
    }else {
        return "Username not found"
    }
    console.log(matched)
}

// try to login
console.log(login ("amir", "password"))
console.log(login ("amir", "123456"))