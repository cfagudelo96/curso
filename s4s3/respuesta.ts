// async function obtenerVuelos(): Promise<Vuelo[]> {
//     const response = await fetch(vuelosSource);
//     const responseJSON = await response.json();
//     return responseJSON.map((v: any): Vuelo => {
//         return {
//             id: v.id,
//             aerolinea: v.airline,
//             aeropuertoLlegada: v.arrival_airport,
//             aeropuertoSalida: v.departure_airport,
//             fechaSalida: v.departure_date,
//         }
//     });
// }

// async function obtenerPasajeros(): Promise<Pasajero[]> {
//     const response = await fetch(pasajerosSource);
//     const responseJSON = await response.json();
//     return responseJSON.map((v: any): Pasajero => {
//         return {
//             id: v.id,
//             idVuelo: v.flight_id,
//             nombre: v.first_name,
//             apellido: v.last_name,
//         };
//     });
// }

// type MapaPasajeros = {
//     [key: number]: Pasajero[]
// };

// function obtenerMapaVuelosPasajeros(vuelos: Vuelo[], pasajeros: Pasajero[]): MapaPasajeros {
//     const mapaPasajeros: MapaPasajeros = {};
//     for (let i = 0; i < vuelos.length; i++) {
//         const vuelo = vuelos[i];
//         mapaPasajeros[vuelo.id] = [];
//     }
//     for (let i = 0; i < pasajeros.length; i++) {
//         const pasajero = pasajeros[i];
//         mapaPasajeros[pasajero.idVuelo].push(pasajero);
//     }
//     return mapaPasajeros;
// }

// async function encontrarVueloMasPasajeros(): Promise<void> {
//     const vuelos = await obtenerVuelos();
//     const pasajeros = await obtenerPasajeros();
//     const mapa = obtenerMapaVuelosPasajeros(vuelos, pasajeros);
//     let vueloMasPasajeros: Vuelo | null = null;
//     let c: number = -1;
//     for(let i = 0; i < vuelos.length; i++) {
//         const vuelo = vuelos[i];
//         const pasajerosVuelo = mapa[vuelo.id];
//         if (pasajerosVuelo.length > c) {
//             vueloMasPasajeros = vuelo;
//             c = pasajerosVuelo.length;
//         }
//     }
//     console.log("El vuelo con mayor cantidad de pasajeros es ", vueloMasPasajeros, " con ", c, " pasajeros");
// }
