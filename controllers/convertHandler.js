function ConvertHandler() {
  this.getNum = function (input) {
    let result;

    const regex = /^([0-9]+(?:\.[0-9]+)?)\s*([a-zA-Z]+)$/;
    const match = input.match(regex);

    if (match) {
      const result = parseFloat(match[1]);
    }

    return result;
  };

  this.getUnit = function (input) {
    let result;

    const regex = /^([0-9]+(?:\.[0-9]+)?)\s*([a-zA-Z]+)$/;
    const match = input.match(regex);

    if (match) {
      const result = match[2].toLowerCase();
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let conversionComp = {
      gal: "L",
      L: "gal",
      lbs: "Kg",

      Kg: "lbs",
    };
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
