// Quiero tener mi software para poder aplicar a trabajos de una empresa

// Como usuario que busca empleo, quiero poder crear mi perfil en la aplicacion

// Quiero que en mi perfil se vea mi informacion de contacto:
// Nombre
// Correo electronico
// Numero de telefono

// Quiero tambien que en mi perfil este presente la informacion de mi experiencia profesional.
// Me interesa que los reclutadores sean capaces de ver, de cada trabajo que he tenido, el nombre del cargo que ocupé,
//  la empresa en la que trabajé, de que fecha a que fecha trabajé, y una descripción de mi rol en la empresa.

// Atributo/Metodo estatico
// static

class Usuario {
    nombre: string;
    email: string;
    telefono: string;
    edad?: number;
    experiencias: Experiencia[];

    constructor(nombre: string, email: string, telefono: string, experiencia: Experiencia, edad?: number) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.edad = edad;
        this.experiencias = [experiencia];
    }

    agregarExperiencia(e: Experiencia): void {
        this.experiencias.push(e);
    }
}

class Experiencia {
    cargo: string;
    empresa: string;
    fechaInicial: Date;
    fechaFinal?: Date;
    descripcion: string;

    constructor(cargo: string, empresa: string, descripcion: string, fechaInicial: Date, fechaFinal?: Date) {
        this.cargo = cargo;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
    }

    esTrabajoActual(): boolean {
        return this.fechaFinal === undefined;
    }

    empezoDespuesDe(fecha: Date): boolean {
        return fecha.getTime() < this.fechaInicial.getTime()
    }
}

const rappi = new Experiencia("Tech Lead", "Rappi", "Coordinar equipo", new Date("6/01/2020"), new Date("5/21/2022"))
const atomicVest = new Experiencia("Software developer", "Atomic Invest", "Develop software", new Date("5/21/2022"))
const usuario = new Usuario("Carlos Agudelo", "cf.agudelo12@uniandes.edu.co", "123456789", rappi);
usuario.agregarExperiencia(atomicVest);
console.log(usuario);
console.log({atomic: atomicVest.esTrabajoActual(), rappi: rappi.esTrabajoActual()});
const fechaPrueba = new Date("4/01/2022");
console.log({
    atomic: atomicVest.empezoDespuesDe(fechaPrueba),
    rappi: rappi.empezoDespuesDe(fechaPrueba),
});


// Como empresa que busca trabajadores, quiero poder publicar una nueva oportunidad de empleo
// De una oportunidad de empleo, me interesa proporcionar la siguiente información:
// - Nombre del cargo
// - Descripción del cargo
// - Rango salarial
// - Ubicación del cargo

// Algunas preguntas que pueden surgir sobre un perfil son:
// Cual fue la experiencia de trabajo mas larga
// Cual fue la experiencia de trabajo mas corta
// Cual es el/los trabajos actuales

