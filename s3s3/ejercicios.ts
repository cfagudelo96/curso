/*type Estudiante = {
    nombre: string;
    notas: number[];
};

type Curso = {
    estudiantes: Estudiante[];
}

const estudiantes: Estudiante[] = [
    { nombre: "Kim Deverell", notas: [] },
    { nombre: "Kelsy Burrill", notas: [] },
    { nombre: "Hally Noble", notas: [] },
    { nombre: "Vittoria Corns", notas: [] },
    { nombre: "Ira Streatfield", notas: [] },
    { nombre: "Junia Minnette", notas: [] },
    { nombre: "Adamo Jurasek", notas: [] },
    { nombre: "Garrick Dampney", notas: [] },
    { nombre: "Leroi Tinker", notas: [] },
    { nombre: "Cassandre Turley", notas: [] },
]

const NUMERO_NOTAS = 5;

for(let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    for(let j = 0; j < NUMERO_NOTAS; j++) {
        const nota = +(Math.random() * 5).toFixed(2)
        estudiante.notas.push(nota)
    }
}

console.log(estudiantes);
*/

/**
 * Quiero aplicar para todas las notas de un estudiante, un bono de 0.5.
 *  Tenga cuidado de no hacer que ningun estudiante saque más de 5 en cualquier nota.
 * Quiero aplicar para todos los estudiantes de un curso, un bono de 10% sobre cada nota que sacaron.
 *      Por ejemplo, si un estudiante tiene las notas [1, 2, 3, 4, 5],
 *      después de aplicar el bono, tendría las notas [1.1, 2.2, 3.3, 4.4, 5].
 *      Tenga cuidado de no hacer que ningun estudiante saque más de 5 en cualquier nota.
 * Quiero obtener una lista solo con los nombres de los estudiantes.
 * Quiero obtener una lista con los estudiantes que no han perdido ninguna nota, es decir, que no han sacado menos de 3.0
 *      en cualquiera de sus notas.
 * Quiero saber el promedio de un estudiante.
 * Quiero organizar las notas de un estudiante de mayor a menor.
 * Quiero organizar las notas de un estudiante de menor a mayor.
 * Quiero encontrar el primer estudiante cuyo nombre empiece por la letra V.
 *      Como puedo hacer que sirva para cualquier letra?
 */
