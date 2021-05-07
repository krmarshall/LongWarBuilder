import React, { createContext, useReducer } from 'react';
import rookie from '../data/rookie';
import { AllStatsInterface, ClassInterface } from '../types/interfaces/ClassInterfaces';
import { LocalStorageClassInterface } from '../types/interfaces/StorageInterfaces';

interface StateInterface {
  selectedClass: string;
  stats: AllStatsInterface;
  classData: ClassInterface | undefined;
  // eslint-disable-next-line no-sparse-arrays
  currentBuild: Array<number | undefined>;
  currentPsi?: Array<number | undefined>;
  classBuilds: LocalStorageClassInterface;
  notificationMessage: string;
}

interface ActionInterface {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

interface ProviderParamsInterface {
  children: React.ReactNode;
}

enum TypeEnums {
  'changeClass' = 'changeClass',
  'changeStats' = 'changeStats',
  'changeCurrentBuild' = 'changeCurrentBuild',
  'changeCurrentPsi' = 'changeCurrentPsi',
  'changeClassBuilds' = 'changeClassBuilds',
  'loadSavedBuild' = 'loadSavedBuild',
  'loadUrlBuild' = 'loadUrlBuild',
  'changeNotification' = 'changeNotification',
}

const initialState: StateInterface = {
  selectedClass: '',
  stats: {
    health: rookie.health,
    mobility: rookie.mobility,
    will: rookie.will,
    aim: rookie.aim,
  },
  classData: undefined,
  currentBuild: [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  currentPsi: undefined,
  classBuilds: {},
  notificationMessage: '',
};

const context = createContext(initialState);

const { Provider } = context;

const StateProvider = ({ children }: ProviderParamsInterface): JSX.Element => {
  //@ts-expect-error 2769
  const [state, dispatch] = useReducer((state: StateInterface, action: ActionInterface) => {
    switch (action.type) {
      case TypeEnums.changeClass: {
        const newState = { ...state };
        newState.selectedClass = action.payload.selectedClass;
        newState.classData = action.payload.classData;
        newState.currentBuild = action.payload.currentBuild;
        newState.currentPsi = action.payload.currentPsi;
        return newState;
      }
      case TypeEnums.changeStats: {
        const newState = { ...state };
        newState.stats = action.payload;
        return newState;
      }
      case TypeEnums.changeCurrentBuild: {
        const newState = { ...state };
        newState.currentBuild = action.payload;
        return newState;
      }
      case TypeEnums.changeCurrentPsi: {
        const newState = { ...state };
        newState.currentPsi = action.payload;
        return newState;
      }
      case TypeEnums.changeClassBuilds: {
        const newState = { ...state };
        newState.classBuilds = action.payload;
        return newState;
      }
      case TypeEnums.loadSavedBuild: {
        const newState = { ...state };
        newState.currentBuild = action.payload.currentBuild;
        newState.currentPsi = action.payload.currentPsi;
        return newState;
      }
      case TypeEnums.loadUrlBuild: {
        const newState = { ...state };
        newState.selectedClass = action.payload.selectedClass;
        newState.classData = action.payload.classData;
        newState.currentBuild = action.payload.currentBuild;
        newState.currentPsi = action.payload.currentPsi;
        return newState;
      }
      case TypeEnums.changeNotification: {
        const newState = { ...state };
        newState.notificationMessage = action.payload;
        return newState;
      }
      default: {
        break;
      }
    }
  }, initialState);

  //@ts-expect-error 2461
  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export default StateProvider;
export { context, TypeEnums };
export type { StateInterface };
