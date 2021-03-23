"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.sumMass = function (items) {
            var sum = 0;
            for (var i = 0; i < items.length; i++) {
                sum += items[i].massKg;
            }
            return sum;
        };
        this.currentMassKg = function () {
            // let astroMass: number = this.sumMass(this.astronauts);
            // let cargoMass: number = this.sumMass(this.cargoItems);
            // return astroMass + cargoMass;
            return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        };
        this.canAdd = function (item) {
            return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        };
        this.addCargo = function (cargo) {
            var goodToAdd = this.canAdd(cargo);
            if (goodToAdd) {
                this.cargoItems.push(cargo);
                return true;
            }
            else {
                return false;
            }
        };
        this.addAstronaut = function (astronaut) {
            var goodToAdd = this.canAdd(astronaut);
            if (goodToAdd) {
                this.astronauts.push(astronaut);
                return true;
            }
            else {
                return false;
            }
        };
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    return Rocket;
}());
exports.Rocket = Rocket;
