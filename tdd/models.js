const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : './db.sqlite',
    logging : false
});

const Liquor = sequelize.define('Liquor', {
    title : {
        type : Sequelize.STRING,
        unique : true
    },
    des : {
        type : Sequelize.STRING,
    },
    info : {
        type : Sequelize.STRING,
    },
    item : {
        type : Sequelize.STRING,
    },
    
});

module.exports = {
    Sequelize,
    sequelize,
    Liquor
};
