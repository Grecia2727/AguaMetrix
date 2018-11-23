  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJeQyrbkbUxuq8p2wafd4m_T_OG-ILXpQ",
    authDomain: "aguametrik-4bdbc.firebaseapp.com",
    databaseURL: "https://aguametrik-4bdbc.firebaseio.com",
    projectId: "aguametrik-4bdbc",
    storageBucket: "aguametrik-4bdbc.appspot.com",
    messagingSenderId: "1027300417762"
  };
  firebase.initializeApp(config);

    // var config = {
    //   apiKey: "AIzaSyCNNEgH8ptMeYIBgCTUFmG2oNpa_MXbNs0",
    //   authDomain: "aguametrik.firebaseapp.com",
    //   databaseURL: "https://aguametrik.firebaseio.com",
    //   projectId: "aguametrik",
    //   storageBucket: "aguametrik.appspot.com",
    //   messagingSenderId: "414272779722"
    // };
    // firebase.initializeApp(config);

    // *******************************************************


// // Guardar datos de login de EMPRESA en BD
// const saveData = (userId, name, email, imageUrl) => {
//   firebase.database().ref('empresa/' + userId).
//   set({
//     username: name,
//     email: email,
//     picture: imageUrl,
//     id: userId,
//   });
// }

//   // Registro de Usuarios Nuevos
// const registerNew = (email, password) => { 
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((result) => {
//         const user = result.user;
//         if (user.displayName == null) {
//           username = document.getElementById('nameContactoEmpresa').value;
//         } else {
//           username = user.displayName;
//           console.log("nameContactoEmpresa")
//         }
//         if (user.photoURL == null) {
//           picture = "https://thumbs.dreamstime.com/b/icono-del-usuario-46707697.jpg";
//         } else {
//           picture = user.photoURL;
//         } 
    
//         console.log(user.uid);
//         console.log(username);
//         console.log(user.displayName);
//         saveData(user.uid, username, user.email, picture);
//         // saveData(user.uid, razonSocial, RUC, nameContactoEmpresa, celularEmpresa, sectorEmpresa, user.emailEmpresa, picture);
//         check();
//         alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión');
//         // formRegisterEmpresa.classList.add('hidden');
//         formRegisterEmpresa.classList.replace('show','hidden');
//         formRegisterEmpresa.classList.add('hidden');
//         formInicio.classList.remove('hidden');
//       })
//       .catch((error) => {
//         let errorCode = error.code;
//         let errorMessage = error.message;
//         if (error.message === 'auth/email-already-in-use') {
//           validInputs.innerHTML = "El email ingresado ya está en uso";
//         } else if (error.message === 'The email address is already in use by another account.') {
//           validInputs.innerHTML = "El email está siendo utilizado por otro usuario";      
//         }
//       })
//   }
  
  // Inicio de sesión de usuario existente
  let login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (error.message === 'The password is invalid or the user does not have a password.') {
          validInputs2.innerHTML = "email o password incorrectos";
        } else if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
          validInputs2.innerHTML = "Usuario no registrado";
        }
      });
  }
  
  // Validación de autenticación de usuarios
  const validation = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        console.log(user.emailVerified)
        console.log("afuera de location")
      }
      if (user.emailVerified) {
        console.log(user.emailVerified)
        console.log("antes de location")
        location.href = 'plataforma.html';
        console.log("despues de location")
      } else {
        alert('Por favor valida tu correo');
      }
    });
  }

  // Validación de correo al usuario
const check = () => {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification().then(() => {
    }).catch((error) => {
    });
  }

