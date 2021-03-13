  // Initialize Firebase
  var config = 
      {
    apiKey: "AIzaSyBs8pqwA4GWH_fN2g2jcDkY6nA0w0QKzjU",
    authDomain: "vamsi-krishna-9dea8.firebaseapp.com",
    databaseURL: "https://vamsi-krishna-9dea8.firebaseio.com",
    projectId: "vamsi-krishna-9dea8",
    storageBucket: "gs://vamsi-krishna-9dea8.appspot.com",
    messagingSenderId: "713083052462"
  };
  firebase.initializeApp(config);

var messagesRef=firebase.database().ref('messages');
document.getElementById('contactform').addEventListener('submit',submitform);
function submitform(e){
    e.preventdefault();
    //get values
    var name=getinputval('name');
    var roll=getinputval('roll');
    
    savemessage(name,roll);
    
    
}
//function to  get from values
function getinputval(id){
    return document.getElementById(id).value; 
}
function savemessage(name,roll){
    var newmessageref=messagesRef.push();
    newmessageref.set({
        name:name,
        roll=Registrationnumber
    });
}