import { Fragment } from 'react';
import { MissionStateInterface } from '../../types/interfaces/MissionInterfaces';

interface SetResourceProps {
  missionState: MissionStateInterface;
  missionDispatch: CallableFunction;
}
const SetResources = ({ missionState, missionDispatch }: SetResourceProps): JSX.Element => {
  const { resourceLevel, threatLevel } = missionState.calculatedInputs;

  return (
    <Fragment>
      <div className="flex-grow">
        <div className="flex flex-row flex-nowrap justify-left content-center mb-4">
          <p>Resource Level:&nbsp;</p>
          <input
            type="number"
            value={resourceLevel}
            className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-12 focus:outline-none"
            onChange={(event) => {
              let number = Number(event.target.value);
              number = Math.min(number, 4);
              number = Math.max(number, 0);
              missionDispatch({ type: 'CHANGE_CALCULATED_INPUTS', payload: { resourceLevel: number } });
            }}
          ></input>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex flex-row flex-nowrap justify-left content-center mb-4">
          <p>Threat Category Level:&nbsp;</p>
          <input
            type="number"
            value={threatLevel}
            className="text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-12 focus:outline-none"
            onChange={(event) => {
              let number = Number(event.target.value);
              number = Math.min(number, 4);
              number = Math.max(number, 0);
              missionDispatch({ type: 'CHANGE_CALCULATED_INPUTS', payload: { threatLevel: number } });
            }}
          ></input>
        </div>
      </div>
    </Fragment>
  );
};

export default SetResources;
