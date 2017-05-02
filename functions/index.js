var functions = require('firebase-functions');
const admin = require('firebase-admin');

var uid = 'manuele.capacci@gmail.com'

var serviceAccount = require("./service-account.json");
/*
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://uncake-1a2f6.firebaseio.com"
});
*/

exports.generateToken = functions.https.onRequest((request, response) => {
    
    
    var token = admin.initializeApp(functions.config().firebase);
    //response.send(token);
    // console.log(request.body);

    // admin.auth().createCustomToken(uid, additionalClaims ? additionalClaims : {})
    admin.auth().createCustomToken(uid);
    //response.send("Hello from Firebase! ");
});








// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase! ");
// })