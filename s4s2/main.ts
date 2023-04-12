type Estudiante = {
    nombre: string;
    notas: number[];
};

type Curso = {
    estudiantes: Estudiante[];
}