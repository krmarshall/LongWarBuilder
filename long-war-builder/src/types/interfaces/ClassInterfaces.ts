import { ClassName, ClassImage, MecName, MecImage } from '../enums/ClassEnums';
import { PerkDescription, PerkImage, PerkName } from '../enums/PerkEnums';
import { RankImage, RankName } from '../enums/RankEnums';

interface AllStatsInterface {
  health: number;
  mobility: number;
  aim: number;
  will: number;
}

interface PerkInterface {
  perk: PerkName;
  imgPath: PerkImage;
  description: PerkDescription;
  mobility: number;
  aim: number;
  will: number;
}

interface RankStatsInterface {
  health: number;
  aim: number;
  will: number;
}

interface RankInterface {
  name: RankName;
  imgPath: RankImage;
  statProgression: RankStatsInterface;
  perkProgression: Array<PerkInterface>;
}

interface ClassInterface {
  class: ClassName | MecName;
  imgPath: ClassImage | MecImage;
  ranks: Array<RankInterface>;
}

export type { ClassInterface, RankInterface, PerkInterface, RankStatsInterface, AllStatsInterface };
