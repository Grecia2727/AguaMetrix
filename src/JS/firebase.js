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

// Guardar datos de login en BD
const saveData = (empresaId, razonSocial, RUC, nameContactoEmpresa, celularEmpresa, sectorEmpresa, emailEmpresa, imageUrl) => {
    firebase.database().ref('empresa/' + empresaId).
    set({
      razonSocial: razonSocial,
      RUC: RUC,
      nameContactoEmpresa: nameContactoEmpresa,
      celularEmpresa: celularEmpresa,
      sectorEmpresa: sectorEmpresa,
      emailEmpresa: emailEmpresa,
      picture: imageUrl,
      id: empresaId,
      // ==============  
    });
  }

  // Registro de Usuarios Nuevos
const registerNew = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user.displayName == null) {
          nameContactoEmpresa = document.getElementById('nameContactoEmpresa').value;
        } else {
          nameContactoEmpresa = user.displayName;
        }
        if (user.photoURL == null) {
          picture = "https://thumbs.dreamstime.com/b/icono-del-usuario-46707697.jpg";
        } else {
          picture = user.photoURL;
        }
        saveData(user.uid, razonSocial, RUC, nameContactoEmpresa, celularEmpresa, sectorEmpresa, user.emailEmpresa, picture);
        check();
        alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión');
        formRegister.classList.add('hidden');
        formInicio.classList.remove('hidden');
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (error.message === 'auth/email-already-in-use') {
          validInputs.innerHTML = "El email ingresado ya está en uso";
        } else if (error.message === 'The email address is already in use by another account.') {
          validInputs.innerHTML = "El email está siendo utilizado por otro usuario";
        }
      })
  }
  
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
      }
      if (user.emailVerified) {
        window.location.href = 'plataforma.html';
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

