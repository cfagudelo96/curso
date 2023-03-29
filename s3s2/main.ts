

























/**
 * SOLUCIONES
 */
/*
const HORA_MINIMA = 6
const HORA_MAXIMA = 22

type Curso = {
    nombre: string;
    cronograma: Cronograma;
};

// Tuplas son válidas también
type Cronograma = {
    lunes?: Horario,
    martes?: Horario,
    miercoles?: Horario,
    jueves?: Horario,
    viernes?: Horario,
}

type Horario = {
    horaInicio: number,
    horaFinalizacion: number,
}

function cronogramaTieneSentido(curso: Curso): boolean {
    let tieneSentido = true;
    if (curso.cronograma.lunes) {
        tieneSentido = tieneSentido && horarioTieneSentido(curso.cronograma.lunes)
    }
    if (curso.cronograma.martes) {
        tieneSentido = tieneSentido && horarioTieneSentido(curso.cronograma.martes)
    }
    if (curso.cronograma.miercoles) {
        tieneSentido = tieneSentido && horarioTieneSentido(curso.cronograma.miercoles)
    }
    if (curso.cronograma.jueves) {
        tieneSentido = tieneSentido && horarioTieneSentido(curso.cronograma.jueves)
    }
    if (curso.cronograma.viernes) {
        tieneSentido = tieneSentido && horarioTieneSentido(curso.cronograma.viernes)
    }
    return tieneSentido;
}

function horarioTieneSentido(horario: Horario): boolean {
    const horasEnLimite = horario.horaInicio >= HORA_MINIMA && horario.horaInicio <= HORA_MAXIMA &&
        horario.horaFinalizacion >= HORA_MINIMA && horario.horaFinalizacion <= HORA_MAXIMA;
    return horasEnLimite && horario.horaFinalizacion > horario.horaInicio;
}

function claseTodosLosDias(curso: Curso): boolean {
    return !!curso.cronograma.lunes &&
        !!curso.cronograma.martes &&
        !!curso.cronograma.miercoles &&
        !!curso.cronograma.jueves &&
        !!curso.cronograma.viernes;
}

function cronogramaTieneSentidoCorto(curso: Curso): boolean {
    const dias = Object.keys(curso.cronograma) as (keyof Cronograma)[]
    for (let i = 0; i < dias.length; i++) {
        const horario = curso.cronograma[dias[i]]
        if (horario && !horarioTieneSentido(horario)) {
            return false
        }
    }
    return true;
}
*/










/**
 * Quiero modelar un curso al que voy a asistir.
 * De un curso me interesa conocer lo siguiente:
 *  - Nombre
 *  - Cronograma:
 *      - Por cada día de la semana laboral me interesa saber la hora de inicio y la hora de finalización de la clase
 *      - Debo poder ser capaz de representar que cierto día de la semana puede no tener clases
 */

/**
 * Me interesa poder saber si un curso cumple las siguientes condiciones:
 *  - El curso tiene un cronograma que tiene sentido?
 *      - Un cronograma tiene sentido si las horas de inicio y finalización de todos los días están entre 6 y 22,
 *          y la hora de inicio es menor a la hora de finalización.
 *  - El curso tiene clase todos los días laborales?
 *  - El curso tiene en un día específico una duración mayor a una cantidad arbitraria de horas? (Para la casa)
 */
/*
const cursoProgramacion: Curso = {
    nombre: "Habilidades de programación intermedias",
    cronograma: {
        martes: { horaInicio: 18, horaFinalizacion: 20 },
        miercoles: { horaInicio: 18, horaFinalizacion: 20 },
        jueves: { horaInicio: 18, horaFinalizacion: 20 },
    },
};
const cursoIntensivoIngles: Curso = {
    nombre: "Inglés intensivo",
    cronograma: {
        lunes: { horaInicio: 15, horaFinalizacion: 12 },
        martes: { horaInicio: 18, horaFinalizacion: 20 },
        miercoles: { horaInicio: 18, horaFinalizacion: 20 },
        jueves: { horaInicio: 18, horaFinalizacion: 20 },
        viernes: { horaInicio: 15, horaFinalizacion: 16 },
    },
}
const cursos: Curso[] = [cursoProgramacion, cursoIntensivoIngles];
for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];
    console.log(`El curso ${curso.nombre}:`, { cronogramaTieneSentido: cronogramaTieneSentido(curso), claseTodosLosDias: claseTodosLosDias(curso) });
}
*/
/**
 * Quiero verificar si alguno de los cursos cumple con una de las condiciones.
 * Quiero verificar si todos los cursos cumplen con una condición cualquiera.
 * Quiero obtener una lista de los cursos que cumplen con la condición.
 */


















