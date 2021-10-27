const mongoose = require('mongoose');
const URI = "mongodb+srv://nuriddinov:J18rY8iFzwgoL2p5@adminpanel.etss3.mongodb.net/myAdminPanel"

module.exports = async () => {
    try {
        await mongoose.connect(URI);

        const db = mongoose.connection

        db.on('error', console.error.bind(console, 'Console error'))
        db.once('open', function () {
            console.log('MongoDB success connected');
        })

    } catch (error) {
        console.log(error);
    }
}
