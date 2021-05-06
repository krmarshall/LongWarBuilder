import { PsiPerkDescription, PsiPerkImage, PsiPerkName, PsiRankName } from '../types/enums/PsiEnums';
import { PsiClassInterface } from '../types/interfaces/PsiInterfaces';

const Psi: PsiClassInterface = {
  psiRanks: [
    {
      name: PsiRankName.awakened,
      perkProgression: [
        {
          perk: PsiPerkName.regenBiofield,
          imgPath: PsiPerkImage.regenBiofield,
          description: PsiPerkDescription.regenBiofield,
        },
        {
          perk: PsiPerkName.neuralFeedback,
          imgPath: PsiPerkImage.neuralFeedback,
          description: PsiPerkDescription.neuralFeedback,
        },
        {
          perk: PsiPerkName.mindfray,
          imgPath: PsiPerkImage.mindfray,
          description: PsiPerkDescription.mindfray,
        },
      ],
      willProgression: 3.5,
    },
    {
      name: PsiRankName.sensitive,
      perkProgression: [
        {
          perk: PsiPerkName.distortionField,
          imgPath: PsiPerkImage.distortionField,
          description: PsiPerkDescription.distortionField,
        },
        {
          perk: PsiPerkName.psiInspiration,
          imgPath: PsiPerkImage.psiInspiration,
          description: PsiPerkDescription.psiInspiration,
        },
      ],
      willProgression: 3.5,
    },
    {
      name: PsiRankName.talent,
      perkProgression: [
        {
          perk: PsiPerkName.psiPanic,
          imgPath: PsiPerkImage.psiPanic,
          description: PsiPerkDescription.psiPanic,
        },
        {
          perk: PsiPerkName.mindMerge,
          imgPath: PsiPerkImage.mindMerge,
          description: PsiPerkDescription.mindMerge,
        },
      ],
      willProgression: 3.5,
    },
    {
      name: PsiRankName.adept,
      perkProgression: [
        {
          perk: PsiPerkName.psychokineticStrike,
          imgPath: PsiPerkImage.psychokineticStrike,
          description: PsiPerkDescription.psychokineticStrike,
        },
        {
          perk: PsiPerkName.pyrokinesis,
          imgPath: PsiPerkImage.pyrokinesis,
          description: PsiPerkDescription.pyrokinesis,
        },
        {
          perk: PsiPerkName.telekineticField,
          imgPath: PsiPerkImage.telekineticField,
          description: PsiPerkDescription.telekineticField,
        },
      ],
      willProgression: 3.5,
    },
    {
      name: PsiRankName.psion,
      perkProgression: [
        {
          perk: PsiPerkName.mindControl,
          imgPath: PsiPerkImage.mindControl,
          description: PsiPerkDescription.mindControl,
        },
      ],
      willProgression: 3.5,
    },
    {
      name: PsiRankName.master,
      perkProgression: [
        {
          perk: PsiPerkName.rift,
          imgPath: PsiPerkImage.rift,
          description: PsiPerkDescription.rift,
        },
      ],
      willProgression: 3.5,
    },
  ],
};

export default Psi;
