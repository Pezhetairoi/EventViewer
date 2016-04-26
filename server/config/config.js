var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath : rootPath,
        db: 'mongodb://localhost/meanvision',
        port: process.env.NODE_ENV.PORT || 3000
    },
    production: {
        rootPath : rootPath,
        db:'mongodb://sijiehao:Aimar1103@ds011261.mlab.com:11261/meanvision',
        port: process.env.NODE_ENV.PORT || 8080
    }
}