function ElectricalDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}

ElectricalDevise.prototype.plugIn = function() {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
};

ElectricalDevise.prototype.unplug = function() {
  console.log(this.name + " is unplugged!");
  this.isPlugged = false;
};

function Luminaire(name, brand, power, bulbType) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.bulbType = bulbType;
  this.isPlugged = true;
}

this.isPlugged = false;
Luminaire.prototype = new ElectricalDevise();

function PersonalComputer(name, brand, power, type, functionality) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.type = type;
  this.functionality = functionality;
  this.isPlugged = false;
}

PersonalComputer.prototype = new ElectricalDevise();

const tableLuminaire = new Luminaire("Table Luminaire", "Xiaomi", 5, "LED");

const homePC = new PersonalComputer("Table PC", "Intel", 120, "stationary", "for work");

tableLuminaire.unplug();

homePC.plugIn();

console.log(homePC)
console.log(tableLuminaire)