export interface AgentRecord {
  npn: string;
  name: string;
  domicile: string;
  licensedStates: number;
  ahip: string;
  appointments: number;
  status: "ACTIVE" | "PROBATION" | "WITHDRAWN";
}

export const agents: AgentRecord[] = [
  {
    npn: "10000123",
    name: "M. Ainsworth",
    domicile: "TX",
    licensedStates: 22,
    ahip: "MMXXVI · CURRENT",
    appointments: 14,
    status: "ACTIVE",
  },
  {
    npn: "10000451",
    name: "C. Beckwith",
    domicile: "TX",
    licensedStates: 18,
    ahip: "MMXXVI · CURRENT",
    appointments: 11,
    status: "ACTIVE",
  },
  {
    npn: "10000702",
    name: "R. Dunmore",
    domicile: "TN",
    licensedStates: 14,
    ahip: "MMXXVI · CURRENT",
    appointments: 9,
    status: "ACTIVE",
  },
  {
    npn: "10000919",
    name: "J. Fairchild",
    domicile: "FL",
    licensedStates: 9,
    ahip: "MMXXVI · CURRENT",
    appointments: 6,
    status: "ACTIVE",
  },
  {
    npn: "10001188",
    name: "S. Holloway",
    domicile: "GA",
    licensedStates: 31,
    ahip: "MMXXVI · CURRENT",
    appointments: 17,
    status: "ACTIVE",
  },
  {
    npn: "10001423",
    name: "P. Lindquist",
    domicile: "OH",
    licensedStates: 7,
    ahip: "PRIOR · CYCLE",
    appointments: 4,
    status: "PROBATION",
  },
  {
    npn: "10001688",
    name: "T. Marwood",
    domicile: "TX",
    licensedStates: 26,
    ahip: "MMXXVI · CURRENT",
    appointments: 13,
    status: "ACTIVE",
  },
  {
    npn: "10001927",
    name: "E. Pendleton",
    domicile: "AZ",
    licensedStates: 12,
    ahip: "MMXXVI · CURRENT",
    appointments: 8,
    status: "ACTIVE",
  },
  {
    npn: "10002214",
    name: "K. Sterling",
    domicile: "VA",
    licensedStates: 19,
    ahip: "MMXXVI · CURRENT",
    appointments: 12,
    status: "ACTIVE",
  },
  {
    npn: "10002499",
    name: "A. Whitcombe",
    domicile: "NC",
    licensedStates: 5,
    ahip: "WITHDRAWN",
    appointments: 0,
    status: "WITHDRAWN",
  },
];

export const carrierLines = [
  { code: "MA · PD", label: "Medicare Advantage / Part D", count: 14 },
  { code: "PDP", label: "Medicare Part D — Standalone", count: 9 },
  { code: "MEDSUP", label: "Medicare Supplement (Medigap)", count: 11 },
  { code: "QHP", label: "ACA Qualified Health Plans", count: 18 },
  { code: "DEN · VIS", label: "Dental & Vision Ancillary", count: 6 },
];
