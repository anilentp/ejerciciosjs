/*
//Ejercicio Aprobado/Reprobado

	var n1, n2, n3, promedio;
	n1 = prompt("Ingrese la 1ra nota", " ");
	n2 = prompt("Ingrese la 2da nota", " ");
	n3 = prompt("Ingrese la 3ra nota", " ");
	promedio = (+n1 + +n2 + +n3) / 3;
	promedio =promedio.toFixed(2)


	if (promedio >=6 && promedio<=10) {
		alert("Aprobado, Tu promedio es de: " + promedio);
	}
	else if (promedio>10) {
		alert("ERROR, rango no corresponde");
	}
	else {
		alert("Reprobado, Tu promedio es de: " + promedio);
	}
*/

/*
//Ejercicio Cual es el numero mas grande

	var n1, n2;
	n1 = prompt("Ingrese 1er número", " ");
	n2 = prompt("Ingrese 2do número", " ");

	if (n1<n2) {
		alert("el numero " + n2 + " es mayor que " + n1);
	}
	else if (n1==n2) {
		alert("el numero " + n2 + " es igual que " + n1);
	}
	else{
		alert("el numero " + n2 + " es menor que " + n1);
	}
*/

/*
//Ejercicio Cual es el numero mas grande

	var n;
	n = prompt("Ingrese número", " ");

	if (n>0) {
		alert("el numero " + n + " es positivo");
	}
	else if (n==0) {
		alert("el numero " + n + " es cero/neutro");
	}
	else{
		alert("el numero " + n + " es negativo");
	}
*/

/*
//Ejercicio El harapiento distinguido

	var traje, valor1, valor2;
	traje = prompt("Ingrese valor de su traje", " ");
	valor1 = traje - (traje*0.15);
	valor2 = traje - (traje*0.08);

	if (traje >= 2500.00) {

		alert("el total de su traje es: " + valor1);
	}
	else{
		alert("el total de su traje es: " + valor2);
	}
*/

/*
//Ejercicio EL MAYOR DE LOS NÚMEROS

	var n1, n2, n3;
	n1 = prompt("Ingrese 1ro número", " ");
	n2 = prompt("Ingrese 2do número", " ");
	n3 = prompt("Ingrese 3ro número", " ");

	if (n1>n2 && n1>n3) {
		alert("el numero " + n1 + " es mayor que " + n2 + " y " + n3);
	}
	else if (n2>n1 && n2>n3) {
		alert("el numero " + n2 + " es mayor que " + n1 + " y " + n3);
	}
	else if (n3>n1 && n3>n2) {
		alert("el numero " + n3 + " es mayor que " + n1 + " y " + n2);
	}
	
		// numeros iguales

	else if (n1==n2 && n1>n3) {
		alert("el numero " + n1 + " igual que " + n2 + " y es mayor que " + n3);
	}
	else if (n1>n2 && n1==n3) {
		alert("el numero " + n1 + " es mayor que " + n2 + " e igual que "  + n3);
	}
	

	else if (n2==n1 && n2>n3) {
		alert("el numero " + n1 + " es igual que " + n2 + " y es mayor que " + n3);
	}
	else if (n2>n1 && n2==n3) {
		alert("el numero " + n1 + " es mayor que " + n2 + " e igual que "  + n3);
	}


	else if (n3==n2 && n3>n1) {
		alert("el numero " + n3 + " es igual que " + n1 + " y es mayor que " + n2);
	}
	else if (n3>n2 && n3==n1) {
		alert("el numero " + n3 + " es mayor que " + n1 + " e igual que "  + n2);
	}

	else if (n1==n2 && n1==n3) {
		alert("Los tres números son iguales");
	}
*/


/*
//Ejercicio BANQUETES “La langosta ahumada”

	var n_persona, valor1, valor2, valor3;
	n_persona = prompt("Ingrese la cantidad de personas", " ");
	valor1 = n_persona * 95.00;
	valor2 = n_persona * 85.00;
	valor3 = n_persona * 75.00;

	if (n_persona <=200) {
		alert("El total de su banquete para " + n_persona + " personas es de: " + valor1);
	}
	else if (n_persona > 200 && n_persona <=300) {
		alert("El total de su banquete para " + n_persona + " personas es de: " + valor2);
	}
	else {
		alert("El total de su banquete para " + n_persona + " personas es de: " + valor3);
	}
*/

/*
//Ejercicio VIAJE ESCOLAR

	var n_alumnos, pasaje1, pasaje2, pasaje3, pasaje4, valor1, valor2, valor3, valor4;
	n_alumnos = prompt("Ingrese la cantidad de alumnos", " ");
	pasaje1 = 65.00;
	pasaje2 = 70.00;
	pasaje3 = 95.00;
	pasaje4 = 4000.00;
	valor1 = n_alumnos * pasaje1;
	valor2 = n_alumnos * pasaje2;
	valor3 = n_alumnos * pasaje3;
	valor4 = pasaje4 / n_alumnos;
	valor4 = valor4.toFixed(2)

	if (n_alumnos <= 30) {
		alert("El total a cancelar por el servicio es " + pasaje4 + " por la cantidad de " + n_alumnos + " alumnos y el valor por cada uno es de: " + valor4);
	}
	else if (n_alumnos > 30 && n_alumnos <=49){
		alert("El total a cancelar por el servicio es " + valor3 + " por la cantidad de " + n_alumnos + " alumnos y el valor por cada uno es de: " + pasaje3);
	}
	else if (n_alumnos >=50 && n_alumnos <=99) {
		alert("El total a cancelar por el servicio es " + valor2 + " por la cantidad de " + n_alumnos + " alumnos y el valor por cada uno es de: " + pasaje2);
	}
	else {
		alert("El total a cancelar por el servicio es " + valor1 + " por la cantidad de " + n_alumnos + " alumnos y el valor por cada uno es de: " + pasaje1);
	}
*/


//Ejercicio COMPAÑIA DE BUSES

