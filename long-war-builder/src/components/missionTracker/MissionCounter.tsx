import { useEffect, useState } from 'react';
import missionsTable from '../../data/missionTable';
import { MissionStateInterface, MonthlyMissionsInterface } from '../../types/interfaces/MissionInterfaces';

interface MissionCounterProps {
  missionState: MissionStateInterface;
  missionDispatch: CallableFunction;
}

const MissionCounter = ({ missionState, missionDispatch }: MissionCounterProps): JSX.Element => {
  const { resourceLevel, threatLevel } = missionState.calculatedInputs;
  const { abduction, terror, research, scout, harvest, hunt, bomb, infiltrate, council } = missionState.missions;
  const { notes, retaliationCounter } = missionState;

  const [missionData, setMissionData] = useState<MonthlyMissionsInterface>(missionsTable[resourceLevel][threatLevel]);

  useEffect(() => {
    setMissionData(missionsTable[resourceLevel][threatLevel]);
  }, [resourceLevel, threatLevel]);

  useEffect(() => {
    loadMissionStateFromStorage();
  }, []);

  const inputClassName =
    'text-gray-300 bg-lightGray text-center rounded placeholder-gray-500 pl-1 w-8 focus:outline-none';
  const divContainerClassName = 'flex flex-nowrap my-1';

  const saveMissionStateToStorage = () => {
    localStorage.setItem('missionState', JSON.stringify(missionState));
  };

  const loadMissionStateFromStorage = () => {
    const storageString = localStorage.getItem('missionState');
    if (storageString == null) {
      return;
    }
    const storageObject: MissionStateInterface = JSON.parse(storageString);
    missionDispatch({ type: 'LOAD_STATE', payload: storageObject });
  };

  const clearMissionsHandler = () => {
    const resetMissions = {
      abduction: 0,
      terror: 0,
      research: 0,
      scout: 0,
      harvest: 0,
      hunt: 0,
      bomb: 0,
      infiltrate: 0,
      council: 0,
    };
    missionDispatch({ type: 'CHANGE_MISSIONS', payload: { ...resetMissions } });
  };

  return (
    <div
      className="flex flex-col flex-nowrap justify-center content-center text-gray-50 m-4 p-4 mt-1 pt-2 
    bg-darkGray opacity-100 h-auto rounded shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray"
    >
      <div>
        <h3 className="text-lg text-center">Mission Tracker</h3>
      </div>

      <div className="flex flex-row flex-nowrap">
        <div style={{ width: '40%' }}>
          <div className={divContainerClassName}>
            <p>Abduction:&nbsp;</p>
            <input
              type="number"
              value={abduction}
              className={inputClassName}
              onChange={(event) => {
                let number = Number(event.target.value);
                number = Math.max(number, 0);
                missionDispatch({ type: 'CHANGE_MISSIONS', payload: { abduction: number } });
              }}
            ></input>
            <p>&nbsp;/ {missionData?.abduction}</p>
          </div>

          {missionData?.terror && (
            <div className={divContainerClassName}>
              <p>Terror:&nbsp;</p>
              <input
                type="number"
                value={terror}
                className={inputClassName}
                onChange={(event) => {
                  let number = Number(event.target.value);
                  number = Math.max(number, 0);
                  missionDispatch({ type: 'CHANGE_MISSIONS', payload: { terror: number } });
                }}
              ></input>
              <p>&nbsp;/ {missionData?.terror}</p>
            </div>
          )}

          {missionData?.research && (
            <div className={divContainerClassName}>
              <p>Research:&nbsp;</p>
              <input
                type="number"
                value={research}
                className={inputClassName}
                onChange={(event) => {
                  let number = Number(event.target.value);
                  number = Math.max(number, 0);
                  missionDispatch({ type: 'CHANGE_MISSIONS', payload: { research: number } });
                }}
              ></input>
              <p>&nbsp;/ {missionData?.research}</p>
            </div>
          )}

          <div className={divContainerClassName}>
            <p>Scout:&nbsp;</p>
            <input
              type="number"
              value={scout}
              className={inputClassName}
              onChange={(event) => {
                let number = Number(event.target.value);
                number = Math.max(number, 0);
                missionDispatch({ type: 'CHANGE_MISSIONS', payload: { scout: number } });
              }}
            ></input>
            <p>&nbsp;/ {missionData?.scout}</p>
          </div>

          {missionData?.harvest && (
            <div className={divContainerClassName}>
              <p>Harvest:&nbsp;</p>
              <input
                type="number"
                value={harvest}
                className={inputClassName}
                onChange={(event) => {
                  let number = Number(event.target.value);
                  number = Math.max(number, 0);
                  missionDispatch({ type: 'CHANGE_MISSIONS', payload: { harvest: number } });
                }}
              ></input>
              <p>&nbsp;/ {missionData?.harvest}</p>
            </div>
          )}

          {missionData?.hunt && (
            <div className={divContainerClassName}>
              <p>Hunt:&nbsp;</p>
              <input
                type="number"
                value={hunt}
                className={inputClassName}
                onChange={(event) => {
                  let number = Number(event.target.value);
                  number = Math.max(number, 0);
                  missionDispatch({ type: 'CHANGE_MISSIONS', payload: { hunt: number } });
                }}
              ></input>
              <p>&nbsp;/ {missionData?.hunt}</p>
            </div>
          )}

          {missionData?.bomb && (
            <div className={divContainerClassName}>
              <p>Bomb:&nbsp;</p>
              <input
                type="number"
                value={bomb}
                className={inputClassName}
                onChange={(event) => {
                  let number = Number(event.target.value);
                  number = Math.max(number, 0);
                  missionDispatch({ type: 'CHANGE_MISSIONS', payload: { bomb: number } });
                }}
              ></input>
              <p>&nbsp;/ {missionData?.bomb}</p>
            </div>
          )}

          {missionData?.infiltrate && (
            <div className={divContainerClassName}>
              <p>Infiltrate:&nbsp;</p>
              <input
                type="number"
                value={infiltrate}
                className={inputClassName}
                onChange={(event) => {
                  let number = Number(event.target.value);
                  number = Math.max(number, 0);
                  missionDispatch({ type: 'CHANGE_MISSIONS', payload: { infiltrate: number } });
                }}
              ></input>
              <p>&nbsp;/ {missionData?.infiltrate}</p>
            </div>
          )}

          <div className={divContainerClassName}>
            <p>Council:&nbsp;</p>
            <input
              type="number"
              value={council}
              className={inputClassName}
              onChange={(event) => {
                let number = Number(event.target.value);
                number = Math.max(number, 0);
                missionDispatch({ type: 'CHANGE_MISSIONS', payload: { council: number } });
              }}
            ></input>
            <p>&nbsp;/ {missionData?.council}</p>
          </div>

          <div className={divContainerClassName}>
            <p>Retaliation Counter:&nbsp;</p>
            <input
              type="number"
              value={retaliationCounter}
              className={inputClassName}
              onChange={(event) => {
                let number = Number(event.target.value);
                number = Math.max(number, 0);
                missionDispatch({ type: 'CHANGE_RETALIATION_COUNTER', payload: number });
              }}
            ></input>
            <p>&nbsp;/ 3&nbsp;</p>
            <p className="has-tooltip">
              ?
              <span className="tooltip w-max text-center">
                Base Defence occurs after 3 months (not necessarily in a row) of 4 Threat and 4 Resources, or March of
                Y2.
              </span>
            </p>
          </div>

          <div className="flex flex-nowrap my-8">
            <button
              className="rounded py-1 px-2 m-1 w-max self-center focus:outline-none  bg-green-800 hover:bg-green-700"
              onClick={saveMissionStateToStorage}
            >
              Save
            </button>
            <button
              className="rounded py-1 px-2 m-1 w-max self-center focus:outline-none  bg-blue-700 hover:bg-blue-600"
              onClick={loadMissionStateFromStorage}
            >
              Load
            </button>
            <button
              className="rounded py-1 px-2 m-1 w-max self-center focus:outline-none  bg-gray-700 hover:bg-gray-600"
              onClick={clearMissionsHandler}
            >
              Clear Missions
            </button>
          </div>
        </div>

        <div style={{ width: '60%' }}>
          <textarea
            placeholder="Notes"
            style={{ resize: 'none', height: '40vh' }}
            value={notes}
            onChange={(event) => {
              missionDispatch({ type: 'CHANGE_NOTES', payload: event.target.value });
            }}
            className="mt-1 pl-1.5 text-gray-200 rounded bg-lightGray placeholder-gray-500 focus:outline-none 
            w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionCounter;
