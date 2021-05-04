import { ClassInterface } from '../../types/Interfaces';
import { ClassImage, ClassName } from '../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../types/enums/PerkEnums';

const Assault: ClassInterface = {
  class: ClassName.Assault,
  imgPath: ClassImage.Assault,
  ranks: [
    {
      name: RankName.specialist,
      imgPath: RankImage.specialist,
      statProgression: {
        health: 1,
        aim: 3,
        will: 5.5,
      },
      perkProgression: [
        {
          perk: PerkName.runAndGun,
          imgPath: PerkImage.runAndGun,
          description: PerkDescription.runAndGun,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
    {
      name: RankName.lanceCorporal,
      imgPath: RankImage.lanceCorporal,
      statProgression: {
        health: 0,
        aim: 2,
        will: 5.5,
      },
      perkProgression: [
        {
          perk: PerkName.steadfast,
          imgPath: PerkImage.steadfast,
          description: PerkDescription.steadfast,
          mobility: 0,
          aim: 0,
          will: 5,
        },
        {
          perk: PerkName.closeCombatSpecialist,
          imgPath: PerkImage.closeCombatSpecialist,
          description: PerkDescription.closeCombatSpecialist,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.flush,
          imgPath: PerkImage.flush,
          description: PerkDescription.flush,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
    {
      name: RankName.corporal,
      imgPath: RankImage.corporal,
      statProgression: {
        health: 1,
        aim: 3,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.willToSurvive,
          imgPath: PerkImage.willToSurvive,
          description: PerkDescription.willToSurvive,
          mobility: 0,
          aim: 0,
          will: 3,
        },
        {
          perk: PerkName.aggression,
          imgPath: PerkImage.aggression,
          description: PerkDescription.aggression,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.ranger,
          imgPath: PerkImage.ranger,
          description: PerkDescription.ranger,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
    {
      name: RankName.sergeant,
      imgPath: RankImage.sergeant,
      statProgression: {
        health: 0,
        aim: 2,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.closeEncounters,
          imgPath: PerkImage.closeEncounters,
          description: PerkDescription.closeEncounters,
          mobility: 0,
          aim: 0,
          will: 3,
        },
        {
          perk: PerkName.rapidFire,
          imgPath: PerkImage.rapidFire,
          description: PerkDescription.rapidFire,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.hitAndRun,
          imgPath: PerkImage.hitAndRun,
          description: PerkDescription.hitAndRun,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
    {
      name: RankName.techSergeant,
      imgPath: RankImage.techSergeant,
      statProgression: {
        health: 1,
        aim: 3,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.resilience,
          imgPath: PerkImage.resilience,
          description: PerkDescription.resilience,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.killerInstinct,
          imgPath: PerkImage.killerInstinct,
          description: PerkDescription.killerInstinct,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.executioner,
          imgPath: PerkImage.executioner,
          description: PerkDescription.executioner,
          mobility: 0,
          aim: 2,
          will: 2,
        },
      ],
    },
    {
      name: RankName.gunnerySergeant,
      imgPath: RankImage.gunnerySergeant,
      statProgression: {
        health: 0,
        aim: 2,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.tacticalSense,
          imgPath: PerkImage.tacticalSense,
          description: PerkDescription.tacticalSense,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.bringEmOn,
          imgPath: PerkImage.bringEmOn,
          description: PerkDescription.bringEmOn,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.sprinter,
          imgPath: PerkImage.sprinter,
          description: PerkDescription.sprinter,
          mobility: 4,
          aim: 0,
          will: 0,
        },
      ],
    },
    {
      name: RankName.masterSergeant,
      imgPath: RankImage.masterSergeant,
      statProgression: {
        health: 1,
        aim: 3,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.extraConditioning,
          imgPath: PerkImage.extraConditioning,
          description: PerkDescription.extraConditioning,
          mobility: 1,
          aim: 4,
          will: 4,
        },
        {
          perk: PerkName.vitalPointTargeting,
          imgPath: PerkImage.vitalPointTargeting,
          description: PerkDescription.vitalPointTargeting,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.lightningReflexes,
          imgPath: PerkImage.lightningReflexes,
          description: PerkDescription.lightningReflexes,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
  ],
};

export default Assault;
