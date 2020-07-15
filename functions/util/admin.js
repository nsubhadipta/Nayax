const admin = require('firebase-admin');

// admin.initializeApp();


var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nayaxtodoapp.firebaseio.com",
  storageBucket: "nayaxtodoapp.appspot.com",
});

const db = admin.firestore();

module.exports = { admin, db };