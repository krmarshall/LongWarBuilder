import { createContext, useReducer } from 'react';
import { MonthlyMissionsInterface } from '../types/interfaces/MissionInterfaces';

interface CalculatedInputsInterface {
  calculateToggle: boolean;
  resourceLevel: number;
  alienResources: number;
  threatLevel: number;
  prevMonthThreatLevel: number;
  splashedSmalls: number;
  splashedLarges: number;
}

interface MissionStateInterface {
  calculatedInputs: CalculatedInputsInterface;
  missions: MonthlyMissionsInterface;
  notes: string;
  retaliationCounter: number;
}

interface ActionInterface {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

interface ProviderParamsInterface {
  children: React.ReactNode;
}

enum MissionContextTypeEnums {
  'toggleCalculate' = 'toggleCalculate',
  'changeCalculatedInput' = 'changeCalculatedInput',
  'changeMissions' = 'changeMissions',
  'changeNotes' = 'changeNotes',
  'changeRetaliationCounter' = 'changeRetaliationCounter',
  'loadState' = 'loadState',
}

const initialState: MissionStateInterface = {
  calculatedInputs: {
    calculateToggle: false,
    resourceLevel: 0,
    alienResources: 0,
    threatLevel: 0,
    prevMonthThreatLevel: 0,
    splashedSmalls: 0,
    splashedLarges: 0,
  },
  missions: {
    abduction: 0,
    terror: 0,
    research: 0,
    scout: 0,
    harvest: 0,
    hunt: 0,
    bomb: 0,
    infiltrate: 0,
    council: 0,
  },
  notes: '',
  retaliationCounter: 0,
};

const missionContext = createContext(initialState);

const { Provider } = missionContext;

const MissionStateProvider = ({ children }: ProviderParamsInterface): JSX.Element => {
  const [missionState, missionDispatch] = useReducer((state: MissionStateInterface, action: ActionInterface) => {
    switch (action.type) {
      case MissionContextTypeEnums.toggleCalculate: {
        const newState = { ...state };
        newState.calculatedInputs.calculateToggle = action.payload;
        return newState;
      }
      case MissionContextTypeEnums.changeCalculatedInput: {
        const newState = { ...state };
        newState.calculatedInputs = { ...newState.calculatedInputs, ...action.payload };
        return newState;
      }
      case MissionContextTypeEnums.changeMissions: {
        const newState = { ...state };
        newState.missions = { ...newState.missions, ...action.payload };
        return newState;
      }
      case MissionContextTypeEnums.changeNotes: {
        const newState = { ...state };
        newState.notes = action.payload;
        return newState;
      }
      case MissionContextTypeEnums.changeRetaliationCounter: {
        const newState = { ...state };
        newState.retaliationCounter = action.payload;
        return newState;
      }
      case MissionContextTypeEnums.loadState: {
        const newState = action.payload;
        if (typeof newState.retaliationCounter == 'undefined') {
          newState.retaliationCounter = 0;
        }
        return newState;
      }
      default: {
        break;
      }
    }
  }, initialState);
  //@ts-expect-error 2461
  return <Provider value={[missionState, missionDispatch]}>{children}</Provider>;
};

export default MissionStateProvider;
export { missionContext, MissionContextTypeEnums };
export type { MissionStateInterface };
