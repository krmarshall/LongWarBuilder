import { AdjacencyEnum } from '../enums/FacilityEnums';

interface FacilityInterface {
  img: string;
  powerConsumed?: number;
  powerGenerated?: number;
  adjacency?: AdjacencyEnum;
  researchBonus?: number;
  workshopBonus?: number;
  satellitesBonus?: number;
}

export type { FacilityInterface };
