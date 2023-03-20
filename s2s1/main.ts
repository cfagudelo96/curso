function calcularHipotenusa(a: number, b: number): number {
    return a**2 + b**2;
}

function calcularIndiceMasaCorporal(peso: number, estatura: number): number {
    return peso / (estatura**2);
}

function calcularNivelDeRiesgo(imc: number, edad: number): "bajo" | "medio" | "alto" {
    if (imc < 22) {
        if (edad < 45) {
            return "bajo";
        } else {
            return "medio";
        }
    } else {
        if (edad < 45) {
            return "medio";
        } else {
            return "alto";
        }
    }
}

function sumaPrimerosNNaturales(n: number): number {
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += i;
    }
    return suma;
}

function inicializarListeners(): void {
    const formE1 = document.getElementById("e1");
    if (!formE1) {
        throw new Error("El form para el ejercicio 1 no fue encontrado");
    }
    formE1.addEventListener("submit", mostrarHipotenusa);
    const formE2 = document.getElementById("e2");
    if (!formE2) {
        throw new Error("El form para el ejercicio 2 no fue encontrado");
    }
    formE2.addEventListener("submit", mostrarRiesgo);
    const formE3 = document.getElementById("e3");
    if (!formE3) {
        throw new Error("El form para el ejercicio 3 no fue encontrado");
    }
    formE3.addEventListener("submit", mostrarSumaNaturales);
}

function mostrarHipotenusa(event: SubmitEvent): void {
    event.preventDefault();
    const cateto1 = +obtenerValorElemento("cateto1");
    const cateto2 = +obtenerValorElemento("cateto2");
    const hipotenusa = calcularHipotenusa(cateto1, cateto2);
    const resultado = document.getElementById("resultadoe1");
    resultado!.innerText = `${hipotenusa}`;
}

function mostrarRiesgo(event: SubmitEvent): void {
    event.preventDefault();
    const edad = +obtenerValorElemento("edad");
    const peso = +obtenerValorElemento("peso");
    const estatura = +obtenerValorElemento("estatura");
    const imc = calcularIndiceMasaCorporal(peso, estatura);
    const riesgo = calcularNivelDeRiesgo(imc, edad);
    const texto = `Tiene un IMC de ${imc}, lo que a su edad representa un riesgo de enfermedad coronario ${riesgo}`;
    const resultado = document.getElementById("resultadoe2");
    resultado!.innerText = texto;
}

function mostrarSumaNaturales(event: SubmitEvent): void {
    event.preventDefault();
    const n = +obtenerValorElemento("n");
    const suma = sumaPrimerosNNaturales(n);
    const texto = `La suma de los primeros ${n} numeros naturales es igual a ${suma}`;
    const resultado = document.getElementById("resultadoe3");
    resultado!.innerText = texto;
}

function obtenerValorElemento(id: string): string {
    const elemento = document.getElementById(id) as HTMLInputElement;
    if (!elemento) {
        throw new Error(`No se encontro el elemento con ID ${id}`)
    }
    return elemento.value;
}

window.onload = function() {
    inicializarListeners();
}
