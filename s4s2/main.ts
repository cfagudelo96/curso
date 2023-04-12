const estudiantesSource = "https://gist.githubusercontent.com/cfagudelo96/eba915356d1e5f22a413bece2aa36c96/raw/ea9b2a604ba8c8025e03a4ca08b912416820e163/estudiantes.json"

const NUMERO_NOTAS = 6;

type Estudiante = {
    nombre: string;
    notas: number[];
};

type Curso = {
    estudiantes: Estudiante[];
}

function obtenerCursoPromesas(): Promise<Curso> {
    const promesaResponse: Promise<Response> = fetch(estudiantesSource);
    const promesaJSON: Promise<any> = promesaResponse.then((response: Response) => {
        console.log("Obtuve respuesta del servidor", response);
        return response.json();
    })
    const promesaEstudiantes: Promise<Estudiante[]> = promesaJSON.then((json: any) => {
        console.log("Obtuve el cuerpo de la respuesta como JSON", json);
        const promesasEstudiantes: Promise<Estudiante>[] = json.map(obtenerEstudiantePromesas);
        return Promise.all(promesasEstudiantes);
    })
    const promesaCurso: Promise<Curso> = promesaEstudiantes.then((estudiantes: Estudiante[]): Curso => {
        console.log("Obtuve la lista de estudiantes", estudiantes);
        return {estudiantes: estudiantes};
    })
    return promesaCurso;
}

function obtenerEstudiantePromesas(valorCrudo: any): Promise<Estudiante> {
    console.log("Mapeando a estudiante", valorCrudo);
    const promesaNotas: Promise<number[]> = obtenerNotasEstudiante(valorCrudo.id);
    const promesaEstudiante: Promise<Estudiante> = promesaNotas.then((notas: number[]) => {
        console.log("Obtuve notas para estudiante con ID ", valorCrudo.id)
        const estudiante: Estudiante = {
            nombre: `${valorCrudo.first_name} ${valorCrudo.last_name}`,
            notas: notas,
        }
        return estudiante;
    });
    return promesaEstudiante
}

function obtenerNotasEstudiante(idEstudiante: number): Promise<number[]> {
    const notas: number[] = [];
    for(let i = 0; i < NUMERO_NOTAS; i++) {
        const nota = +(Math.random() * 5).toFixed(2);
        notas.push(nota);
    }
    return new Promise((resolve) => {
        setTimeout(resolve, Math.random()*100, notas);
    })
}

// obtenerCursoPromesas().then(curso => console.log("Finalmente obtuve el curso: ", curso));

function obtenerCursoPromesasThen(): Promise<Curso> {
    return fetch(estudiantesSource)
        .then((response: Response): Promise<any> => response.json())
        .then((json: any): Promise<Estudiante[]> => {
            console.log("Obtuve el cuerpo de la respuesta como JSON", json);
            return Promise.all(json.map(obtenerEstudiantePromesas))
        })
        .then((estudiantes: Estudiante[]): Curso => {
            console.log("Obtuve la lista de estudiantes", estudiantes);
            return {estudiantes: estudiantes};
        });
}

// obtenerCursoPromesasThen().then(curso => console.log("Finalmente obtuve el curso con then: ", curso));

async function obtenerCurso(): Promise<Curso> {
    const response = await fetch(estudiantesSource);
    const json = await response.json();
    console.log("Obtuve el cuerpo de la respuesta como JSON", json);
    const estudiantes = await Promise.all(json.map(obtenerEstudiantePromesas));
    console.log("Obtuve la lista de estudiantes", estudiantes);
    return {estudiantes: estudiantes};
}

obtenerCurso().then(curso => console.log("Obtuve curso async/await", curso));
