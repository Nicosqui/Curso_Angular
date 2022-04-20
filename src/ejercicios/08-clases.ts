/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    
    constructor( 
        public nombre: string,
        public direccion: string 
    ) {} 
}


class Heroe extends PersonaNormal {
    //alterEgo: string; 
    //edad: number;
    //nombreReal: number;

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA' );
    }
}


const iroman = new Heroe('Iroman', 45, 'Tony');

console.log(iroman);