const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32, 99];
  
  // for(let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
  // }
  
  // forEach
  
  // companies.forEach(function(company) {
  //   console.log(company.name);
  // });
  
  // filter
  
  // Get 21 and older
  
  // let canDrink = [];
  // for(let i = 0; i < ages.length; i++) {
  //   if(ages[i] >= 21) {
  //     canDrink.push(ages[i]);
  //   }
  // }
  
  // const canDrink = ages.filter(function(age) {
  //   if(age >= 21) {
  //     return true;
  //   }
  // });
  
  //const canDrink = ages.filter(age => age >= 21);
  
  // Filter retail companies
  
  // const retailCompanies = companies.filter(function(company) {
  //   if(company.category === 'Retail') {
  //     return true;
  //   }
  // });
  
  //const retailCompanies = companies.filter(company => company.category === 'Retail');
  
  // Get 80s companies
  
  //const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  
  // Get companies that lasted 10 years or more
  
  //const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  
  // map
  
  // Create array of company names
  // const companyNames = companies.map(function(company) {
  //   return company.name;
  // });
  
  // const testMap = companies.map(function(company) {
  //   return `${company.name} [${company.start} - ${company.end}]`;
  // });
  
  // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  
  // const ageMap = ages
  //   .map(age => Math.sqrt(age))
  //   .map(age => age * 2);
  
  
  
  // sort
  
  // Sort companies by start year
  
  // const sortedCompanies  = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  
  // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  
  // Sort ages
  // const sortAges = ages.sort((a, b) => a - b);
  
  // console.log(sortAges);
  
  
  // reduce
  
  // let ageSum = 0;
  // for(let i = 0; i < ages.length; i++) {
  //   ageSum += ages[i];
  // }
  
  // const ageSum = ages.reduce(function(total, age) {
  //   return total + age;
  // }, 0);
  
  // const ageSum = ages.reduce((total, age) => total + age, 0);
  
  // Get total years for all companies
  
  // const totalYears = companies.reduce(function(total, company) {
  //   return total + (company.end - company.start);
  // }, 0);
  
  //const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  
  // Combine Methods
  /*
  const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
  
  console.log(combined);
  */
//***************** My Codes ****************/
/*
companies.forEach(function(company) {
  console.log(company.name);
})

const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);
*/
const retailComps = companies.filter(obj => obj.category === "Retail").map(obj => obj.name);
console.log(retailComps);

const eightiesComps = companies.filter(obj => (obj.start >= 1980 && obj.start <= 1989)).map(obj => obj.category === "Retail");
console.log(eightiesComps);

const compYears = companies.map(function(company) {
  return `${company.name} : [${company.start} - ${company.end}]`;
})
//or
const compYears2 = companies.map(company => `${company.name} : [${company.start} - ${company.end}]`);
console.log(compYears2);

const sortedCompanies = companies.sort(function(c1,c2) {
  if(c1.start > c2.star) {
    return 1;
  } else {
    return -1;
  }
})

const sortedCompanies2 = companies.sort((c1,c2) => (c1.start > c2.star)? 1 : -1);
console.log(sortedCompanies2);

const ageTotals = ages.reduce((total, age) => total + age, 0);
console.log(ageTotals);

const yearTotal = companies.reduce((total , company) => total + (company.end - company.start), 0 );
console.log(yearTotal);

const findComp = companies.find(company => company.category === 'Finance');// Returns only one thing and the first element with the category of 'Finance' when found. In this ex it returns only first object.
console.log(findComp.name);

const someComp = companies.some(company => company.end > 2004);//Returns true or false. If condition is ensured by even one of the element in array, it returns true. In this ex if one of the companies ended after 2004 it returns true.
console.log(someComp);

const everyComp = companies.every(company => company.start > 1980);//Returns true or false. If condition is ensured by all of the elements it returns true. In this ex if all of the companies started after 1980 it returns true.
console.log(everyComp);

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
  
console.log(combined);