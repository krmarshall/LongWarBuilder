import { Fragment, useReducer } from 'react';
import MissionCalculator from '../components/missionTracker/MissionCalculator';
import MissionCounter from '../components/missionTracker/MissionCounter';
import MissionReference from '../components/missionTracker/MissionReference';
import NavHeader from '../components/NavHeader';
import { MissionStateInterface } from '../types/interfaces/MissionInterfaces';

const MissionTracker = (): JSX.Element => {
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
  };

  //@ts-expect-error 2769
  const [missionState, missionDispatch] = useReducer(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: MissionStateInterface, action: { type: string; payload: any }) => {
      switch (action.type) {
        case 'TOGGLE_CALCULATE': {
          const newState = { ...state };
          newState.calculatedInputs.calculateToggle = action.payload;
          return newState;
        }
        case 'CHANGE_CALCULATED_INPUTS': {
          const newState = { ...state };
          newState.calculatedInputs = { ...newState.calculatedInputs, ...action.payload };
          return newState;
        }
        case 'CHANGE_MISSIONS': {
          const newState = { ...state };
          newState.missions = { ...newState.missions, ...action.payload };
          return newState;
        }
        case 'CHANGE_NOTES': {
          const newState = { ...state };
          newState.notes = action.payload;
          return newState;
        }
        default: {
          break;
        }
      }
    },
    initialState
  );
  return (
    <Fragment>
      <NavHeader classSelector={false} location={'missions'} />

      <div className="flex flex-row flex-nowrap" style={{ maxHeight: '86%' }}>
        <div className="flex flex-col flex-nowrap flex-grow">
          <MissionCalculator missionState={missionState} missionDispatch={missionDispatch} />
          <MissionCounter missionState={missionState} missionDispatch={missionDispatch} />
        </div>
        <div className="flex flex-col flex-nowrap">
          <MissionReference />
        </div>
      </div>
    </Fragment>
  );
};

export default MissionTracker;
