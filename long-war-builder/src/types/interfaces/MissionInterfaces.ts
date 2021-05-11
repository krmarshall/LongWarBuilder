interface UfoInterface {
  name: string;
  resource0: number | null;
  resource1: number | null;
  resource2: number | null;
}

interface MissionTypeInterface {
  altitude: string;
  followUp: string | null;
  ufoPool: Array<UfoInterface>;
}

interface BulkMissionTypesInterface {
  [key: string]: MissionTypeInterface;
}

interface MonthlyMissionsInterface {
  abduction: number;
  terror?: number;
  research?: number;
  scout: number;
  harvest?: number;
  hunt?: number;
  bomb?: number;
  infiltrate?: number;
  council: number;
}

interface CalculatedInputsInterface {
  calculateToggle: boolean;
  resourceLevel: number;
  alienResources: number;
  threatLevel: number;
  prevMonthThreatLevel: number;
  splashedSmalls: number;
  splashedLarges: number;
}

interface MissionStateInterface {
  calculatedInputs: CalculatedInputsInterface;
  missions: MonthlyMissionsInterface;
  notes: string;
}

export type {
  UfoInterface,
  MissionTypeInterface,
  BulkMissionTypesInterface,
  MonthlyMissionsInterface,
  MissionStateInterface,
};
