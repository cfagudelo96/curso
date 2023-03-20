/*
Extras:
    - Calcular la suma de los primeros n numeros pares
    - Calcular la lista de los primeros n numeros Fibonacci
    - Calcular la nota final de un estudiante dadas dos listas: Una con las notas, otra con los pesos de las notas
*/

function sumaPrimerosNPares(n: number): number {
    let suma = 0;
    for (let i = 0; i <= (n-1)*2; i+=2) {
        suma += i;
    }
    return suma;
}

function numerosFibonacci(n: number): number[] {
    if (n <= 0) {
        throw new Error(`n debe ser mayor que 0`)
    } else if (n === 1) {
        return [1]
    }
    const fibonaccis = [1, 1];
    for (let i = 1; i < n-1; i++) {
        const nuevo = fibonaccis[i-1]+fibonaccis[i];
        fibonaccis.push(nuevo);
    }
    return fibonaccis;
}
