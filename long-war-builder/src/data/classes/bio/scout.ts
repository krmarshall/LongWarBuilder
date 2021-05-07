import { ClassInterface } from '../../../types/interfaces/ClassInterfaces';
import { ClassImage, ClassName } from '../../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../../types/enums/PerkEnums';

const Scout: ClassInterface = {
  class: ClassName.Scout,
  imgPath: ClassImage.Scout,
  ranks: [
    {
      name: RankName.specialist,
      imgPath: RankImage.specialist,
      statProgression: {
        health: 0,
        aim: 4,
        will: 5.5,
      },
      perkProgression: [
        {
          perk: PerkName.lightningReflexes,
          imgPath: PerkImage.lightningReflexes,
          description: PerkDescription.lightningReflexes,
          mobility: 1,
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
          perk: PerkName.holoTargeting,
          imgPath: PerkImage.holoTargeting,
          description: PerkDescription.holoTargeting,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.damnGoodGround,
          imgPath: PerkImage.damnGoodGround,
          description: PerkDescription.damnGoodGround,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.loneWolf,
          imgPath: PerkImage.loneWolf,
          description: PerkDescription.loneWolf,
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
        aim: 4,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.lowProfile,
          imgPath: PerkImage.lowProfile,
          description: PerkDescription.lowProfile,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.ranger,
          imgPath: PerkImage.ranger,
          description: PerkDescription.ranger,
          mobility: 0,
          aim: 1,
          will: 0,
        },
        {
          perk: PerkName.deadeye,
          imgPath: PerkImage.deadeye,
          description: PerkDescription.deadeye,
          mobility: 0,
          aim: 1,
          will: 0,
        },
      ],
    },
    {
      name: RankName.sergeant,
      imgPath: RankImage.sergeant,
      statProgression: {
        health: 0,
        aim: 3,
        will: 3.5,
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
          perk: PerkName.aggression,
          imgPath: PerkImage.aggression,
          description: PerkDescription.aggression,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.battleScanner,
          imgPath: PerkImage.battleScanner,
          description: PerkDescription.battleScanner,
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
        aim: 4,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.concealment,
          imgPath: PerkImage.concealment,
          description: PerkDescription.concealment,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.inTheZone,
          imgPath: PerkImage.inTheZone,
          description: PerkDescription.inTheZone,
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
      name: RankName.gunnerySergeant,
      imgPath: RankImage.gunnerySergeant,
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
        aim: 4,
        will: 2.5,
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
          perk: PerkName.smokeAndMirrors,
          imgPath: PerkImage.smokeAndMirrors,
          description: PerkDescription.smokeAndMirrors,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
  ],
};

export default Scout;
