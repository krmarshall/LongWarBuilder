import { ClassInterface } from '../../types/Interfaces';
import { ClassImage, ClassName } from '../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../types/enums/PerkEnums';

const infantry: ClassInterface = {
  class: ClassName.infantry,
  imgPath: ClassImage.infantry,
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
          perk: PerkName.lightEmUp,
          imgPath: PerkImage.lightEmUp,
          description: PerkDescription.lightEmUp,
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
        aim: 3,
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
          perk: PerkName.coveringFire,
          imgPath: PerkImage.coveringFire,
          description: PerkDescription.coveringFire,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.executioner,
          imgPath: PerkImage.executioner,
          description: PerkDescription.executioner,
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
        health: 0,
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
          perk: PerkName.opportunist,
          imgPath: PerkImage.opportunist,
          description: PerkDescription.opportunist,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.aggression,
          imgPath: PerkImage.aggression,
          description: PerkDescription.aggression,
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
        health: 1,
        aim: 3,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.deadeye,
          imgPath: PerkImage.deadeye,
          description: PerkDescription.deadeye,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.suppression,
          imgPath: PerkImage.suppression,
          description: PerkDescription.suppression,
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
      name: RankName.techSergeant,
      imgPath: RankImage.techSergeant,
      statProgression: {
        health: 0,
        aim: 3,
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
          perk: PerkName.lockNLoad,
          imgPath: PerkImage.lockNLoad,
          description: PerkDescription.lockNLoad,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.sharpshooter,
          imgPath: PerkImage.sharpshooter,
          description: PerkDescription.sharpshooter,
          mobility: 0,
          aim: 2,
          will: 0,
        },
      ],
    },
    {
      name: RankName.gunnerySergeant,
      imgPath: RankImage.gunnerySergeant,
      statProgression: {
        health: 0,
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
          perk: PerkName.sentinel,
          imgPath: PerkImage.sentinel,
          description: PerkDescription.sentinel,
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
          perk: PerkName.rapidFire,
          imgPath: PerkImage.rapidFire,
          description: PerkDescription.rapidFire,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
  ],
};

export default infantry;
