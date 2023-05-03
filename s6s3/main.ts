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

import { Experiencia } from "./experiencia.js";
import { Usuario } from "./usuario.js";

// Objeto:
// Tiene las propiedades de la clase con un valor
// Tiene los metodos, yo puedo llamar los metodos sobre el objeto
// Puedo tener cualquier cantidad de objetos de la clase
// Variable de tipo "Clase"
const rappi = new Experiencia("Tech Lead", "Rappi", "Coordinar equipo", new Date("6/01/2020"), new Date("5/21/2022"))

const atomicVest = new Experiencia("Software developer", "Atomic Invest", "Develop software", new Date("5/21/2022"))
const usuario = new Usuario("Carlos Agudelo", "cf.agudelo12@uniandes.edu.co", "123456789", rappi);

console.log(JSON.stringify(usuario));
usuario.agregarExperiencia(atomicVest);
console.log(JSON.stringify(usuario));
usuario.setEmail("cf.agudelo123123@uniandes.edu.co")
console.log(JSON.stringify(usuario));
// console.log({atomic: atomicVest.esTrabajoActual(), rappi: rappi.esTrabajoActual()});
// const fechaPrueba = new Date("4/01/2022");
// console.log({
//     atomic: atomicVest.empezoDespuesDe(fechaPrueba),
//     rappi: rappi.empezoDespuesDe(fechaPrueba),
// });

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

