import { ClassInterface } from '../../../types/interfaces/ClassInterfaces';
import { ClassImage, ClassName } from '../../../types/enums/ClassEnums';
import { RankImage, RankName } from '../../../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../../../types/enums/PerkEnums';

const Medic: ClassInterface = {
  class: ClassName.Medic,
  imgPath: ClassImage.Medic,
  ranks: [
    {
      name: RankName.specialist,
      imgPath: RankImage.specialist,
      statProgression: {
        health: 1,
        aim: 3,
        will: 6.5,
      },
      perkProgression: [
        {
          perk: PerkName.fieldMedic,
          imgPath: PerkImage.fieldMedic,
          description: PerkDescription.fieldMedic,
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
        will: 6.5,
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
        {
          perk: PerkName.steadfast,
          imgPath: PerkImage.steadfast,
          description: PerkDescription.steadfast,
          mobility: 0,
          aim: 0,
          will: 5,
        },
        {
          perk: PerkName.fieldSurgeon,
          imgPath: PerkImage.fieldSurgeon,
          description: PerkDescription.fieldSurgeon,
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
        will: 4.5,
      },
      perkProgression: [
        {
          perk: PerkName.rapidReaction,
          imgPath: PerkImage.rapidReaction,
          description: PerkDescription.rapidReaction,
          mobility: 0,
          aim: 3,
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
          perk: PerkName.revive,
          imgPath: PerkImage.revive,
          description: PerkDescription.revive,
          mobility: 0,
          aim: 0,
          will: 2,
        },
      ],
    },
    {
      name: RankName.sergeant,
      imgPath: RankImage.sergeant,
      statProgression: {
        health: 1,
        aim: 2,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.readyForAnything,
          imgPath: PerkImage.readyForAnything,
          description: PerkDescription.readyForAnything,
          mobility: 0,
          aim: 0,
          will: 3,
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
          perk: PerkName.paramedic,
          imgPath: PerkImage.paramedic,
          description: PerkDescription.paramedic,
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
          perk: PerkName.opportunist,
          imgPath: PerkImage.opportunist,
          description: PerkDescription.opportunist,
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
          perk: PerkName.combatDrugs,
          imgPath: PerkImage.combatDrugs,
          description: PerkDescription.combatDrugs,
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
          perk: PerkName.lockNLoad,
          imgPath: PerkImage.lockNLoad,
          description: PerkDescription.lockNLoad,
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
          perk: PerkName.packmaster,
          imgPath: PerkImage.packmaster,
          description: PerkDescription.packmaster,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.savior,
          imgPath: PerkImage.savior,
          description: PerkDescription.savior,
          mobility: 0,
          aim: 0,
          will: 0,
        },
      ],
    },
  ],
};

export default Medic;
