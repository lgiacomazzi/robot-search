const readline = require("readline-sync");

function robot(content) {
  const linkedinUrl = "site: linkedin.com/company";
  content.searchIndustry = askAndReturnIndustry();
  content.searchLocation = askAndReturnLocation();
  content.searchSize = askAndReturnCompanySize();

  function askAndReturnIndustry() {
    const industryPrefixes = [
      "Airlines/Aviation",
      "Automotive",
      "Aviation & Aerospace",
      "Business Supplies and Equipment",
      "Chemicals",
      "Consumer Electronics",
      "Consumer Goods",
      "Electrical/Electronic Manufacturing",
      "Food Production",
      "Furniture",
      "Glass, Ceramics & Concrete",
      "Industrial Automation",
      "Machinery",
      "Mechanical or Industrial Engineering",
      "Mining & Metals",
      "Nanotechnology",
      "Oil & Energy",
      "Packaging and Containers",
      "Paper & Forest Products",
      "Plastics",
      "Railroad Manufacture",
      "Renewables & Environment",
      "Retail",
      "Shipbuilding",
      "Textiles",
      "Utilities",
      "Wine and Spirits"
    ];
    const selectedIndustryIndex = readline.keyInSelect(
      industryPrefixes,
      "Choose the search industry: "
    );
    const selectedIndustry = industryPrefixes[selectedIndustryIndex];

    return selectedIndustry;
  }

  function askAndReturnLocation() {
    const locationPrefixes = [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO"
    ];
    const selectedLocationIndex = readline.keyInSelect(
      locationPrefixes,
      "Choose the search location: "
    );
    const selectedLocation = locationPrefixes[selectedLocationIndex];

    return selectedLocation;
  }

  function askAndReturnCompanySize() {
    const sizesPrefixes = [
      "2-10 employees",
      "11-50 employees",
      "51-200 employees",
      "201-500 employees",
      "501-1000 employees",
      "1001-5000 employees",
      "5001-10,000 employees",
      "10,001+ employees"
    ];
    const selectedSizeIndex = readline.keyInSelect(
      sizesPrefixes,
      "Choose company size: "
    );
    const selectedSize = sizesPrefixes[selectedSizeIndex];

    return selectedSize;
  }

  content.searchTerm = `${linkedinUrl} + "${content.searchIndustry}" + "${
    content.searchLocation
  }" + "${content.searchSize}"`;

  console.log(content.searchTerm);
}

module.exports = robot;
