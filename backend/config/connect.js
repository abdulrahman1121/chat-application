const admin = require('firebase-admin');
const fs = require('fs');
// Path to service account file
const serviceAccount = JSON.parse(fs.readFileSync('C:/Users/abdal/OneDrive/Documents/ChatWebsiteCodeDay/codeconnect-525cc-firebase-adminsdk-re7p3-e42d580081.json'));


// Initalize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://codeconnect-525cc-default-rtdb.firebaseio.com"
})

const db = admin.database(); // initallize real time database
const testRef = db.ref('test');
testRef.set({
    testMessage: "Hello, Firebase!"
})
.then(() => {
    console.log("Test message written successfully");
})
.catch((error) => {
    console.error("Error writing test message:", error);
});



module.exports = { admin, db };