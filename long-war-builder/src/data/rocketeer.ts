import { ClassInterface } from '../types/Interfaces';
import { ClassImage, ClassName } from '../types/enums/ClassEnums';
import { RankImage, RankName } from '../types/enums/RankEnums';
import { PerkDescription, PerkImage, PerkName } from '../types/enums/PerkEnums';

const rocketeer: ClassInterface = {
  class: ClassName.rocketeer,
  imgPath: ClassImage.rocketeer,
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
          perk: PerkName.fireRocket,
          imgPath: PerkImage.fireRocket,
          description: PerkDescription.fireRocket,
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
        aim: 3,
        will: 5.5,
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
          perk: PerkName.ranger,
          imgPath: PerkImage.ranger,
          description: PerkDescription.ranger,
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
      name: RankName.corporal,
      imgPath: RankImage.corporal,
      statProgression: {
        health: 0,
        aim: 3,
        will: 3.5,
      },
      perkProgression: [
        {
          perk: PerkName.rapidReaction,
          imgPath: PerkImage.rapidReaction,
          description: PerkDescription.rapidReaction,
          mobility: 0,
          aim: 2,
          will: 0,
        },
        {
          perk: PerkName.fireInTheHole,
          imgPath: PerkImage.fireInTheHole,
          description: PerkDescription.fireInTheHole,
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
        health: 1,
        aim: 3,
        will: 3.5,
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
          perk: PerkName.platformStability,
          imgPath: PerkImage.platformStability,
          description: PerkDescription.platformStability,
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
      name: RankName.techSergeant,
      imgPath: RankImage.techSergeant,
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
          perk: PerkName.opportunist,
          imgPath: PerkImage.opportunist,
          description: PerkDescription.opportunist,
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
        aim: 3,
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
          perk: PerkName.doubleTap,
          imgPath: PerkImage.doubleTap,
          description: PerkDescription.doubleTap,
          mobility: 0,
          aim: 0,
          will: 0,
        },
        {
          perk: PerkName.shockAndAwe,
          imgPath: PerkImage.shockAndAwe,
          description: PerkDescription.shockAndAwe,
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
          perk: PerkName.javelinRockets,
          imgPath: PerkImage.javelinRockets,
          description: PerkDescription.javelinRockets,
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
  ],
};

export default rocketeer;
