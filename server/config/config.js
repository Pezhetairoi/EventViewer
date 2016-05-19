var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath : rootPath,
        db: 'mongodb://localhost/eventreg',
        port: process.env.NODE_ENV.PORT || 3000
    },
    production: {
        rootPath : rootPath,
        db:'mongodb://sijiehao:Aimar1103@ds011902.mlab.com:11902/eventreg',
        port: process.env.NODE_ENV.PORT || 8080
    }
}