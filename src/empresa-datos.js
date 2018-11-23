// Guardar datos de login de EMPRESA en BD
const saveData = (userId, name, email, imageUrl) => {
    firebase.database().ref('empresa/' + userId).
    set({
      username: name,
      email: email,
      picture: imageUrl,
      id: userId,
    });
  }
  
    // Registro de EMPRESAS Nuevos
  const registerNew = (email, password) => { 
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
          const user = result.user;
          if (user.displayName == null) {
            username = document.getElementById('nameContactoEmpresa').value;
          } else {
            username = user.displayName;
            console.log("nameContactoEmpresa")
          }
          if (user.photoURL == null) {
            picture = "https://thumbs.dreamstime.com/b/icono-del-usuario-46707697.jpg";
          } else {
            picture = user.photoURL;
          } 
      
          console.log(user.uid);
          console.log(username);
          console.log(user.displayName);
          saveData(user.uid, username, user.email, picture);
          // saveData(user.uid, razonSocial, RUC, nameContactoEmpresa, celularEmpresa, sectorEmpresa, user.emailEmpresa, picture);
          check();
          validInputs.innerHTML = '';
          validInputs.VALUE='';
          alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión');
          // formRegisterEmpresa.classList.add('hidden');
          formRegisterEmpresa.classList.replace('show','hidden');
          formRegisterEmpresa.classList.add('hidden');
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