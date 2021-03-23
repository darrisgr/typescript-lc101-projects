import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass = function(items: Payload[]): number {
        let sum: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }

        return sum;

    }

    currentMassKg = function(): number {
        // let astroMass: number = this.sumMass(this.astronauts);
        // let cargoMass: number = this.sumMass(this.cargoItems);

        // return astroMass + cargoMass;

        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);

    }

    canAdd = function(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo = function(cargo: Cargo): boolean {
        let goodToAdd: boolean = this.canAdd(cargo);
        if (goodToAdd) {
            this.cargoItems.push(cargo);
            return true;
        } else { 
            return false; 
        }
    }

    addAstronaut = function(astronaut: Astronaut): boolean {
        let goodToAdd: boolean = this.canAdd(astronaut);
        if (goodToAdd) {
            this.astronauts.push(astronaut);
            return true;
        } else { 
            return false; 
        }
    }

}