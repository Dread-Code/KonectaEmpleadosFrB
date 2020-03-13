function validate() {
    // Este lo realizo ademas por si depronto eliminan el campo de required desde el html de la pagina
    let nombre,cedula,telefono,direccion,fechaNacimiento,cliente;

    nombre = document.getElementById("nombre").value;
    cedula = document.getElementById("cedula").value;
    telefono = document.getElementById("telefono").value;
    direccion = document.getElementById("direccion").value;
    fechaNacimiento = document.getElementById("fechaNacimiento").value;
    cliente = document.getElementById("cliente" ).value;

    if(nombre === "" ||cedula === "" || telefono === "" ||direccion === "" || fechaNacimiento === "" || cliente === ""){

        alert("Todos los campos son obligatorios");
        return false
    }
    
}