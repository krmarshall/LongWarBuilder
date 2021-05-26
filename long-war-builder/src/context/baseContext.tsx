import { createContext, useReducer } from 'react';

interface BaseStateInterface {
  buildings: Array<Array<string>>;
  powerGenerated: number;
  powerNeeded: number;
  labBonus: number;
  workshopBonus: number;
  satellitesSupported: number;
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
}

const initialState: BaseStateInterface = {
  buildings: [
    // y 0
    ['', '', '', 'accessLift', '', '', ''],
    // y 1
    ['', '', '', 'accessLift', '', '', ''],
    // y 2
    ['', '', '', 'accessLift', '', '', ''],
    // y 3
    ['', '', '', 'accessLift', '', '', ''],
  ],
  powerGenerated: 30,
  powerNeeded: 18,
  labBonus: 0,
  workshopBonus: 0,
  satellitesSupported: 0,
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
