var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name " + this.name;
    }
};
var drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
var printAll = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
printAll(oldCivic);
printAll(drink);
