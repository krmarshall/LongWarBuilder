import { ClassInterface } from '../../types/Interfaces';
import { ClassImage, ClassName } from '../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../types/enums/PerkEnums';

const gunner: ClassInterface = {
  class: ClassName.gunner,
  imgPath: ClassImage.gunner,
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
          perk: PerkName.suppression,
          imgPath: PerkImage.suppression,
          description: PerkDescription.suppression,
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
          perk: PerkName.flush,
          imgPath: PerkImage.flush,
          description: PerkDescription.flush,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.coveringFire,
          imgPath: PerkImage.coveringFire,
          description: PerkDescription.coveringFire,
          mobility: 0,
          aim: 2,
          will: 0,
        },
        {
          perk: PerkName.holoTargeting,
          imgPath: PerkImage.holoTargeting,
          description: PerkDescription.holoTargeting,
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
          perk: PerkName.heatAmmo,
          imgPath: PerkImage.heatAmmo,
          description: PerkDescription.heatAmmo,
          mobility: 0,
          aim: 0,
          will: 0,
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
          perk: PerkName.shredderAmmo,
          imgPath: PerkImage.shredderAmmo,
          description: PerkDescription.shredderAmmo,
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
          perk: PerkName.willToSurvive,
          imgPath: PerkImage.willToSurvive,
          description: PerkDescription.willToSurvive,
          mobility: 0,
          aim: 0,
          will: 3,
        },
        {
          perk: PerkName.executioner,
          imgPath: PerkImage.executioner,
          description: PerkDescription.executioner,
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
        health: 1,
        aim: 3,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.rapidFire,
          imgPath: PerkImage.rapidFire,
          description: PerkDescription.rapidFire,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.readyForAnything,
          imgPath: PerkImage.readyForAnything,
          description: PerkDescription.readyForAnything,
          mobility: 0,
          aim: 2,
          will: 0,
        },
        {
          perk: PerkName.doubleTap,
          imgPath: PerkImage.doubleTap,
          description: PerkDescription.doubleTap,
          mobility: 0,
          aim: 0,
          will: 0,
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
          perk: PerkName.resilience,
          imgPath: PerkImage.resilience,
          description: PerkDescription.resilience,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.platformStability,
          imgPath: PerkImage.platformStability,
          description: PerkDescription.platformStability,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.dangerZone,
          imgPath: PerkImage.dangerZone,
          description: PerkDescription.dangerZone,
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
          perk: PerkName.sentinel,
          imgPath: PerkImage.sentinel,
          description: PerkDescription.sentinel,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.mayhem,
          imgPath: PerkImage.mayhem,
          description: PerkDescription.mayhem,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
  ],
};

export default gunner;
