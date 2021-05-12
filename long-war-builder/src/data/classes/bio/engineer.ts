import { ClassInterface } from '../../../types/interfaces/ClassInterfaces';
import { ClassImage, ClassName } from '../../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../../types/enums/PerkEnums';

const Engineer: ClassInterface = {
  class: ClassName.Engineer,
  imgPath: ClassImage.Engineer,
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
          perk: PerkName.grenadier,
          imgPath: PerkImage.grenadier,
          description: PerkDescription.grenadier,
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
          perk: PerkName.holoTargeting,
          imgPath: PerkImage.holoTargeting,
          description: PerkDescription.holoTargeting,
          mobility: 0,
          aim: 1,
          will: 0,
        },
        {
          perk: PerkName.smokeGrenade,
          imgPath: PerkImage.smokeGrenade,
          description: PerkDescription.smokeGrenade,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.sapper,
          imgPath: PerkImage.sapper,
          description: PerkDescription.sapper,
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
          perk: PerkName.ranger,
          imgPath: PerkImage.ranger,
          description: PerkDescription.ranger,
          mobility: 0,
          aim: 2,
          will: 0,
        },
        {
          perk: PerkName.smokeAndMirrors,
          imgPath: PerkImage.smokeAndMirrors,
          description: PerkDescription.smokeAndMirrors,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.heatWarheads,
          imgPath: PerkImage.heatWarheads,
          description: PerkDescription.heatWarheads,
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
          perk: PerkName.repair,
          imgPath: PerkImage.repair,
          description: PerkDescription.repair,
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
          perk: PerkName.battleScanner,
          imgPath: PerkImage.battleScanner,
          description: PerkDescription.battleScanner,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.denseSmoke,
          imgPath: PerkImage.denseSmoke,
          description: PerkDescription.denseSmoke,
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
          perk: PerkName.extraConditioning,
          imgPath: PerkImage.extraConditioning,
          description: PerkDescription.extraConditioning,
          mobility: 1,
          aim: 3,
          will: 3,
        },
        {
          perk: PerkName.packmaster,
          imgPath: PerkImage.packmaster,
          description: PerkDescription.packmaster,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.heatAmmo,
          imgPath: PerkImage.heatAmmo,
          description: PerkDescription.heatAmmo,
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
          perk: PerkName.tandemWarheads,
          imgPath: PerkImage.tandemWarheads,
          description: PerkDescription.tandemWarheads,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.fireRocket,
          imgPath: PerkImage.fireRocket,
          description: PerkDescription.fireRocket,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.bombard,
          imgPath: PerkImage.bombard,
          description: PerkDescription.bombard,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
  ],
};

export default Engineer;
