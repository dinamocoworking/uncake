var functions = require('firebase-functions');
const admin = require('firebase-admin');



var serviceAccount = require("./service-account.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://uncake-1a2f6.firebaseio.com"
});

var uid = 'manuele.capacci@gmail.com';
var additionalClaims = {};

/*var config = {
    "firebase": {
        "type": "service_account",
        "project_id": "uncake-1a2f6",
        "private_key_id": "88f3c44f7e30d2f3a8aa63fc2a071e514e2b48d3",
        "private_key": "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDO5MrsQmyZd4PQ\nruaop+61UBhvav5207oiIh9NXSvMvB2IfwDF5luElVIU6/g09Tq/TOBHgN9mQ25c\nNLXmtqCVoPbA+xEM6mOF6amguKGq2PZuBLBWPcXefziSsc35LdcsDsVgewioWyUx\nVPngbNFEJPeYbyLjpPFLBKARGn4o7zAIMcGWaGnMb5ijJLPw0+JI1e4G43ZwprpF\nTmL66zfZO9hG3+0vRQ+hjoCdpUoCfleW8+hPfrN9wq+VOs33MjPUSGQ3nFT57Lml\n/Wr8S1km3+UiaNX0EKPA9cnW/ueXGwk8SokrC+jMnAaVpbtzfiX69qduwvXaNu4f\n3ZKY/UhLAgMBAAECggEAExln6juPjvNLhd4/iN5H2REV0GNOLmYJTtFblma9fl73\nUvx2c856MFkghLHr7eedjr9oDPHGrcgXzgdHq468cFO1s8b5ofmZSmlxsVaaBg2V\nYj6okK2PMKUJ8fDcFN64eGa8rdVtzSzs2AsCLkedYe8PtFC+Jcm6RLSemjWZ4+lW\nMcbRi+IsvqPi3cS+NDibwA/SzxPPXK2cEjPTThBuKt4xdveYo6GSZpVM5Ei8uhyq\nz2ceA/f9Hg1NcBtZZ5i1yuA357HiJTctGMwWLlyBzr/JB3R9xeHuL1PLGWVjCuNg\na5nF++aKUqXhlwZIhDq2M0lTcO4OILsNdGpVPF1WkQKBgQD0oB5fzlaGjQuXB4o/\nYj4WRzrnH4ZaeIRprqTQgxTxcaIANO6JDBObgjIi+FNlRJXJaByB26W34zx9/Hh1\nFEJKKEIde53rq3kj1PkDAvlESbajomKlemVjQp6jVGa6agZ//bxqrQF2jgjUYW+x\n+2LLgh0iBR7d/GGuX4xX7JbbLQKBgQDYg4l3gFEptVXk7vqCZSrprrAlq5cPl8lB\nHApoU/dFKjr2O7ROa7XlLdhIl0mOo51d23xdb52ye7OpHdiKWpiv43SZKnFCKWnB\nUQJrFhCoJfVjYiu2V1KPD08tZjk0hvABi039E/rH1nlKMzNu1Pn945X1Brtn5Db8\nlDwr6yt8VwKBgQCMJTeBl8rGZwPe0LkJOxVq2gAK7WqhZi4mBaHyu0ZCVOGE0M5f\nwYVyMBLdKftNJw/RRU4fr2CviwXa/8ta9/JKXeoSzgFZRPGv75GBgjCgSMLT2HI/\nb3Gqfj44QGBiJ9/1b76ENv2BmDnCwtek1epxwOdD2D8o2jB0H9VdgfOjOQKBgQCA\n7gNEKCMsxRD7HNwMHhZpxV6bcAyqemab4QjJi4appzYpPvBl6noMmTo8L+rbh87D\n/1mVgkvT5xnbUSyLZtuZkcbzFnUPQv344jagcilFGCWCIwmIsYM2MZWioUbbYqc1\nJDEyzVz+91aOuuKb0zNy3r2DhZi/iwS7b8JNHONuTQKBgD5cyRGGpzLQobYt9pcG\nAUj/ZWmSou21HL0678BJ0xyUxbFNX/7LnBZ5IpH1qRexMqVdWBWsY58KexPc1GfU\nQeUNEAanNBzs9eC9+qX/hxMobCFo0VE3SciqIuCBzI/Yi08uPQ+/+v5SsVYdjizX\nCF4nNFq348Y2gpKIWMdzXsuD",
        "client_email": "firebase-adminsdk-6bv9s@uncake-1a2f6.iam.gserviceaccount.com",
        "client_id": "103768471521403913185",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6bv9s%40uncake-1a2f6.iam.gserviceaccount.com"
    }
};
*/
//admin.initializeApp(functions.config().firebase);
//admin.initializeApp(config.firebase);



exports.generateToken = functions.https.onRequest((request, response) => {
    
    
    //var token = 
    
    //response.send(token);
    // console.log(request.body);

    // admin.auth().createCustomToken(uid, additionalClaims ? additionalClaims : {})
    admin.auth().createCustomToken("manuele.capacci@gmail.com")
        .then(function(customToken){
            response.send(customToken);
        }).catch(function(error){
            response.send(error);
        })
});



exports.helloWorld = functions.https.onRequest((request, response) => {
     response.send("Hello from Firebase! ");
})



// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase! ");
// })