import { useContext } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import BaseGrid from '../components/baseBuilder/BaseGrid';
import BaseStats from '../components/baseBuilder/BaseStats';
import BaseStorage from '../components/baseBuilder/BaseStorage';
import StructureSelector from '../components/baseBuilder/StructureSelector';
import NavHeader from '../components/NavHeader';
import { baseContext, BaseContextTypeEnums, BaseStateInterface } from '../context/baseContext';
import facilities from '../data/facilities';
import { AdjacencyEnum } from '../types/enums/FacilityEnums';

const BaseBuilder = (): JSX.Element => {
  // @ts-expect-error 2461
  const [baseState, baseDispatch] = useContext(baseContext);
  const { buildings } = baseState as BaseStateInterface;

  useEffect(() => {
    calculateBuildingBonuses();
  }, [buildings]);

  const calculateBuildingBonuses = () => {
    const updatedBaseStats = {
      powerGenerated: 30,
      powerNeeded: 12,
      researchBonus: 0,
      workshopCount: 0,
      workshopAdjacencyCount: 0,
      satellitesSupported: 0,
    };

    for (let y = 0; y < buildings.length; y++) {
      for (let x = 0; x < buildings[y].length; x++) {
        // Add the facilities base stats
        const building = facilities[buildings[y][x]];
        updatedBaseStats.powerGenerated += building.powerGenerated ? building.powerGenerated : 0;
        updatedBaseStats.powerNeeded += building.powerConsumed ? building.powerConsumed : 0;
        updatedBaseStats.researchBonus += building.researchBonus ? building.researchBonus : 0;
        updatedBaseStats.workshopCount += building.workshopBonus ? building.workshopBonus : 0;
        updatedBaseStats.satellitesSupported += building.satellitesBonus ? building.satellitesBonus : 0;

        // Add adjacency bonuses, only checking below and right adjacencies should avoid any duplicates.
        // Below
        // If there is a facility below
        if (y + 1 < 4) {
          // If that facility has an adjacency, and the current facility has an adjacency
          if (facilities[buildings[y + 1][x]].adjacency && building.adjacency) {
            // If they are the same adjacency
            if (building.adjacency === facilities[buildings[y + 1][x]].adjacency) {
              addAdjacencyBonus(building.adjacency as AdjacencyEnum, updatedBaseStats);
            }
          }
        }

        // Right
        // If there is a facility below
        if (x + 1 < 7) {
          // If that facility has an adjacency, and the current facility has an adjacency
          if (facilities[buildings[y][x + 1]].adjacency && building.adjacency) {
            // If they are the same adjacency
            if (building.adjacency === facilities[buildings[y][x + 1]].adjacency) {
              addAdjacencyBonus(building.adjacency as AdjacencyEnum, updatedBaseStats);
            }
          }
        }

        // Update context
        baseDispatch({ type: BaseContextTypeEnums.changeStats, payload: updatedBaseStats });
      }
    }
  };

  const addAdjacencyBonus = (
    adjacency: AdjacencyEnum,
    updatedBaseStats: {
      powerGenerated: number;
      researchBonus: number;
      workshopAdjacencyCount: number;
      satellitesSupported: number;
    }
  ) => {
    switch (adjacency) {
      case AdjacencyEnum.laboratory: {
        updatedBaseStats.researchBonus += 10;
        break;
      }
      case AdjacencyEnum.power: {
        updatedBaseStats.powerGenerated += 3;
        break;
      }
      case AdjacencyEnum.satellite: {
        updatedBaseStats.satellitesSupported += 1;
        break;
      }
      case AdjacencyEnum.workshop: {
        updatedBaseStats.workshopAdjacencyCount += 1;
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Fragment>
      <NavHeader classSelector={false} location={'base'} />

      <div className="flex flex-row flex-nowrap" style={{ maxHeight: '86%' }}>
        <div className="flex flex-col flex-nowrap flex-grow">
          <StructureSelector />
          <BaseGrid />
        </div>
        <div className="flex flex-col flex-nowrap">
          <BaseStats />
          <BaseStorage />
        </div>
      </div>
    </Fragment>
  );
};

export default BaseBuilder;
