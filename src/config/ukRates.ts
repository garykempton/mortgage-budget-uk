// UK financial rates and thresholds — update once per tax year (April)
// Last updated: 2025-26 tax year

export const TAX_YEAR = '2025-26'

// Stamp Duty Land Tax (England & Northern Ireland)
export const sdltBands = {
  standard: [
    { threshold: 125_000, rate: 0 },
    { threshold: 250_000, rate: 0.02 },
    { threshold: 925_000, rate: 0.05 },
    { threshold: 1_500_000, rate: 0.10 },
    { threshold: Infinity, rate: 0.12 },
  ],
  firstTimeBuyer: [
    { threshold: 300_000, rate: 0 },
    { threshold: 500_000, rate: 0.05 },
    // If over £500k, first-time buyer relief does not apply — use standard rates
  ],
  additionalProperty: 0.05, // surcharge on top of standard rates
}

// Default assumptions
export const defaults = {
  mortgageTermYears: 25,
  interestRate: 4.5,
  incomeMultiple: 4.5,
  propertyGrowthRate: 3,
  rentGrowthRate: 3,
  savingsInterestRate: 4,
  inflationRate: 2.5,
}
