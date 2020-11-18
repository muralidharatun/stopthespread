type Keys = "au" | "uk" | "us"

type Countries = {
  [key in Keys]: {
    displayName: string
    abbreviation: string
  }
}

export const countryDetails: Countries = {
  au: {
    displayName: "Australia",
    abbreviation: "au",
  },
  uk: {
    displayName: "United Kingdom",
    abbreviation: "uk",
  },
  us: {
    displayName: "United States",
    abbreviation: "us",
  },
}
