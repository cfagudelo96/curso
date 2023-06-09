// Quiero saber el promedio del estudiante
// Si esta perdiendo la materia
// Quiero poder agregar notas
// Quiero saber el nombre
// Quiero enviar un correo de "Pongase las pilas"

// EnviarMensaje(texto: string)
// Interfaz: Contrato, yo digo que voy a tener algo que provee cierto contrato
// Interface
// EnviadorMensajes

// - EnviadorSMS
// - EnviadorEmail
// - EnviadorLlamadaAutomatica

// Polimorfismo

// EnviadorMensajes.EnviarMensaje("")

// function enviarMensaje(enviador: EnviadorMensajes, mensaje: string) {...}

class Estudiante {
    private nombre: string;
    private apellido: string;
    private notas: number[];
    private email: string;
    private promedio: number;

    constructor(nombre: string, apellido: string, email: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.notas = [];
        this.promedio = 0;
    }

    // setter y getter. Son metodos que estan definidos en relacion a un atributo
    // - setter: recibe por parametro el nuevo valor del atributo, pone el nuevo valor. En general son void
    // - getter: no reciben parametro, retorna el valor actual del atributo.

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    getNombreFormal(): string {
        return `${this.apellido}, ${this.nombre}`;
    }

    obtenerPromedio(): number {
        return this.promedio;
    }

    agregarNota(nota: number): void {
        this.notas.push(nota);
        this.promedio = this.calcularPromedio();
        if (this.promedio < 3) {
            this.enviarCorreoAdvertencia()
        }
    }

    private calcularPromedio(): number {
        if (this.notas.length === 0) {
            return 0;
        }
        const sumaNotas = this.notas.reduce((acumulado, nota) => acumulado + nota, 0);
        return sumaNotas / this.notas.length;
    }

    private enviarCorreoAdvertencia(): void {
        console.log(`Hola ${this.nombre} (${this.email}), queremos advertirte que estas en riesgo de perder la materia. Tu promedio actual es ${this.obtenerPromedio()}`)
    }
}

class Curso {
    private nombre: string;

    private estudiantes: Estudiante[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.estudiantes = [];
    }

    agregarEstudiante(nuevoEstudiante: Estudiante) {
        this.estudiantes.push(nuevoEstudiante);
    }

    colocarNota(nota: number) {
        for (let i = 0; i < this.estudiantes.length; i++) {
            this.estudiantes[i].agregarNota(nota);
        }
    }
}

const estudiante1 = new Estudiante("Carlos", "Agudelo", "cf.agudelo12@uniandes.edu.co")
const curso = new Curso("Habilidades intermedias de programación")
estudiante1.getNombreCompleto();
estudiante1.getNombreFormal();
// curso.agregarEstudiante(new Estudiante("Manuel Gonzalez", "mgonzalez@uniandes.edu.co"))
// curso.agregarEstudiante(new Estudiante("Alejandra Leon", "aleon@uniandes.edu.co"))
// curso.agregarEstudiante(new Estudiante("Laura Chica", "lachica10@uniandes.edu.co"))
curso.colocarNota(5);
curso.colocarNota(1);
curso.colocarNota(1);
curso.colocarNota(1);
console.log(curso);
