import { AdjacencyEnum } from '../types/enums/FacilityEnums';
import { FacilityInterface } from '../types/interfaces/FacilityInterface';

interface FacilitiesListInterface {
  [key: string]: FacilityInterface;
}

const facilities: FacilitiesListInterface = {
  accessLift: {
    img: 'img/facilities/accessLift.jpg',
    powerConsumed: 1,
  },
  alienContainment: {
    img: 'img/facilities/alienContainment.jpg',
    powerConsumed: 10,
  },
  eleriumGenerator: {
    img: 'img/facilities/eleriumGenerator.jpg',
    powerGenerated: 35,
    adjacency: AdjacencyEnum.power,
  },
  empty: {
    img: 'img/facilities/empty.jpg',
  },
  fissionGenerator: {
    img: 'img/facilities/fissionGenerator.jpg',
    powerGenerated: 8,
    adjacency: AdjacencyEnum.power,
  },
  foundry: {
    img: 'img/facilities/foundry.jpg',
    powerConsumed: 6,
    adjacency: AdjacencyEnum.workshop,
  },
  geneticsLab: {
    img: 'img/facilities/geneticsLab.jpg',
    powerConsumed: 4,
    adjacency: AdjacencyEnum.laboratory,
  },
  gollopChamber: {
    img: 'img/facilities/gollopChamber.jpg',
    powerConsumed: 35,
  },
  hyperwaveRelay: {
    img: 'img/facilities/hyperwaveRelay.jpg',
    powerConsumed: 15,
  },
  laboratory: {
    img: 'img/facilities/laboratory.jpg',
    powerConsumed: 4,
    researchBonus: 20,
    adjacency: AdjacencyEnum.laboratory,
  },
  officerTrainingSchool: {
    img: 'img/facilities/officerTrainingSchool.jpg',
    powerConsumed: 1,
  },
  psionicLab: {
    img: 'img/facilities/psionicLab.jpg',
    powerConsumed: 6,
    adjacency: AdjacencyEnum.laboratory,
  },
  repairBay: {
    img: 'img/facilities/repairBay.jpg',
    powerConsumed: 4,
    adjacency: AdjacencyEnum.workshop,
  },
  satelliteNexus: {
    img: 'img/facilities/satelliteNexus.jpg',
    powerConsumed: 8,
    satellitesBonus: 2,
    adjacency: AdjacencyEnum.satellite,
  },
  satelliteUplink: {
    img: 'img/facilities/satelliteUplink.jpg',
    powerConsumed: 8,
    satellitesBonus: 1,
    adjacency: AdjacencyEnum.satellite,
  },
  thermoGenerator: {
    img: 'img/facilities/thermoGenerator.jpg',
    powerGenerated: 25,
    adjacency: AdjacencyEnum.power,
  },
  workshop: {
    img: 'img/facilities/workshop.jpg',
    powerConsumed: 4,
    workshopBonus: 10,
    adjacency: AdjacencyEnum.workshop,
  },
};

export default facilities;
