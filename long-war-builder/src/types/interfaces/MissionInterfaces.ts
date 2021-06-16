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

export type { UfoInterface, MissionTypeInterface, BulkMissionTypesInterface, MonthlyMissionsInterface };
