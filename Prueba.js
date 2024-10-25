function primaSegunDiasNoLaboradas() {
    var salarioBase = prompt("Ingrese su salario mensual:");
    console.log("Salario mensual ingresado: " + salarioBase);

    var diasTrabajados = prompt("Ingrese sus días trabajados:");
    console.log("Días trabajados ingresados: " + diasTrabajados);

    var primaNormal = salarioBase * diasTrabajados / 360;

    if (diasTrabajados <= 180) {
        console.log("Esta es su prima: " + primaNormal);
    } else {
        console.log("El número de días trabajados es inválido.");
    }

    menu();
}

function primaSegunFaltasInjustificadas() {
    var salarioBase2 = prompt("Ingrese su salario mensual:");
    console.log("Salario mensual ingresado: " + salarioBase2);

    var diasTrabajados2 = prompt("Ingrese sus días trabajados:");
    console.log("Días trabajados ingresados: " + diasTrabajados2);

    var primaNormal2 = salarioBase2 * diasTrabajados2 / 360;

    var diasInjustificados = prompt("Ingrese sus días injustificados:");
    console.log("Días injustificados ingresados: " + diasInjustificados);

    var descuentoFaltas = 100000;
    var descuentoPrimaFaltas = primaNormal2 - descuentoFaltas;

    if (diasInjustificados > 5 && diasTrabajados2 <= 180) {
        console.log("Esta es su prima según faltas injustificadas: " + descuentoPrimaFaltas);
    } else if (diasInjustificados < 5) {
        console.log("Esta es su prima normal: " + primaNormal2);
    } else {
        console.log("El número de días ingresados es inválido.");
    }

    menu();
}

function menu() {
    var opcion = prompt("Ingrese una opción: \n1. Prima según días no laborados\n2. Prima según faltas injustificadas");
    console.log("Opción seleccionada: " + opcion);

    opcion = opcion.trim();  // Asegura que no haya espacios en blanco

    switch (opcion) {
        case '1':
            primaSegunDiasNoLaboradas();
            break;
        case '2':
            primaSegunFaltasInjustificadas();
            break;
        default:
            console.log("Opción inválida. Por favor, ingrese 1 o 2.");
            menu();
            break;
    }
}

menu();
