type Estudiante = {
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
