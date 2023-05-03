export class Experiencia {
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
