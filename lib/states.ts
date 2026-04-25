export interface JurisdictionState {
  code: string;
  name: string;
  licensed: boolean;
  hq?: boolean;
}

// 37 licensed states + Texas as HQ; remaining states are unlicensed (cream).
const licensedCodes = new Set<string>([
  "AL", "AR", "AZ", "CA", "CO", "FL", "GA", "IA", "ID", "IL",
  "IN", "KS", "KY", "LA", "MI", "MN", "MO", "MS", "MT", "NC",
  "NE", "NM", "NV", "OH", "OK", "OR", "PA", "SC", "SD", "TN",
  "TX", "UT", "VA", "WA", "WI", "WV", "WY",
]);

export const states: JurisdictionState[] = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"],
  ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["FL", "Florida"], ["GA", "Georgia"],
  ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"], ["MD", "Maryland"],
  ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"], ["MO", "Missouri"],
  ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"],
  ["NM", "New Mexico"], ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"],
  ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"], ["VT", "Vermont"],
  ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
  ["DC", "District of Columbia"],
].map(([code, name]) => ({
  code: code as string,
  name: name as string,
  licensed: licensedCodes.has(code as string),
  hq: (code as string) === "TX",
}));

export const licensedCount = states.filter((s) => s.licensed).length;
