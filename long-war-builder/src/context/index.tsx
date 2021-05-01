import React, { createContext, useReducer } from 'react';
import rookie from '../data/rookie';

interface StateInterface {
  className: string;
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
  'changeLoadBuildSignal' = 'changeLoadBuildSignal',
}

const initialState: StateInterface = {
  className: '',
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
        newState.className = action.payload;
        return newState;
      }
      case TypeEnums.changeStats: {
        const newState = { ...state };
        newState.stats = action.payload;
        return newState;
      }
      case TypeEnums.changeClassData: {
        const newState = { ...state };
        newState.classData = action.payload;
        return newState;
      }
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
      case TypeEnums.changeLoadBuildSignal: {
        const newState = { ...state };
        newState.loadBuildSignal = action.payload;
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
