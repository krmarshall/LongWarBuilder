import { ClassInterface } from '../../../types/Interfaces';
import { MecImage, MecName } from '../../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../../types/enums/PerkEnums';

const Goliath: ClassInterface = {
  class: MecName.Goliath,
  imgPath: MecImage.Goliath,
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
          perk: PerkName.absorptionFields,
          imgPath: PerkImage.absorptionFields,
          description: PerkDescription.absorptionFields,
          mobility: -1,
          aim: 0,
          will: 0,
        },
      ],
    },
    {
      name: RankName.lanceCorporal,
      imgPath: RankImage.lanceCorporal,
      statProgression: {
        health: 1,
        aim: 1,
        will: 2.5,
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
          perk: PerkName.reactiveTargetingSensors,
          imgPath: PerkImage.reactiveTargetingSensors,
          description: PerkDescription.reactiveTargetingSensors,
          mobility: 0,
          aim: 2,
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
      name: RankName.corporal,
      imgPath: RankImage.corporal,
      statProgression: {
        health: 1,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.coveringFire,
          imgPath: PerkImage.coveringFire,
          description: PerkDescription.coveringFire,
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
        health: 1,
        aim: 1,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.mayhem,
          imgPath: PerkImage.mayhem,
          description: PerkDescription.mayhem,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.repairServos,
          imgPath: PerkImage.repairServos,
          description: PerkDescription.repairServos,
          mobility: 0,
          aim: 2,
          will: 2,
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
      name: RankName.techSergeant,
      imgPath: RankImage.techSergeant,
      statProgression: {
        health: 1,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.packmaster,
          imgPath: PerkImage.packmaster,
          description: PerkDescription.packmaster,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.shockAbsorbentArmor,
          imgPath: PerkImage.shockAbsorbentArmor,
          description: PerkDescription.shockAbsorbentArmor,
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
      ],
    },
    {
      name: RankName.gunnerySergeant,
      imgPath: RankImage.gunnerySergeant,
      statProgression: {
        health: 1,
        aim: 1,
        will: 2.5,
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
          perk: PerkName.damageControl,
          imgPath: PerkImage.damageControl,
          description: PerkDescription.damageControl,
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
      name: RankName.masterSergeant,
      imgPath: RankImage.masterSergeant,
      statProgression: {
        health: 1,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.closeCombatSpecialist,
          imgPath: PerkImage.closeCombatSpecialist,
          description: PerkDescription.closeCombatSpecialist,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.extraConditioning,
          imgPath: PerkImage.extraConditioning,
          description: PerkDescription.extraConditioning,
          mobility: 1,
          aim: 4,
          will: 4,
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

export default Goliath;
