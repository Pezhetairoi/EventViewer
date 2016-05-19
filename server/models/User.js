var mongoose = require('mongoose');
var encryption = require('../utilities/encryption.js');

var userSchema = mongoose.Schema({
    firstName: { type: String, required: '{PATH} is required'},
    lastName: { type: String, required: '{PATH} is required'},
    username: {
        type: String,
        required: '{PATH} is required',
        unique: true
    },
    salt: { type: String, required: '{PATH} is required'},
    hashed_password: { type: String, required: '{PATH} is required'},
    roles: [String]

});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encryption.hashPwd(this.salt, passwordToMatch ) === this.hashed_password;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function(error, collection) {
        if(collection.length === 0) {
            var salt, hash;
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'sijie');
            User.create({firstName: 'Sijie', lastName: 'Hao', username: 'sijiepelta@gmail.com', salt: salt, hashed_password: hash, roles: ['admin'] });
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'susan');
            User.create({firstName: 'Can', lastName: 'Xue', username: 'susanxue', salt: salt, hashed_password: hash, roles: [] });
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'john');
            User.create({firstName: 'John', lastName: 'Doe', username: 'johndoe', salt: salt, hashed_password: hash });
        }

    });
}

exports.createDefaultUsers = createDefaultUsers;
