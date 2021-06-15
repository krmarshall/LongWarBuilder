import { createContext, useReducer } from 'react';

interface BaseStateInterface {
  buildings: Array<Array<string>>;
  powerGenerated: number;
  powerNeeded: number;
  researchBonus: number;
  workshopBonus: number;
  satellitesSupported: number;
  selectedCellY: number;
  selectedCellX: number;
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
  'selectCell' = 'selectCell',
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
  powerNeeded: 18,
  researchBonus: 0,
  workshopBonus: 0,
  satellitesSupported: 0,
  selectedCellY: 0,
  selectedCellX: 0,
};

const baseContext = createContext(initialState);

const { Provider } = baseContext;

const BaseStateProvider = ({ children }: ProviderParamsInterface): JSX.Element => {
  //@ts-expect-error 2769
  const [baseState, baseDispatch] = useReducer((state: BaseStateInterface, action: ActionInterface) => {
    switch (action.type) {
      case BaseContextTypeEnums.changeBuildings: {
        const newState = { ...state };
        newState.buildings = action.payload;
        return newState;
      }
      case BaseContextTypeEnums.selectCell: {
        const newState = { ...state };
        newState.selectedCellY = action.payload.selectedCellY;
        newState.selectedCellX = action.payload.selectedCellX;
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
