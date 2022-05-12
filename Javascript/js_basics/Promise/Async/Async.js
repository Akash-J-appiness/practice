const login = async (username, password) => {
    if (!username || !password) throw "missing"
    if (password === 'ash123') return "welcome"
    throw "passowrd is invalid"
}

login('ash123')
    .then(msg => {
        console.log('Logged In', msg)
    })
    .catch(err => {
        console.log('Error', err)
    })