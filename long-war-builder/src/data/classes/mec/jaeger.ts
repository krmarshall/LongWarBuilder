import { ClassInterface } from '../../../types/interfaces/ClassInterfaces';
import { MecImage, MecName } from '../../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../../types/enums/PerkEnums';

const Jaeger: ClassInterface = {
  class: MecName.Jaeger,
  imgPath: MecImage.Jaeger,
  ranks: [
    {
      name: RankName.specialist,
      imgPath: RankImage.specialist,
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
      ],
    },
    {
      name: RankName.lanceCorporal,
      imgPath: RankImage.lanceCorporal,
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
      name: RankName.corporal,
      imgPath: RankImage.corporal,
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
          perk: PerkName.automatedThreatAssessment,
          imgPath: PerkImage.automatedThreatAssessment,
          description: PerkDescription.automatedThreatAssessment,
          mobility: 0,
          aim: 0,
          will: 2,
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
      name: RankName.sergeant,
      imgPath: RankImage.sergeant,
      statProgression: {
        health: 1,
        aim: 4,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.loneWolf,
          imgPath: PerkImage.loneWolf,
          description: PerkDescription.loneWolf,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.advancedFireControl,
          imgPath: PerkImage.advancedFireControl,
          description: PerkDescription.advancedFireControl,
          mobility: 0,
          aim: 2,
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
        aim: 4,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.aggression,
          imgPath: PerkImage.aggression,
          description: PerkDescription.aggression,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.damageControl,
          imgPath: PerkImage.damageControl,
          description: PerkDescription.damageControl,
          mobility: 0,
          aim: 0,
          will: 2,
        },
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
      name: RankName.gunnerySergeant,
      imgPath: RankImage.gunnerySergeant,
      statProgression: {
        health: 0,
        aim: 4,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.repairServos,
          imgPath: PerkImage.repairServos,
          description: PerkDescription.repairServos,
          mobility: 0,
          aim: 0,
          will: 2,
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
      name: RankName.masterSergeant,
      imgPath: RankImage.masterSergeant,
      statProgression: {
        health: 1,
        aim: 4,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.lockNLoad,
          imgPath: PerkImage.lockNLoad,
          description: PerkDescription.lockNLoad,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.absorptionFields,
          imgPath: PerkImage.absorptionFields,
          description: PerkDescription.absorptionFields,
          mobility: -1,
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
      ],
    },
  ],
};

export default Jaeger;
