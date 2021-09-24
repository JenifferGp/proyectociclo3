$(function () {
    console.log('ready');

    $('#btnIngresar').click(function (e) {
        e.preventDefault()
        if ($("#txtUsuario").val() != "" && $("#txtContrasena").val() != "") {
            sessionStorage.setItem('usuario', $("#txtUsuario").val());
            window.location.href = 'dashboard.html';
        } else{
            alert("El usuario no existe o la contraseña es incorrecta");
        }
    });
})