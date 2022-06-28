module.exports = (Sequelize, sequelize) =>{
    return sequelize.define('agents', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        tel: Sequelize.STRING
    });
};