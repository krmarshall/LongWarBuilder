import { createContext, useReducer } from 'react';
import { FacilitiesEnum } from '../types/enums/FacilityEnums';

interface BaseStateInterface {
  buildings: Array<Array<string>>;
  powerGenerated: number;
  powerNeeded: number;
  researchBonus: number;
  workshopCount: number;
  workshopAdjacencyCount: number;
  satellitesSupported: number;
  selectedFacility: FacilitiesEnum;
}

interface ActionInterface {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

interface ProviderParamsInterface {
  children: React.ReactNode;
}

enum BaseContextTypeEnums {
  'changeBuildings' = 'changeBuildings',
  'changeStats' = 'changeStats',
  'selectFacility' = 'selectFacility',
}

const initialState: BaseStateInterface = {
  buildings: [
    // y 0
    ['empty', 'empty', 'satelliteUplink', 'accessLift', 'empty', 'empty', 'empty'],
    // y 1
    ['empty', 'empty', 'empty', 'accessLift', 'empty', 'empty', 'empty'],
    // y 2
    ['empty', 'empty', 'empty', 'accessLift', 'empty', 'empty', 'empty'],
    // y 3
    ['empty', 'empty', 'empty', 'accessLift', 'empty', 'empty', 'empty'],
  ],
  powerGenerated: 30,
  powerNeeded: 12,
  researchBonus: 0,
  workshopCount: 0,
  workshopAdjacencyCount: 0,
  satellitesSupported: 0,
  selectedFacility: FacilitiesEnum.empty,
};

const baseContext = createContext(initialState);

const { Provider } = baseContext;

const BaseStateProvider = ({ children }: ProviderParamsInterface): JSX.Element => {
  const [baseState, baseDispatch] = useReducer((state: BaseStateInterface, action: ActionInterface) => {
    switch (action.type) {
      case BaseContextTypeEnums.changeBuildings: {
        const newState = { ...state };
        newState.buildings = action.payload;
        return newState;
      }
      case BaseContextTypeEnums.selectFacility: {
        const newState = { ...state };
        newState.selectedFacility = action.payload;
        return newState;
      }
      case BaseContextTypeEnums.changeStats: {
        const newState = { ...state, ...action.payload };
        return newState;
      }
      default: {
        break;
      }
    }
  }, initialState);

  //@ts-expect-error 2461
  return <Provider value={[baseState, baseDispatch]}>{children}</Provider>;
};

export default BaseStateProvider;
export { baseContext, BaseContextTypeEnums };
export type { BaseStateInterface };
