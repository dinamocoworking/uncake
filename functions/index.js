var functions = require('firebase-functions');
const admin = require('firebase-admin');


var serviceAccount = require("./service-account.json");
/*
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://uncake-1a2f6.firebaseio.com"
});
*/

exports.generateToken = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! ");
    
    var token = admin.initializeApp(functions.config().firebase);
    response.send(token);
    // console.log(request.body);
});








// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase! ");
// })