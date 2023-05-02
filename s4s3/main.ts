const pasajerosSource = "https://gist.githubusercontent.com/cfagudelo96/7555df07f46b3cfc31eefe477a0e80d7/raw/465045ee1b43e69bd4b8b444bfc4089fd852ff2e/pasajeros.json";
const vuelosSource = "https://gist.githubusercontent.com/cfagudelo96/7555df07f46b3cfc31eefe477a0e80d7/raw/465045ee1b43e69bd4b8b444bfc4089fd852ff2e/vuelos.json";

// Encontrar el vuelo con mayor numero de pasajeros

/*function obtenerJSON(fuente: string): Promise<any> {
    return fetch(fuente).then((response: Response) => {
        return response.json()
    })
}

async function obtenerJSONAsyncAwait(fuente: string): Promise<any> {
    const response = await fetch(fuente);
    return response.json()
}

function relacionarThen(): Promise<any> {
    return obtenerJSONAsyncAwait(vuelosSource).then((vuelos: any) => {
        obtenerJSONAsyncAwait(pasajerosSource).then((pasajeros: any) => {
            console.log("Vuelos then:", vuelos);
            console.log("Pasajeros then:", pasajeros);
        })
    })
}

function obtenerParalelo(): Promise<any> {
    const resultado = Promise.all([obtenerJSONAsyncAwait(vuelosSource), obtenerJSONAsyncAwait(pasajerosSource)])
    return resultado;
}

async function relacionar(): Promise<void> {
    // const vuelos = await obtenerJSONAsyncAwait(vuelosSource);
    // const pasajeros = await obtenerJSONAsyncAwait(pasajerosSource);
    // console.log("Vuelos:", vuelos);
    // console.log("Pasajeros:", pasajeros);
    // const primerVuelo = vuelos[0];
    // console.log("El vuelo con ID", primerVuelo.id, "tiene un total de ", contarPasajerosVuelo(primerVuelo, pasajeros));
    const vuelos = await obtenerVuelos();
    const pasajeros = await obtenerPasajeros();
    console.log({ vuelos, pasajeros });
    console.log({
        contarPasajerosVuelo: contarPasajerosVuelo(vuelos[0], pasajeros),
        contarPasajerosTipado: contarPasajerosTipado(vuelos[0], pasajeros),
    })
}

function contarPasajerosVuelo(vuelo: any, pasajeros: any): number {
    let c = 0;
    const vueloID = vuelo.id;
    for (let i = 0; i < pasajeros.length; i++) {
        if (vueloID == pasajeros[i].idVuelo) {
            c++;
        }
    }
    return c;
}

async function obtenerVueloConMayorNumeroDePasajeros(): Promise<Vuelo> {
    const vuelos = await obtenerVuelos();
    const pasajeros = await obtenerPasajeros();

    let vueloConMayorNumeroDePasajeros = vuelos[0];
    let mayorNumeroDePasajeros = contarPasajerosTipado(vuelos[0], pasajeros);

    for (let i = 1; i < vuelos.length; i++) {
        const numeroDePasajeros = contarPasajerosTipado(vuelos[i], pasajeros);
        if (numeroDePasajeros > mayorNumeroDePasajeros) {
            mayorNumeroDePasajeros = numeroDePasajeros;
            vueloConMayorNumeroDePasajeros = vuelos[i];
        }
    }

    return vueloConMayorNumeroDePasajeros;
}

obtenerVueloConMayorNumeroDePasajeros().then((vuelo: Vuelo) => {
    console.log("El vuelo con mayor numero de pasajeros es: ", vuelo);
})

function contarPasajerosTipado(vuelo: Vuelo, pasajeros: Pasajero[]): number {
    return pasajeros.reduce((contador: number, pasajero: Pasajero) => {
        if (pasajero.idVuelo == vuelo.id) {
            return contador + 1;
        } else {
            return contador;
        }
    }, 0);
}
*/

type Pasajero = {
    id: number,
    idVuelo: number,
    nombre: string,
    apellido: string,
};

type Vuelo = {
    id: number,
    aeropuertoSalida: string,
    aeropuertoLlegada: string,
    fechaSalida: string,
    aerolinea: string,
};

async function obtenerVuelos(): Promise<Vuelo[]> {
    const response = await fetch(vuelosSource);
    const responseJSON = await response.json();
    return responseJSON.map((v: any): Vuelo => {
        return {
            id: v.id,
            aerolinea: v.airline,
            aeropuertoLlegada: v.arrival_airport,
            aeropuertoSalida: v.departure_airport,
            fechaSalida: v.departure_date,
        }
    });
}

async function obtenerPasajeros(): Promise<Pasajero[]> {
    const response = await fetch(pasajerosSource);
    const responseJSON = await response.json();
    return responseJSON.map((v: any): Pasajero => {
        return {
            id: v.id,
            idVuelo: v.flight_id,
            nombre: v.first_name,
            apellido: v.last_name,
        };
    });
}

type MapaPasajeros = {
    [key: number]: Pasajero[]
};

function obtenerMapaVuelosPasajeros(vuelos: Vuelo[], pasajeros: Pasajero[]): MapaPasajeros {
    const mapaPasajeros: MapaPasajeros = {};
    for (let i = 0; i < vuelos.length; i++) {
        const vuelo = vuelos[i];
        mapaPasajeros[vuelo.id] = [];
    }
    for (let i = 0; i < pasajeros.length; i++) {
        const pasajero = pasajeros[i];
        mapaPasajeros[pasajero.idVuelo].push(pasajero);
    }
    console.log({mapaPasajeros});
    return mapaPasajeros;
}

async function encontrarVueloMasPasajeros(): Promise<void> {
    const vuelos = await obtenerVuelos();
    const pasajeros = await obtenerPasajeros();
    const tuplaPrimerVuelo = tuplaVueloPasajeros(vuelos[0], pasajeros);
    console.log(tuplaPrimerVuelo);
    tuplaPrimerVuelo.forEach((element: Vuelo | Pasajero) => {
        console.log((element as Vuelo).fechaSalida);
    });

    // const mapa = obtenerMapaVuelosPasajeros(vuelos, pasajeros);
    // let vueloMasPasajeros: Vuelo | null = null;
    // let c: number = -1;
    // for(let i = 0; i < vuelos.length; i++) {
    //     const vuelo = vuelos[i];
    //     const pasajerosVuelo = mapa[vuelo.id];
    //     if (pasajerosVuelo.length > c) {
    //         vueloMasPasajeros = vuelo;
    //         c = pasajerosVuelo.length;
    //     }
    // }
    // console.log("El vuelo con mayor cantidad de pasajeros es ", vueloMasPasajeros, " con ", c, " pasajeros");

}

encontrarVueloMasPasajeros();

// relacionarThen().then(() => console.log("done"));
// obtenerParalelo().then((x: any) => console.log(x));

// Encontrar el vuelo con mayor número de pasajeros
// Encontrar el vuelo con menor número de pasajeros

type Punto = [number, number];

let punto: Punto = [5, 2];

type VueloPasajeros = [Vuelo, ...Pasajero[]];

type VueloPasajerosObj = {
    vuelo: Vuelo,
    pasajerosVuelo: Pasajero[],
}

function tuplaVueloPasajeros(vuelo: Vuelo, pasajeros: Pasajero[]): VueloPasajeros {
    const pasajerosVuelo = pasajeros.filter((pasajero: Pasajero) => pasajero.idVuelo === vuelo.id);
    return [vuelo, ...pasajerosVuelo];
}



class MiCarro {
    
}