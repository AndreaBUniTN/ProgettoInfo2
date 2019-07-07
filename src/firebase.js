// Ghost file, just for reference

//https://firebase.google.com/docs/web/setup#config-web-app -->

import * as firebase from "firebase";
//import "firebase/firestore";
//import ArrayUnion from "google.cloud.firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAOBQXlfVXJNHi62tz-5IkpAUeVb9L2PJM",
  authDomain: "bokiaz.firebaseapp.com",
  databaseURL: "https://bokiaz.firebaseio.com",
  projectId: "bokiaz",
  storageBucket: "",
  messagingSenderId: "171947064924",
  appId: "1:171947064924:web:25d6f642b864c713"
};
// Initialize Firebase if it hasn't been initialized yet.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let db = firebase.firestore();

// Made every useful function as global.

window.getItemData = function(id, type) {
  let dDoc = db.collection(type).doc(id);
  let dataArray = [];

  let round = true;
  let i,
    out,
    sum = 0;

  dDoc
    .get()
    .then(function(doc) {
      if (doc.exists) {
        dataArray[0] = doc.data()["brand"];
        dataArray[1] = doc.data()["category"];
        dataArray[2] = doc.data()["desc"];
        dataArray[3] = doc.data()["gender"];
        dataArray[4] = doc.data()["imglink"];
        dataArray[5] = doc.data()["link"];
        dataArray[6] = doc.data()["name"];
        dataArray[7] = doc.data()["price"];

        for (i = 0; i < doc.data()["stars"].length; i++) {
          sum = sum + doc.data()["stars"][i];
        }
        out = sum / doc.data()["stars"].length;
        //if (round) out = Math.round(out * 10) / 10; // Rounding up to 1 decimal digit.
        if (round) out = Math.round(out); // No decimals.
        dataArray[8] = out;

        console.log(JSON.stringify(dataArray)); // Testing purposes.

        // Since localStorage only support strings.
        localStorage.setItem(id + type, JSON.stringify(dataArray));
        //return dataArray;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

//function addRating(id, type, rating) {
window.addRating = function(id, type, rating) {
  if (rating > 5) {
    alert("Something went wrong!");
    return; //
  }

  let dDoc = db.collection(type).doc(id);
  let tmpArray = [];

  dDoc
    .get()
    .then(function(doc) {
      if (doc.exists) {
        tmpArray = doc.data()["stars"]; // Getting the current ratings array.

        tmpArray.push(rating); // Adding the new rating at the end of our array.
        // I've decided to keep the array as it is, in order to show ratings in
        // chronological order.

        return dDoc.update({
          stars: tmpArray
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

  //alert(rating);
  /*dDoc.update({
    stars: firebase.firestore.FieldValue.arrayUnion(rating)
  });
  console.log("something");*/
};

//function getAverageStars(id, type) { // Changed idea, did some stuff
/*window.getAverageStars = function(id, type) {
  let dDoc = db.collection(type).doc(id);

  let round = true;
  let i,
    out,
    sum = 0;
  dDoc
    .get()
    .then(function(doc) {
      if (doc.exists) {
        for (i = 0; i < doc.data()["stars"].length; i++) {
          sum = sum + doc.data()["stars"][i];
        }
        out = sum / doc.data()["stars"].length;
        if (round) out = Math.round(out * 10) / 10;
        console.log(out);
        //localStorage.setItem(type + id, out);
        return out;
      } else {
        out = 0;
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};*/ //document.getElementById("test").innerHTML = Math.round(
//getAverageStars("1", "clothes")
//);
//getAverageStars("1", "clothes");
//document.getElementById("test").innerHTML = localStorage.getItem("clothes1"); // Y E S

/* TESTING AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH

var docRef = db.collection("clothes").doc("1");
docRef
  .get()
  .then(function(doc) {
    if (doc.exists) {
      document.getElementById("test").innerHTML = doc.data()["brand"];
      console.log(doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  })
  .catch(function(error) {
    console.log("Error getting document:", error);
  });

// TESTING */
