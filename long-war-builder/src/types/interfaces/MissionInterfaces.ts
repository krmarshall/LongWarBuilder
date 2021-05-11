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
  Abduction: number;
  Terror?: number;
  Research?: number;
  Scout: number;
  Harvest?: number;
  Hunt?: number;
  Bomb?: number;
  Infiltrate?: number;
  Council: 1;
}

export type { UfoInterface, MissionTypeInterface, BulkMissionTypesInterface, MonthlyMissionsInterface };
