interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

interface Together {
    summary(): string;
}


const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name ${this.name}`;
    }
};

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};


const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());

};

const printAll = (vehicle: Together): void => {
    console.log(vehicle.summary());
};





printVehicle(oldCivic);

printAll(oldCivic);
printAll(drink);