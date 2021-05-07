import { PsiPerkDescription, PsiPerkImage, PsiPerkName, PsiRankName } from '../enums/PsiEnums';

interface PsiPerkInterface {
  perk: PsiPerkName;
  imgPath: PsiPerkImage;
  description: PsiPerkDescription;
}

interface PsiRankInterface {
  name: PsiRankName;
  perkProgression: Array<PsiPerkInterface>;
  willProgression: 3.5;
}

interface PsiClassInterface {
  psiRanks: Array<PsiRankInterface>;
}

export type { PsiPerkInterface, PsiRankInterface, PsiClassInterface };
