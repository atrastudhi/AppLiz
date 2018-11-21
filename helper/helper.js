const bcrypt = require('bcryptjs')

class Helper {

    static encrypt (password) {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    }

    static check (input, password) {
        return bcrypt.compareSync(input, password)
    }

}

module.exports = Helper