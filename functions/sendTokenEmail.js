'use strict';
constvar functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

var serviceAccount = require("./service-account.json");

// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

// Your company name to include in the emails
const APP_NAME = 'Uncake';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://uncake-1a2f6.firebaseio.com"
});

var uid = 'manuele.capacci@gmail.com';
var additionalClaims = {};







/**
 * Sends a welcome email to new user.
 */
exports.sendTokenEmail = functions.auth.user().onCreate(event => {
// [END onCreateTrigger]
  // [START eventAttributes]
  const user = event.data; // The Firebase user.

  const email = user.email; // The email of the user.
  const displayName = user.displayName; // The display name of the user.
  // [END eventAttributes]

  return sendWelcomeEmail(email, displayName);
});


// Sends a welcome email to the given user.











exports.generateToken = functions.https.onRequest((request, response) => {
    

    admin.auth().createCustomToken("manuele.capacci@gmail.com")
        .then(function(customToken){
            response.send(customToken);

            const user = event.data; // The Firebase user.
            const email = user.email; // The email of the user.
            const displayName = user.displayName; // The display name of the user.
            sendWelcomeEmail(email, displayName, customToken);

        }).catch(function(error){
            response.send(error);
    })
});

function sendWelcomeEmail(email, displayName, token) {
  const mailOptions = {
    from: '"MyCompany" <noreply@firebase.com>',
    to: email
  };

  // The user unsubscribed to the newsletter.
  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Hey ${displayName}!, Welcome to ${APP_NAME}. I hope you will enjoy our service. Questo è il link per loggarsi ${token}`;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New welcome email sent to:', email);
  });
}



exports.helloWorld = functions.https.onRequest((request, response) => {
     response.send("Hello from Firebase! ");
})



// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase! ");
// })