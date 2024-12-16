var Sequelize = require('sequelize');
const sequelize = require('../controllers/helpers/dbconnect');

   const stoty = sequelize.define('story-callback', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    callerid: Sequelize.STRING(255),
    txid: Sequelize.STRING(255),
    ivrno: Sequelize.STRING(255),
    created_at: Sequelize.DATEONLY,
    req_time: Sequelize.TIME
  
}, {
    freezeTableName: true,
    timestamps: false
});



module.exports = stoty;
