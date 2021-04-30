import { ClassInterface } from '../../types/Interfaces';
import { ClassImage, ClassName } from '../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../types/enums/PerkEnums';

const sniper: ClassInterface = {
  class: ClassName.sniper,
  imgPath: ClassImage.sniper,
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
          perk: PerkName.squadsight,
          imgPath: PerkImage.squadsight,
          description: PerkDescription.squadsight,
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
        aim: 4,
        will: 5.5,
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
          perk: PerkName.deadeye,
          imgPath: PerkImage.deadeye,
          description: PerkDescription.deadeye,
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
          perk: PerkName.disablingShot,
          imgPath: PerkImage.disablingShot,
          description: PerkDescription.disablingShot,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.precisionShot,
          imgPath: PerkImage.precisionShot,
          description: PerkDescription.precisionShot,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.snapshot,
          imgPath: PerkImage.snapshot,
          description: PerkDescription.snapshot,
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
        aim: 4,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.damnGoodGround,
          imgPath: PerkImage.damnGoodGround,
          description: PerkDescription.damnGoodGround,
          mobility: 0,
          aim: 0,
          will: 2,
        },
        {
          perk: PerkName.ranger,
          imgPath: PerkImage.ranger,
          description: PerkDescription.ranger,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.sharpshooter,
          imgPath: PerkImage.sharpshooter,
          description: PerkDescription.sharpshooter,
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
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.executioner,
          imgPath: PerkImage.executioner,
          description: PerkDescription.executioner,
          mobility: 0,
          aim: 0,
          will: 0,
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
          perk: PerkName.platformStability,
          imgPath: PerkImage.platformStability,
          description: PerkDescription.platformStability,
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
        aim: 4,
        will: 2.5,
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
          perk: PerkName.lockNLoad,
          imgPath: PerkImage.lockNLoad,
          description: PerkDescription.lockNLoad,
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
        aim: 4,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.inTheZone,
          imgPath: PerkImage.inTheZone,
          description: PerkDescription.inTheZone,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.mayhem,
          imgPath: PerkImage.mayhem,
          description: PerkDescription.mayhem,
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
  ],
};

export default sniper;
