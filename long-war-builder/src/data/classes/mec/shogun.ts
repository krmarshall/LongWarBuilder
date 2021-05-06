import { ClassInterface } from '../../../types/Interfaces';
import { MecImage, MecName } from '../../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../../types/enums/PerkEnums';

const Shogun: ClassInterface = {
  class: MecName.Shogun,
  imgPath: MecImage.Shogun,
  ranks: [
    {
      name: RankName.specialist,
      imgPath: RankImage.specialist,
      statProgression: {
        health: 1,
        aim: 3,
        will: 2.5,
      },
      perkProgression: [
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
      name: RankName.lanceCorporal,
      imgPath: RankImage.lanceCorporal,
      statProgression: {
        health: 0,
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
          perk: PerkName.damageControl,
          imgPath: PerkImage.damageControl,
          description: PerkDescription.damageControl,
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
      name: RankName.corporal,
      imgPath: RankImage.corporal,
      statProgression: {
        health: 1,
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
          perk: PerkName.deadeye,
          imgPath: PerkImage.deadeye,
          description: PerkDescription.deadeye,
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
      name: RankName.techSergeant,
      imgPath: RankImage.techSergeant,
      statProgression: {
        health: 1,
        aim: 2,
        will: 2.5,
      },
      perkProgression: [
        {
          perk: PerkName.sapper,
          imgPath: PerkImage.sapper,
          description: PerkDescription.sapper,
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
      name: RankName.gunnerySergeant,
      imgPath: RankImage.gunnerySergeant,
      statProgression: {
        health: 0,
        aim: 2,
        will: 2.5,
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
          perk: PerkName.rapidFire,
          imgPath: PerkImage.rapidFire,
          description: PerkDescription.rapidFire,
          mobility: 0,
          aim: 0,
          will: 0,
        },
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
      name: RankName.masterSergeant,
      imgPath: RankImage.masterSergeant,
      statProgression: {
        health: 1,
        aim: 3,
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
          perk: PerkName.absorptionFields,
          imgPath: PerkImage.absorptionFields,
          description: PerkDescription.absorptionFields,
          mobility: -1,
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
  ],
};

export default Shogun;
