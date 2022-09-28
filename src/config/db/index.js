const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/van_db_dev');
        console.log('success');
    } catch (error) {
        throw(error);
    }

}

module.exports = { connect };