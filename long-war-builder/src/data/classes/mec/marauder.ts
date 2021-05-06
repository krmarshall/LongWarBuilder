import { ClassInterface } from '../../../types/Interfaces';
import { MecImage, MecName } from '../../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../../types/enums/PerkEnums';

const Marauder: ClassInterface = {
  class: MecName.Marauder,
  imgPath: MecImage.Marauder,
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
          perk: PerkName.closeEncounters,
          imgPath: PerkImage.closeEncounters,
          description: PerkDescription.closeEncounters,
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
        aim: 2,
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
          perk: PerkName.steadfast,
          imgPath: PerkImage.steadfast,
          description: PerkDescription.steadfast,
          mobility: 0,
          aim: 0,
          will: 5,
        },
        {
          perk: PerkName.shockAbsorbentArmor,
          imgPath: PerkImage.shockAbsorbentArmor,
          description: PerkDescription.shockAbsorbentArmor,
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
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.damageControl,
          imgPath: PerkImage.damageControl,
          description: PerkDescription.damageControl,
          mobility: 0,
          aim: 0,
          will: 0,
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
      name: RankName.sergeant,
      imgPath: RankImage.sergeant,
      statProgression: {
        health: 1,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.automatedThreatAssessment,
          imgPath: PerkImage.automatedThreatAssessment,
          description: PerkDescription.automatedThreatAssessment,
          mobility: 0,
          aim: 0,
          will: 2,
        },
        {
          perk: PerkName.executioner,
          imgPath: PerkImage.executioner,
          description: PerkDescription.executioner,
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
        health: 1,
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
          perk: PerkName.flush,
          imgPath: PerkImage.flush,
          description: PerkDescription.flush,
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
          perk: PerkName.bringEmOn,
          imgPath: PerkImage.bringEmOn,
          description: PerkDescription.bringEmOn,
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
          perk: PerkName.vitalPointTargeting,
          imgPath: PerkImage.vitalPointTargeting,
          description: PerkDescription.vitalPointTargeting,
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
        aim: 2,
        will: 2.5,
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
        {
          perk: PerkName.rapidFire,
          imgPath: PerkImage.rapidFire,
          description: PerkDescription.rapidFire,
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

export default Marauder;
