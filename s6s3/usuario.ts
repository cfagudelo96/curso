import { Experiencia } from "./experiencia.js";

export class Usuario {
    nombre: string;
    private email: string;
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

    getEmail(): string {
        return this.email;
    }

    setEmail(nuevoEmail: string, enviarBienvenida = false) {
        if (!nuevoEmail.endsWith("@uniandes.edu.co")) {
            throw new Error("Solo puede asignar un correo Uniandes");
        }
        this.email = nuevoEmail;
    }
}
