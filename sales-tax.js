var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  var companySalesData = {}
  for (var i = 0; i < salesData.length; i++) {

      var totalSales = 0
      var salesArray = salesData[i]["sales"]

    for (var x = 0; x < salesArray.length; x++) {
      totalSales += salesArray[x]
    }
    if (!companySalesData[salesData[i]["name"]]) {
      companySalesData[salesData[i]["name"]] = {
        totalSales: 0,
        totalTaxes: 0}
    }
    companySalesData[salesData[i]["name"]]["totalSales"]+=totalSales

    var totalTaxes = taxRates[salesData[i]["province"]]*totalSales
    companySalesData[salesData[i]["name"]]["totalTaxes"]+=totalTaxes

}
  return companySalesData
}

console.log(calculateSalesTax(companySalesData, salesTaxRates))