//ChatBots
let usuario = "adanr760@gmail.com";
let contrasena = "12345";
function inico() {
  let conectar = parseInt(
    prompt("Bienvenido al ChatBots de Galicia\nsos cliente ?\n1.si\n2.no")
  );
  if (conectar == 1) {
    usuario = prompt("Ingrese Correo electronico :");
    contrasena = prompt("Ingrese COntraseña :");
  }
}
