var taxRates = {
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
// console.log(companySalesData[0]);
// console.log(companySalesData.length);
// console.log(taxRates.AB);


function calculateSalesTax(sales, taxRates) {                                              //sales gets data from companySalesData
var obj = {}                                                                               //putting it inside foreach function will replace data inside every iteration
  sales.forEach(function(company) {                                                        //for each element in sales ^, runs function through it
    // console.log(company.name);                                                          //changes company refers to sales referring to companySalesData and uses .name to acquire specific data
    var totalSales = company.sales.reduce(function (previousValue, currentValue) {
          return previousValue+currentValue;
        })

    // console.log(taxRates[company.province]);

    if (!obj.hasOwnProperty(company.name)) {                                                //checks if company name exists in obj
      obj[company.name] = {                                                                 //if not, create

        Sales: totalSales,
        SalesTax: totalSales*taxRates[company.province]
    }

  } else {
    obj[company.name].Sales += totalSales;
    obj[company.name].SalesTax += (totalSales*taxRates[company.province])
  }

  })
  return obj;

}
console.log(calculateSalesTax(companySalesData, taxRates));                       //puts companySalesData into calculateSalesTax function

// var results = calculateSalesTax(salesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/