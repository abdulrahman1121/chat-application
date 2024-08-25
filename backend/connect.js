const admin = require('firebase-admin');
// Path to service account file
const serviceAccount = require('./config/codeconnect-525cc-firebase-adminsdk-re7p3-e42d580081.json');

// Initalize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://codeconnect-525cc-default-rtdb.firebaseio.com"
})

const db = admin.database(); // initallize real time database


module.exports = { admin, db };