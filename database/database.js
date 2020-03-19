const Sequelize = require('sequelize');

const connection = new Sequelize('blog','root','rato1994@', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;