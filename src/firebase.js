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

    // ******************************************************
    // ******************************************************
    
    
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
        // location.href = 'sede.html';
        // location.href = 'plataforma.html';
        seccionPrincipalLoginRegistro.classList.replace('show','hidden');
        seccionSidebar.classList.replace('hidden','show');
        slideout.classList.replace('hidden','show');
        seccionBotonMenu.classList.replace('hidden','show');
        seccionBienvenidaALaPlataforma.classList.replace('hidden','show');

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

// Cambio de contraseña
const resetPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
  })
  .catch((error) => {
  })
}

