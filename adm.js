  var firebaseConfig = {
    apiKey: "AIzaSyC-lmqWKnRV1vi2JXo1Yg5cZkFsFKjLj3s",
    authDomain: "proyectodiseno-eead8.firebaseapp.com",
    databaseURL: "https://proyectodiseno-eead8.firebaseio.com",
    projectId: "proyectodiseno-eead8",
    storageBucket: "proyectodiseno-eead8.appspot.com",
    messagingSenderId: "939530454287",
    appId: "1:939530454287:web:f691b63f5b3bc9938faa7a"
  };
  firebase.initializeApp(firebaseConfig);

  let userRef = firebase.database().ref("Users/Drivers");

  function cargarSolicitudes(){
    var band = true;
    var alerta = true;

    userRef.orderByChild("status").equalTo("desactivado").on('value', function (snapshot) {
    snapshot.forEach(function(childSnapshot) {

      if(band){
        var nombre=childSnapshot.val().name;
        var correo=childSnapshot.val().email;
        var telefono=childSnapshot.val().phoneNumber;
        var enfermedades=childSnapshot.val().diseases;
        var placa=childSnapshot.val().vehiclePlate;
        var uid = childSnapshot.val().id;
        band = false;
        alerta = false;
        cargarMensajes(nombre,correo,telefono,enfermedades,placa,uid);
      }
    });
    if(alerta){
      alert("No hay Solicitudes");
    }
    });
  }
  function cargarMensajes(n,c,t,e,p,i){
    var soli = "Nombre: " + n + "\n" + "Email: " + c + "\n" + "Telefono: " + t + "\n" +"Enfermedades: " + e + "\n" + "Placa: " + p
    var opcion = confirm(soli);

    if (opcion == true) {
      console.log("true");
      userRef.child(i).update({status: "activado"});
      alert("Ha aceptado la solicitud del conductor");
    } else{
      console.log("false");
      userRef.child(i).update({status: "rechazado"});
      alert("Ha rechazado la solicitud del conductor");
    }
  }


  /*
  function cargarSolicitudes(){

    userRef.orderByChild("status").equalTo("desactivado").on('value', function (snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var nombre=childSnapshot.val().name;
        var correo=childSnapshot.val().email;
        var telefono=childSnapshot.val().phoneNumber;
        var enfermedades=childSnapshot.val().diseases;
        var placa=childSnapshot.val().vehiclePlate;
        var uid = childSnapshot.val().id;
        cargarMensajes(nombre,correo,telefono,enfermedades,placa,uid);
    });
    });
  }
  function cargarMensajes(n,c,t,e,p,i){
    var soli = "Nombre: " + n + "\n" + "Email: " + c + "\n" + "Telefono: " + t + "\n" +"Enfermedades: " + e + "\n" + "Placa: " + p
    var opcion = confirm(soli);

    if (opcion == true) {
      userRef.child(i).update({status: "activado"});
      alert("Ha aceptado la solicitud del conductor");
    } else{
      userRef.child(i).update({status: "rechazado"});
      alert("Ha rechazado la solicitud del conductor");
    }
  }
  */