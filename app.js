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
  
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();

      var email = document.getElementById('email');
      var password = document.getElementById('password');

      console.log(email.value);
      console.log(password.value);

  
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
      email.value= '';
      password.value = '';
  });


  function ventana(){
    window.location.href = "ventana.html";
    
  }

  function cerrar(){
    firebase.auth().signOut()
    .then(function(){
      console.log("Saliendo");

    })
    .catch(function(error){
        console.log(error);
    })
  }
  function obervador(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("existe usuario activo");
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        cerrar();
        ventana();
        // ...
      } else {
        // User is signed out.
        // ...
        console.log("no existe usuario activo");

      }
    });
  }
  obervador();