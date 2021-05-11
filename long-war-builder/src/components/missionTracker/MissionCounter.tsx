import { useEffect, useState } from 'react';
import missionsTable from '../../data/missionTable';
import { MonthlyMissionsInterface } from '../../types/interfaces/MissionInterfaces';

interface MissionCounterProps {
  resourceLevel: number;
  threatLevel: number;
}

const MissionCounter = ({ resourceLevel, threatLevel }: MissionCounterProps): JSX.Element => {
  const [abduction, setAbduction] = useState(0);
  const [terror, setTerror] = useState(0);
  const [research, setResearch] = useState(0);
  const [scout, setScout] = useState(0);
  const [harvest, setHarvest] = useState(0);
  const [hunt, setHunt] = useState(0);
  const [bomb, setBomb] = useState(0);
  const [infiltrate, setInfiltrate] = useState(0);
  const [council, setCouncil] = useState(0);

  const [missionData, setMissionData] = useState<MonthlyMissionsInterface>(missionsTable[resourceLevel][threatLevel]);

  const inputClassName = 'text-gray-700 rounded bg-gray-300 placeholder-gray-500 pl-1 w-12 focus:outline-none';
  const divContainerClassName = 'flex flex-nowrap my-1';

  useEffect(() => {
    setMissionData(missionsTable[resourceLevel][threatLevel]);
  }, [resourceLevel, threatLevel]);

  const inputChangeHandler = (value: string, setter: (input: number) => void, maxNum: number | undefined) => {
    let number = Number(value);
    if (maxNum) {
      const maxNumRounded = Math.ceil(maxNum) + 2;
      number = Math.min(number, maxNumRounded);
    }
    number = Math.max(number, 0);
    setter(number);
  };

  // Could set up a dispatch to handle general changes and map the missionData keys instead
  return (
    <div className="flex flex-col flex-nowrap justify-center content-center text-gray-50 m-4 p-4 mt-1 pt-2 bg-darkGray opacity-100 h-auto rounded shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-scrollbarGray">
      <div>
        <h3 className="text-lg text-center">Mission Tracker</h3>
      </div>

      <div className={divContainerClassName}>
        <p>Abduction:&nbsp;</p>
        <input
          type="number"
          value={abduction}
          className={inputClassName}
          onChange={(event) => {
            inputChangeHandler(event.target.value, setAbduction, missionData?.Abduction);
          }}
        ></input>
        <p>&nbsp;/ {missionData?.Abduction}</p>
      </div>

      {missionData.Terror && (
        <div className={divContainerClassName}>
          <p>Terror:&nbsp;</p>
          <input
            type="number"
            value={terror}
            className={inputClassName}
            onChange={(event) => {
              inputChangeHandler(event.target.value, setTerror, missionData?.Terror);
            }}
          ></input>
          <p>&nbsp;/ {missionData?.Terror}</p>
        </div>
      )}

      {missionData.Research && (
        <div className={divContainerClassName}>
          <p>Research:&nbsp;</p>
          <input
            type="number"
            value={research}
            className={inputClassName}
            onChange={(event) => {
              inputChangeHandler(event.target.value, setResearch, missionData?.Research);
            }}
          ></input>
          <p>&nbsp;/ {missionData?.Research}</p>
        </div>
      )}

      <div className={divContainerClassName}>
        <p>Scout:&nbsp;</p>
        <input
          type="number"
          value={scout}
          className={inputClassName}
          onChange={(event) => {
            inputChangeHandler(event.target.value, setScout, missionData?.Scout);
          }}
        ></input>
        <p>&nbsp;/ {missionData?.Scout}</p>
      </div>

      {missionData.Harvest && (
        <div className={divContainerClassName}>
          <p>Harvest:&nbsp;</p>
          <input
            type="number"
            value={harvest}
            className={inputClassName}
            onChange={(event) => {
              inputChangeHandler(event.target.value, setHarvest, missionData?.Harvest);
            }}
          ></input>
          <p>&nbsp;/ {missionData?.Harvest}</p>
        </div>
      )}

      {missionData.Hunt && (
        <div className={divContainerClassName}>
          <p>Hunt:&nbsp;</p>
          <input
            type="number"
            value={hunt}
            className={inputClassName}
            onChange={(event) => {
              inputChangeHandler(event.target.value, setHunt, missionData?.Hunt);
            }}
          ></input>
          <p>&nbsp;/ {missionData?.Hunt}</p>
        </div>
      )}

      {missionData.Bomb && (
        <div className={divContainerClassName}>
          <p>Bomb:&nbsp;</p>
          <input
            type="number"
            value={bomb}
            className={inputClassName}
            onChange={(event) => {
              inputChangeHandler(event.target.value, setBomb, missionData?.Bomb);
            }}
          ></input>
          <p>&nbsp;/ {missionData?.Bomb}</p>
        </div>
      )}

      {missionData.Infiltrate && (
        <div className={divContainerClassName}>
          <p>Infiltrate:&nbsp;</p>
          <input
            type="number"
            value={infiltrate}
            className={inputClassName}
            onChange={(event) => {
              inputChangeHandler(event.target.value, setInfiltrate, missionData?.Infiltrate);
            }}
          ></input>
          <p>&nbsp;/ {missionData?.Infiltrate}</p>
        </div>
      )}

      <div className={divContainerClassName}>
        <p>Council:&nbsp;</p>
        <input
          type="number"
          value={council}
          className={inputClassName}
          onChange={(event) => {
            inputChangeHandler(event.target.value, setCouncil, missionData?.Council);
          }}
        ></input>
        <p>&nbsp;/ {missionData?.Council}</p>
      </div>
    </div>
  );
};

export default MissionCounter;
