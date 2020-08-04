  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-lmqWKnRV1vi2JXo1Yg5cZkFsFKjLj3s",
    authDomain: "proyectodiseno-eead8.firebaseapp.com",
    databaseURL: "https://proyectodiseno-eead8.firebaseio.com",
    projectId: "proyectodiseno-eead8",
    storageBucket: "proyectodiseno-eead8.appspot.com",
    messagingSenderId: "939530454287",
    appId: "1:939530454287:web:f691b63f5b3bc9938faa7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  document.getElementById('form2').addEventListener('submit',function(e){
    e.preventDefault();
  
 
      var email = document.getElementById('email');
      var password = document.getElementById('password');


  
      firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
      .then(function(response){
              firebase.auth().signOut();
              email.value= '';
              password.value = '';
      })
      .catch(function(error){
          
          var errorCode = error.Code;
          var errorMessage = error.message;
          alert(errorCode);
          alert(errorMessage);
          console.log(errorCode);
          console.log(errorMessage);
          
      });
  
  });