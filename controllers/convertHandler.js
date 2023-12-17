function ConvertHandler() {
  this.getNum = function (input) {
    let result;

    const regex = /^([0-9]+(?:\.[0-9]+)?)\s*([a-zA-Z]+)$/;
    const match = input.match(regex);

    if (match) {
      result = parseFloat(match[1]);
    }

    return result;
  };

  this.getUnit = function (input) {
    let result;

    const regex = /^([0-9]+(?:\.[0-9]+)?)\s*([a-zA-Z]+)$/;
    const match = input.match(regex);

    if (match) {
      result = match[2].toLowerCase();
    }
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    let conversionComp = {
      gal: "L",
      L: "gal",
      lbs: "Kg",
      Kg: "lbs",
      mi: "Km",
      Km: "mi",
    };

    result = conversionComp[initUnit];
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    let spellUnit = {
      gal: "gallons",
      L: "litres",
      lbs: "pounds",
      Kg: "kilograms",
      mi: "miles",
      Km: "kilometres",
    };

    result = spellUnit[unit];
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    let returnUnit = this.getReturnUnit(initUnit);

    if (returnUnit == "gal") {
      result = initNum*(1/galToL)
    }
    else if (returnUnit == "L") {
      result = initNum*(galToL)
    }
    else if (returnUnit == "lbs") {
      result = initNum*(1/lbsToKg)
    }
    else  if (returnUnit == "Kg") {
      result = initNum*(lbsToKg)
    }
    else if (returnUnit == "mi") {
      result = initNum*(1/miToKm)
    }
    else if (returnUnit == "Kms") {
      result = initNum*(miToKm)
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
