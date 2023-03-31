let dbUsers = [
    {
        username: "amir",
        password: "password",
        email: "muhammadamiruddinmuhamad@gmail.com"
    },
        {
        username: "zikry",
        password: "123",
        email: "zikryruddin@utem.edu.my"
    },
        {
        username: "daus",
        password: "idk",
        email: "daus1234@gmail.com"
    }
]

function login(username, password) {
    console.log("Someone try to login with username:", username, "and password:", password)
    let matched = dbUsers.find(element =>
        element.username == username
    ) // finding element in the array
    if (matched) {
        if (matched.password == password) {
            return matched
        } else {
            return "Passwords do not match"}
    } else {
        return "Username not found"
    }
}

function register (newusername, newpassword, newemail) {
    // todo: check if username exist
    let userCheck = dbUsers.find(element =>
        element.username == newusername
    ) // check username in database
    if (userCheck){
        return "User already registered"
    } else {
        dbUsers.push({
            username: newusername,
            password: newpassword,
            email: newemail
        })
    }
    

}
//try to login
console.log(login("amir", "password"))
console.log(login("fakhri", "fakhry"))

//try to register
register("fakhri", "fakhry", "fakhry@gmail.com")
console.log(register("amir", "idk", "amiruddin@gmail.com"))