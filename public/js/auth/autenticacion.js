class Autenticacion {
  autEmailPass(email, password) {
    //$('#avatar').attr('src', 'imagenes/usuario_auth.png')
    //Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
    //$('.modal').modal('close')

  }

  crearCuentaEmailPass(email, password, nombres) {
    /** Cuando un usuario se registra, enviamos un email de verificación.
     *  cuando el usuario hace click en el link, es redirigido a una página
     *  de Firebase; al agregar esta configuración, colocamos un botón hacia
     *  nuestro sitio web para que el usuario no se sienta perdido al verificar
     *  su cuenta.
     */
    const configuracion = {
      url: 'localhost:3000'
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        // Si la creación de la cuenta es exitosa, actualizamos el campo
        // nombre del perfil recientemente creado
        result.user.updateProfile({
          displayName: nombres
        })
        // Le enviamos un email al usuario para que verifique su cuenta
        result.user.sendEmailVerification(configuracion).catch(error => {
          console.error(error)
          Materialize.toast(error.message, 4000)
        })

        /** Cuando Firebase crea una cuenta, automaticamente loguea al usuario
         *  nosotros queremos que solo los usuarios que han verificado su cuenta
         *  accedan a nuestra aplicación, por eso forzamos un Logout aquí.
         */
        firebase.auth().signOut()

        // Mensaje de éxito
        Materialize.toast(
          `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
          4000
        )
        // Cerramos la ventana
        $('.modal').modal('close')

      })
      .catch(error => {
        console.error(error)
        Materialize.toast(error.message, 4000)
      })

    /*Materialize.toast(
      `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
      4000
    )

    $('.modal').modal('close')*/

  }

  authCuentaGoogle() {
    //$('#avatar').attr('src', result.user.photoURL)
    //$('.modal').modal('close')
    //Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
  }

  authCuentaFacebook() {
    //$('#avatar').attr('src', result.user.photoURL)
    //$('.modal').modal('close')
    //Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
  }

  authTwitter() {
    // TODO: Crear auth con twitter
  }
}
