/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useReducer } from 'react';
import rookie from '../data/rookie';

interface StateInterface {
  selectedClass: string;
  stats: any;
  classData: any;
  // eslint-disable-next-line no-sparse-arrays
  currentBuild: Array<number | undefined>;
  classBuilds: any;
  loadBuildSignal: boolean;
}

interface ActionInterface {
  type: string;
  payload: any;
}

interface ProviderParamsInterface {
  children: React.ReactNode;
}

enum TypeEnums {
  'changeClass' = 'changeClass',
  'changeStats' = 'changeStats',
  'changeClassData' = 'changeClassData',
  'changeCurrentBuild' = 'changeCurrentBuild',
  'changeClassBuilds' = 'changeClassBuilds',
  'loadSavedBuild' = 'loadSavedBuild',
  'resetBuildSignalWatcher' = 'resetBuildSignalWatcher',
  'loadUrlBuild' = 'loadUrlBuild',
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
  classBuilds: {},
  loadBuildSignal: false,
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
        return newState;
      }
      case TypeEnums.changeStats: {
        const newState = { ...state };
        newState.stats = action.payload;
        return newState;
      }
      // case TypeEnums.changeClassData: {
      //   const newState = { ...state };
      //   newState.classData = action.payload;
      //   return newState;
      // }
      case TypeEnums.changeCurrentBuild: {
        const newState = { ...state };
        newState.currentBuild = action.payload;
        return newState;
      }
      case TypeEnums.changeClassBuilds: {
        const newState = { ...state };
        newState.classBuilds = action.payload;
        return newState;
      }
      case TypeEnums.loadSavedBuild: {
        const newState = { ...state };
        newState.loadBuildSignal = action.payload.loadBuildSignal;
        newState.currentBuild = action.payload.currentBuild;
        return newState;
      }
      case TypeEnums.resetBuildSignalWatcher: {
        const newState = { ...state };
        newState.loadBuildSignal = action.payload.loadBuildSignal;
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
