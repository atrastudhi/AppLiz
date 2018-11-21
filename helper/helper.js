const bcrypt = require('bcryptjs')

class Helper {

    static encrypt (password) {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    }

    static check (password, input) {
        return bcrypt.compareSync(input, password)
    }

}

module.exports = Helper