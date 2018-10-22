const bcrypt = require('bcryptjs');

module.exports = {
    hash: 'criptografia',

    cripto: function(text) {
        return bcrypt.hash(text);
    }
}