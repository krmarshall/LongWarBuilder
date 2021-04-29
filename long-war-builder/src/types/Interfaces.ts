import { ClassName, ClassImage } from './enums/ClassEnums';
import { PerkDescription, PerkImage, PerkName } from './enums/PerkEnums';
import { RankImage, RankName } from './enums/RankEnums';

interface PerkInterface {
  perk: PerkName;
  imgPath: PerkImage;
  description: PerkDescription;
  mobility: number;
  aim: number;
  will: number;
}

interface StatProgressionInterface {
  health: number;
  aim: number;
  will: number;
}

interface RankInterface {
  name: RankName;
  imgPath: RankImage;
  statProgression: StatProgressionInterface;
  perkProgression: Array<PerkInterface>;
}

interface ClassInterface {
  class: ClassName;
  imgPath: ClassImage;
  ranks: Array<RankInterface>;
}

export type { ClassInterface, RankInterface, PerkInterface, StatProgressionInterface };
