//Calculadora
let cal = 0;
let num1 = 0;
let num2 = 0;
while (cal <= 5) {
	cal = parseInt(
		prompt(`----Calculadora----\n 
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Porcentaje
6. Hacer una Tabla
7. Salir `)
	);
	if (cal == 1) {
		while (true) {
			for (let i = 1; i <= 2; i++) {
				num1 = parseInt(prompt("Ingrese numero :"));
				num2 = num2 + num1;
			}
			opc = parseInt(
				prompt(
					`Resultado = ${num2}\n1. Seguir sumando\n2. Nueva suma\n3. Volver al menu`
				)
			);
			if (opc == 2) {
				num2 = 0;
			} else if (opc == 3) {
				break;
			}
		}
	} else if (cal == 2) {
		while (true) {
			num1 = parseInt(prompt("Ingrese numero :"));
			num2 = parseInt(prompt("Ingrese numero :"));
			opc = parseInt(
				prompt(`Resultado = ${num1 - num2}\n1. Nueva resta\n2. Volver al menu`)
			);
			if (opc == 1) {
				num2 = 0;
			} else if (opc == 2) {
				break;
			}
		}
	} else if (cal == 3) {
		while (true) {
			num1 = parseInt(prompt("Ingrese numero :"));
			num2 = parseInt(prompt("Ingrese numero :"));
			opc = parseInt(
				prompt(
					`Resultado = ${num1 * num2}\n1. Nueva multicacion\n2. Volver al menu`
				)
			);
			if (opc == 1) {
				num2 = 0;
			} else if (opc == 2) {
				break;
			}
			1;
		}
	} else if (cal == 4) {
		while (true) {
			num1 = parseInt(prompt("Ingrese numero :"));
			num2 = parseInt(prompt("Ingrese numero :"));
			opc = parseInt(
				prompt(
					`Resultado = ${num1 / num2}\n1. Nueva divicion\n2. Volver al menu`
				)
			);
			if (opc == 1) {
				num2 = 0;
			} else if (opc == 2) {
				break;
			}
		}
	} else if (cal == 5) {
		while (true) {
			num1 = parseInt(prompt("Ingrese numero :"));
			num2 = parseInt(prompt("Ingrese porcentaje :"));
			opc = parseInt(
				prompt(
					`El ${num2}% de ${num1} es = ${
						(num1 * num2) / 100
					}\n1. Nueva porcentaje\n2. Volver al menu`
				)
			);
			if (opc == 1) {
				num2 = 0;
			} else if (opc == 2) {
				break;
			}
		}
	} else if (cal == 6) {
		while (true) {
			let tabla = parseInt(
				prompt("Ingrese hasta cuento se va a crear la tabla : ")
			);
			num1 = parseInt(prompt("Ingrese numero :"));

			for (let i = 1; i <= tabla; i++) {
				console.log(`${num1} X ${i} = ${num1 * i}`);
			}
			opc = parseInt(
				prompt(
					`La tabla lo podes encontrar en Consola\n1. Nueva tabla\n2. Volver al menu`
				)
			);
			if (opc == 1) {
				num2 = 0;
			} else if (opc == 2) {
				break;
			}
		}
	} else {
		cal = parseInt(prompt("Seguro que desea salir?"));
	}
}
alert("Hasta luego...");
