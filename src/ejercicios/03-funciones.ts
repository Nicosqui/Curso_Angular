/*
    ===== Código de TypeScript =====
*/

import { createLogicalAnd } from "typescript";

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar(numero: number, otronumero?: number, base: number = 10): number {
    return numero * base;
}

/* 
const resultado = multiplicar(5,15);

console.log(resultado);
*/

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curarX: number ): void {

    personaje.pv = personaje.pv + curarX;

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida:',this.pv)
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();