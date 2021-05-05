import { ClassInterface } from '../../../types/Interfaces';
import { MecImage, MecName } from '../../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../../types/enums/PerkEnums';

const Archer: ClassInterface = {
  class: MecName.Archer,
  imgPath: MecImage.Archer,
  ranks: [
    {
      name: RankName.specialist,
      imgPath: RankImage.specialist,
      statProgression: {
        health: 1,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
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
    {
      name: RankName.lanceCorporal,
      imgPath: RankImage.lanceCorporal,
      statProgression: {
        health: 0,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.heatWarheads,
          imgPath: PerkImage.heatWarheads,
          description: PerkDescription.heatWarheads,
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
      name: RankName.corporal,
      imgPath: RankImage.corporal,
      statProgression: {
        health: 0,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.repairServos,
          imgPath: PerkImage.repairServos,
          description: PerkDescription.repairServos,
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
      name: RankName.sergeant,
      imgPath: RankImage.sergeant,
      statProgression: {
        health: 1,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.ranger,
          imgPath: PerkImage.ranger,
          description: PerkDescription.ranger,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.reactiveTargetingSensors,
          imgPath: PerkImage.reactiveTargetingSensors,
          description: PerkDescription.reactiveTargetingSensors,
          mobility: 0,
          aim: 2,
          will: 2,
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
      name: RankName.techSergeant,
      imgPath: RankImage.techSergeant,
      statProgression: {
        health: 0,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.vitalPointTargeting,
          imgPath: PerkImage.vitalPointTargeting,
          description: PerkDescription.vitalPointTargeting,
          mobility: 0,
          aim: 0,
          will: 0,
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
          perk: PerkName.collateralDamage,
          imgPath: PerkImage.collateralDamage,
          description: PerkDescription.collateralDamage,
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
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.dangerZone,
          imgPath: PerkImage.dangerZone,
          description: PerkDescription.dangerZone,
          mobility: 0,
          aim: 0,
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
        {
          perk: PerkName.damageControl,
          imgPath: PerkImage.damageControl,
          description: PerkDescription.damageControl,
          mobility: 0,
          aim: 3,
          will: 0,
        },
      ],
    },
    {
      name: RankName.masterSergeant,
      imgPath: RankImage.masterSergeant,
      statProgression: {
        health: 1,
        aim: 2,
        will: 2.5,
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
        {
          perk: PerkName.tandemWarheads,
          imgPath: PerkImage.tandemWarheads,
          description: PerkDescription.tandemWarheads,
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
      ],
    },
  ],
};

export default Archer;
