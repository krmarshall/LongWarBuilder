import { useContext } from 'react';
import { useHistory } from 'react-router';
import { missionContext, MissionContextTypeEnums } from '../../context/missionContext';
import CalculateResources from './CalculateResources';
import SetResources from './SetResources';

const MissionTracker = (): JSX.Element => {
  const history = useHistory();
  //@ts-expect-error 2461
  const [missionState, missionDispatch] = useContext(missionContext);

  return (
    <div className="flex flex-col flex-nowrap justify-center content-center text-gray-50 m-4 p-4 mt-1 pt-2 bg-darkGray opacity-100 h-auto rounded shadow-lg">
      <div>
        <h3 className="text-lg text-center">
          Mission Calculator&nbsp;
          <a
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              history.push('/missions/about');
            }}
          >
            ?
          </a>
        </h3>

        <div className="flex items-center justify-center w-auto mb-2 select-none">
          <p
            className="mr-4 font-medium cursor-pointer"
            onClick={() => {
              missionDispatch({
                type: MissionContextTypeEnums.toggleCalculate,
                payload: !missionState.calculatedInputs.calculateToggle,
              });
            }}
          >
            Set
          </p>
          <label htmlFor="toggleA" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="toggleA"
                type="checkbox"
                className="sr-only"
                checked={missionState.calculatedInputs.calculateToggle}
                onChange={() => {
                  missionDispatch({
                    type: MissionContextTypeEnums.toggleCalculate,
                    payload: !missionState.calculatedInputs.calculateToggle,
                  });
                }}
              />
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
            </div>
            <div className="ml-3 text-gray-50 font-medium">Calculate</div>
          </label>
        </div>
      </div>

      <div className="flex flex-row flex-nowrap">
        {missionState.calculatedInputs.calculateToggle ? <CalculateResources /> : <SetResources />}
      </div>
    </div>
  );
};

export default MissionTracker;
